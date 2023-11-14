
import{FC} from 'react'
import { IItem } from '../../../type/Item'

import GoodItem from '../GoodItem/GoodItem';
import cl from './GoodList.module.css'
import { useAppSelector } from '../../../hooks';
interface IGoodListProps {
   item:IItem[];
   
}
const GoodList:FC<IGoodListProps> = ({item}) => {
  const maxId=useAppSelector(state=>state.singlePage.maxIdItem);
  const minId=useAppSelector(state=>state.singlePage.minIdItem);
  return (
    <>
     
      <div className={cl.goodList__body}>
        {item.map((elem) => (
          elem.id < maxId && elem.id>=minId && <GoodItem item={elem} key={elem.id} />
        ))}
      </div>
    </>
    
  )
}

export default GoodList

