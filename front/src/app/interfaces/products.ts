import { PrdDescription, PrdId, PrdName, PrdSalesPresentation, Price } from "./types";

export interface ProductApi {
  id: PrdId;
  name: PrdName;
  price: Price;
  description: PrdDescription;
  category: Category;
  salesPresentation: PrdSalesPresentation;
  image: Image[];
}

export interface CarProductI extends Pick
<ProductApi, "id" | "name" | "price" | "description">{
  image: string[]
}

export interface CarPrdImg extends Pick
<CarProductI,"name"|"image">{}

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
