import { DeliveryOptions } from "@/app/interfaces/constants";
import { Category } from "@/app/interfaces/products";

export const URL_API_FRUITS =
  "https://la-huerta.onrender.com/api/v1/products/category/fruit";

export const URL_API_VEGETABLES =
  "https://la-huerta.onrender.com/api/v1/products/category/vegetable";

export const URL_API_PROCESSEDFOODS =
  "https://la-huerta.onrender.com/api/v1/products/category/processed-food";

// delivery options
export const DELIVERY_OPTIONS: DeliveryOptions[] = [
  {
    id: 1,
    title: "Entrega puerta a puerta:",
    description: [
      {
        text: "Recargo de acuerdo a tu dirección de residencia ",
      },
      {
        text: "entre las 9am y las 5 pm.",
        bold: true,
      },
    ],
    image:
      "https://s3-alpha-sig.figma.com/img/7d13/9cf0/03175bd624aaef6d5de715d3535fa536?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VYAfCwvypym1j4uq-qAgqXFI70IxpBlg6Lky52XhyzSSHnmKfnJkdRQpO-GUVLUcZJNn~bVKyBDMR6moWgti12hqIYo9Jl1sCfI1gjoLGKhyBa3jUbCB4nbZgbFqqR3jizL3crKwyrC4-4b~8GK8CAviAkK1seqceEsQQWydq6qRc~4OmenEorVqkcS6OSmzPhmFGVaMARgP8MhScEk4~e0itGFI~RSLgsrlBsSuLohz1F-C9Ja988vBT~A3rpfRvrFqxxDZaQUYp9kdLknW0ZGptWLhuzcoVu9ZzFRTMKYsmWPZ1K8IKnGrtiaGOWLV-anQO~KVFT7JZ9ThyO-X8Q__",
    titleButton: "Puerta a puerta",
  },
  {
    id: 2,
    title: "Recógelo en nuestra sede:",
    description: [
      {
        text: "Sin recargo adicional, los dias ",
      },
      {
        text: "VIERNES ",
        bold: true,
      },
      {
        text: "de cada semana, ",
      },
      {
        text: "entre las 9am y las 5 pm.",
        bold: true,
      },
    ],
    image:
      "https://s3-alpha-sig.figma.com/img/45f2/d289/50a274ab6c553b2b9676e007fd81a899?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H0cVmbaS8EsLJBw48rUvQJJpyNWpg4rshKPQvjYkdEnzsMelhd-Dnp89-aibdxC6EJngwG1dkkbw4hZkuQuM9utCMCd96jbfseGkNmUPmaFcLdJPgJIr0sPSWE-y1~LsmxKnqLojZeLAJ6Z1~fGHkTJK5-Dqegae~raEya39FVvQ861kjh9KY~euo5W5RJO1uhqLCmDmjpbkZzLRW4EmgOw-J6thLc~BOjlTkJzEWNqq6jaGhtLNdoVYDMuCN37Ebpc0-4GkQD11cRK6eZ2klJYUNzA2giH~LYcB8n8~MeZitjhFyoLRiSvfIJWg8DT9dCOKaB-OjVb-x1VpXqD7uQ__",
    titleButton: "En nuestra sede",
  },
];

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
