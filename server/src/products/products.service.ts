import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import toStream from 'buffer-to-stream';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DataSource, Repository } from 'typeorm';
import { ProductImage } from './entities/product-image.entity';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { isUUID } from 'class-validator';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

@Injectable()
export class ProductsService {
  private readonly logger = new Logger('ProductsService');

  constructor(
    //Sirve para hacer query builders, transacciones, etc.
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    // Para poder crear las instancias
    @InjectRepository(ProductImage)
    private readonly productImageRepository: Repository<ProductImage>,

    // De typeORM para saber la cadena de conexion de la DB, el usuario
    // de la DB, tiene la misma config que los repositorios
    // Se usa para el Query Runner
    private readonly dataSource: DataSource,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const { image = [], ...propertiesProduct } = createProductDto;

      //Solo crea
      const product = this.productRepository.create({
        ...propertiesProduct,
        image: image.map((image) =>
          this.productImageRepository.create({ url: image }),
        ),
      });

      //Guarda en la Baase de Datos
      await this.productRepository.save(product);

      // Para evitar retornar el id en las imagenes
      return { ...product, image };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async uploadImage(file: Express.Multer.File) {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'La-Huerta/products',
          use_filename: true,
          unique_filename: false,
        },
        (error, result) => {
          if (error) {
            return reject(error);
          }

          console.log('result', result);

          resolve(result);
        },
      );

      toStream(file.buffer).pipe(uploadStream);

      //Falta alojarlo en DB
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    const products = await this.productRepository.find({
      take: limit,
      skip: offset,
      relations: {
        image: true,
      },
    });

    return products.map(({ image, ...rest }) => ({
      ...rest,
      image: image.map((image) => image.url),
    }));
  }

  async findOne(term: string) {
    let product: Product;

    if (isUUID) {
      product = await this.productRepository.findOneBy({ id: term });
    } else {
      const queryBuilder = this.productRepository.createQueryBuilder('prod');

      product = await queryBuilder
        .where('UPPER(title) = :title or slug = :slug', {
          name: term.toUpperCase(),
          slug: term.toLowerCase(),
        })
        .leftJoinAndSelect('prod.image', 'prodImage')
        .getOne();
    }

    if (!product) {
      throw new NotFoundException(`Product with ${term} was not found`);
    }

    return product;
  }

  //To plain images and return without IDs
  // async findOnePlain(term: string) {
  //   const {
  //     image: [],
  //     ...rest
  //   } = await this.findOne(term);

  //   return {
  //     ...rest,
  //     image: image.map((image) => image.url),
  //   };
  // }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: string) {
    const product = await this.findOne(id);

    await this.productRepository.remove(product);
  }

  private handleDBExceptions(error: any) {
    // console.log(error);
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }

    //Manejar otros errores
    this.logger.error(error);

    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
