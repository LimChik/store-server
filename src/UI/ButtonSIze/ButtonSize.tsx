import React,{FC} from 'react'
import { memo } from 'react';
interface IButtonSizeProps{
   
   text:number;
   value:number;
   className:string;

}
const ButtonSize:FC<IButtonSizeProps> = memo(({text,className,value}) => {
  return (
    <button className={className} value={value}  >{text}</button>
  )
})

export default ButtonSize