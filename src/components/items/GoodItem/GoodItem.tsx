import {FC} from 'react'
import { Link } from 'react-router-dom'
import { IItem } from '../../../type/Item'
import cl from './GoodItem.module.css'
interface IItemProps{
   item:IItem
}
const GoodItem:FC<IItemProps> = ({item}) => {
  return (
    <div className={cl.body}>
      <div className={cl.body__image}><img src={item.image} alt="" /></div>
      <div className={cl.body__info}>
        <div className={cl.body__name}>{item.name}</div>
        <div className={cl.body__gender}>{item.gender}</div>
        <div className={cl.body__price}>{item.price}</div>
        <div >{item.size}</div>
        <Link to={`/product/${item.id}`}>нажми меня</Link>
      </div>
      </div>
      
  )
}

export default GoodItem