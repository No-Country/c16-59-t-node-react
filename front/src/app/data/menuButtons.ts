import { RouteBtnI } from "../interfaces/Buttons";

export const menuButtons:RouteBtnI[] = [
  {
    children: "¿Cómo comprar con nosotros?",
    route:"/",
    bgColor:"primary-yellow",
    size:"lg"
  },
  {
    children: "La Huerta Box",
    route:"/subscriptions",
    bgColor:"primary-yellow",
    size:"lg"
  },
  {
    children: "Productos del Mes",
    route:"/catalog",
    bgColor:"tertiary-green",
    size:"lg"
  }
]