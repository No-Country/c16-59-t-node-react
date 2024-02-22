export interface ProductsApi {
  id: string;
  name: string;
  price: number;
  description: null;
  stock: number;
  category: Category;
  slug: string;
  salesPresentation: string;
  image: string[];
}

export enum Category {
  Fruit = "fruit",
  ProcessedFood = "processed-food",
  Vegetable = "vegetable",
}
