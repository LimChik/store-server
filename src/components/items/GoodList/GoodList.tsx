
import{FC} from 'react'
import { IItem } from '../../../type/Item'

import GoodItem from '../GoodItem/GoodItem';
import cl from './GoodList.module.css'
interface IGoodListProps {
   item:IItem[];
   
}
const GoodList:FC<IGoodListProps> = ({item}) => {

  return (
    <>
     
      <div className={cl.goodList__body}>
        {item.map((elem) => (
          <GoodItem item={elem} key={elem.id} />
        ))}
      </div>
    </>
    
  )
}

export default GoodList

