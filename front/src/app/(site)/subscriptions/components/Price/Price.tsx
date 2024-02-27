import { classPriceContainer } from "./classNames"

interface PriceProps {
  price:string
  color:string
}

export const Price:React.FC<PriceProps> = ({price,color})=>{
  const bgColor = `bg-${color}`
  return (
    <div className={classPriceContainer}>
      <div className={`rounded-none font-semibold ${bgColor} pr-7 pl-5`}>
      {price}
      </div>
    </div>
  )
}