export interface ProductApi {
  id: string;
  name: string;
  price: number;
  description: null;
  category: Category;
  salesPresentation: string;
  image: Image[];
}

export interface ProductsTotalApi extends Omit<ProductApi, "image"> {
  stock: number;
  slug: string;
  image: string[];
}

export enum Category {
  Fruit = "fruit",
  ProcessedFood = "processed-food",
  Vegetable = "vegetable",
}

export interface Image {
  id: number;
  url: string;
}
