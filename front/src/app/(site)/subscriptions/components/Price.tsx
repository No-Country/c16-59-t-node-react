
interface PriceProps {
  price:string
  color:string
}

export const Price:React.FC<PriceProps> = ({price,color})=>{
  const bgColor = `bg-${color}`
  return (
    <div className="flex justify-end absolute mb-[45px] ml-[515px]">
      <div className={`rounded-none font-semibold ${bgColor} pr-7 pl-5`}>
      {price}
      </div>
    </div>
  )
}