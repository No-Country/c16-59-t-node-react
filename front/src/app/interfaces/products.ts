import { Img, PrdDescription, PrdId, PrdName, PrdSalesPresentation, Price } from "./types";

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
<ProductApi, "id" | "name" | "price" | "image" | "description">{

}

export interface ProductsTotalApi extends Omit<ProductApi, "image"> {
  stock: number;
  slug: string;
  image: string[];
}

export interface PrdDetailI extends Omit<ProductApi, "image" | "salesPresentation">{
  image: Img
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
