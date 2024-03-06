import { Route } from "next";
import { ReactNode } from "react";
import { Color, Size } from "./types";


 
interface ButtonI {
  children: ReactNode;
  bgColor?: Color
  size?: Size
}

export interface RouteBtnI extends ButtonI{
  route: Route
}

export interface FncBtnI extends ButtonI{
  onClick:()=>void
}

export interface ModalBtnI extends ButtonI{
  btnContent: string | React.ReactNode
  children: React.ReactNode
}