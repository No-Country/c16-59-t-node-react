import { DeliveryType } from "@/app/interfaces/delivery";
import { Category } from "@/app/interfaces/products";

export const URL_API_FRUITS =
  "https://la-huerta.onrender.com/api/v1/products/category/fruit";

export const URL_API_VEGETABLES =
  "https://la-huerta.onrender.com/api/v1/products/category/vegetable";

export const URL_API_PROCESSEDFOODS =
  "https://la-huerta.onrender.com/api/v1/products/category/processed-food";

export const PRODUCTS_CATEGORIES = [
  {
    id: "1",
    ariaLabel: "Verduras de temporada",
    title: "Verduras de temporada",
    category: Category.Vegetable,
  },
  {
    id: "2",
    ariaLabel: "Frutas de temporada",
    title: "Frutas de temporada",
    category: Category.Fruit,
  },
  {
    id: "3",
    ariaLabel: "Procesados naturales",
    title: "Procesados naturales",
    category: Category.ProcessedFood,
  },
];

// Stripe
export const STRIPE_PROMISE_CLIENT = process.env.STRIPE_PUBLIC_KEY_PARSER;
export const STRIPE_SERVER = process.env.STRIPE_SECRET_KEY;

// localstorage
export const DATA_USER = {
  token: "tokendelusuario",
  email: "luis@gmail.com",
};

export const IMAGE_LOGIN =
  "https://media.discordapp.net/attachments/1204880565073871013/1215457404842418196/Laura_M_Guauque_C_Large.jpeg?ex=65fcd1eb&is=65ea5ceb&hm=e6bd67c7bf449a0993acfb1b6eb96275c9da519c0eea82122472a3cc83b50df0&=&format=webp&width=537&height=537";

export const NOMBRE_USUARIO_LOGIN = "Bienvenida_Laura";
