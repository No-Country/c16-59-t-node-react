import { BulletText } from "../components"

interface UnorderedListProps{
  data:string[]
}


export const UnorderedList:React.FC<UnorderedListProps> = ({data}) =>{
  return(
    <div>
      <span>Contiene*:</span>
      {data.map((el,index)=><BulletText txt={el} key={index}/>)}
    </div>
  )
}