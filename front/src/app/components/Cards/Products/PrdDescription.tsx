import { PrdDetailI } from "@/app/interfaces/products";
import { FC } from "react";

interface DescriptionProps extends Pick<PrdDetailI, "description">{}

export const PrdDescriptionC:FC<DescriptionProps> = ({description}) =>{
  return(
    <div>
      <strong>Descripción:</strong>
      <p>{description}</p>
    </div>
  )
}