
interface PriceProps {
  price:string
  bgColor:string
}

export const Price:React.FC<PriceProps> = ({price,bgColor})=>{
  return (
    <div className="flex justify-end">
      <div className={`rounded-none font-bold ${bgColor}`}>
      {price}
      </div>
    </div>
  )
}