import { Color, Price } from "@/app/interfaces/types"
import clsx from "clsx"
import { classPriceContainer, priceDisplay } from "./classNames"

interface PriceProps {
  price: Price
  color: Color
  className?:string
}

export const PriceC: React.FC<PriceProps> = ({ price, color, className }) => {
  const bgColor = `bg-${color}`
  // Verifica si price tiene un valor; si no, muestra "N/A" o cualquier otro valor predeterminado
  const displayPrice = `${price}`

  return (
    <div className={clsx(classPriceContainer, className)}>
      <div className={`${priceDisplay} ${bgColor}`}>
        {displayPrice}
      </div>
    </div>
  )
}
