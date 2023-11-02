
import  { FC, useEffect, useState } from 'react';
import { IItem, items } from '../../../type/Item';
import FilterItems from '../../items/FilterItems/FilterItems';


import GoodList from '../../items/GoodList/GoodList';
import cl from './Product.module.css';


const Product: FC = () => {
  const [item, setItem] = useState<IItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<IItem[]>([]);
  const [isCheck,setIsCheck]=useState(true)


  const filterCard = (filterItem: IItem[]) => {
    if (filterItem.length!=0) {
      setFilteredItems([...filterItem]);
      setIsCheck(true)
      console.log('Сработал Фильтер кард', filterItem);
    } else {
      setFilteredItems([]);
      setIsCheck(false)
     
    }
  };

  const isChecked=()=>{

    setIsCheck(true)
    setItem(items)
  }


  useEffect(() => {
    if (filteredItems.length === 0) {
      setItem(items);
      
    } else {
      setItem(filteredItems);

    }
  }, [filteredItems,items]);


  return (
    <div className={cl.product}>
      <div className={cl.product__container}>
        <div className={cl.product__body}>
          <FilterItems isChecked={isChecked} item={items} filterCard={filterCard} />
          { isCheck ?<GoodList item={item}  /> : <div style={{textAlign:'center',color:'red',width:'100%'}}>Товаров не найдено</div>}
        </div>


      </div>
      
    </div>
  )
}

export default Product