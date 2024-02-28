import { classPriceContainer, priceDisplay } from "./classNames"

interface PriceProps {
  price:string
  color:string
}

export const Price:React.FC<PriceProps> = ({price,color})=>{
  const bgColor = `bg-${color}`
  return (
    <div className={classPriceContainer}>
      <div className={`${bgColor} ${priceDisplay}`}>
      {price}
      </div>
    </div>
  )
}