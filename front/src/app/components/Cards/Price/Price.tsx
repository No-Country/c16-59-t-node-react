import { Color, Price } from "@/app/interfaces/types"
import { classPriceContainer, priceDisplay } from "./classNames"

interface PriceProps {
  price: Price
  color: Color
}

export const PriceC: React.FC<PriceProps> = ({ price, color }) => {
  const bgColor = `bg-${color}`
  // Verifica si price tiene un valor; si no, muestra "N/A" o cualquier otro valor predeterminado
  const displayPrice = `$${price}`

  return (
    <div className={classPriceContainer}>
      <div className={`${priceDisplay} ${bgColor}`}>
        {displayPrice}
      </div>
    </div>
  )
}
