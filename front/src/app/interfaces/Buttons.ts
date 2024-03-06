import { ReactNode } from "react";

type Color = "primary-yellow" | "secondary-orange" | "tertiary-green"
type Route = `/${string}`
type Size = "none" | "lg"
 
interface ButtonI {
  children: ReactNode;
  bgColor: Color
  size: Size
}

export interface RouteBtnI extends ButtonI{
  route: Route
}

export interface FncBtnI extends ButtonI{
  onClick:()=>void
}