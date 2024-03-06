import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  Query,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Post()
  @Auth(ValidRoles.seller, ValidRoles.admin, ValidRoles.superUser)
  create(@Body() createProductDto: CreateProductDto, @GetUser() user: User) {
    return this.productsService.create(createProductDto, user);
  }

  //To stablish the route products/image-upload
  @Post('image-upload')
  @Auth(ValidRoles.seller, ValidRoles.admin, ValidRoles.superUser)
  @UseInterceptors(FilesInterceptor('file', 5))
  uploadImage(@UploadedFiles() files: Express.Multer.File[]) {
    const uploadPromises = files.map((file) =>
      this.cloudinaryService.uploadFile(file),
    );
    return Promise.all(uploadPromises);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.productsService.findAll(paginationDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.productsService.findOne(term);
  }

  @Get('category/:category')
  findCategory(@Param('category') category: string) {
    return this.productsService.findCategory(category);
  }

  @Patch(':id')
  @Auth(ValidRoles.seller, ValidRoles.admin, ValidRoles.superUser)
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @Auth(ValidRoles.seller, ValidRoles.admin, ValidRoles.superUser)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.remove(id);
  }
}
