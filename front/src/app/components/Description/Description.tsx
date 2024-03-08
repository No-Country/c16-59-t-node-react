import { ProductApi } from "@/app/interfaces/products";
import { FC } from "react";

interface DescriptionProps extends Pick<ProductApi, "description">{}

export const DescriptionC:FC<DescriptionProps> = ({description}) =>{
  return(
    <div>
      <strong>Descripción:</strong>
      <p className="">{description}</p>
    </div>
  )
}