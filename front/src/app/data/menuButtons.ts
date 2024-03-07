import { RouteBtnI } from "../interfaces/Buttons";

export const menuRouteButtons:RouteBtnI[] = [
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