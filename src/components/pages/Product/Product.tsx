
import  { FC, useEffect, useState } from 'react';
import { IItem, items } from '../../../type/Item';
import FilterItems from '../../items/FilterItems/FilterItems';


import GoodList from '../../items/GoodList/GoodList';
import cl from './Product.module.css';
import AppPagination from '../../UI/Pagination/AppPagination';


const Product: FC = () => {
  const [item, setItem] = useState<IItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<IItem[]>([]);
  const [isCheck,setIsCheck]=useState(true)
  const page: number[] = [];
  const [paginateItem,setPaginateItem]=useState(0)

  const filterCard = (filterItem: IItem[]) => {
    if (filterItem.length!=0) {
      setFilteredItems([...filterItem]);
      setIsCheck(true)
    
    } else {
      setFilteredItems([]);
      setIsCheck(false)
      setPaginateItem(0)
      
     
    }
  };

  const isChecked=()=>{

    setIsCheck(true)
    setItem(items)
  }
useEffect(()=>{
  setPaginateItem(Math.ceil(items.length / 10))
},[])

  useEffect(() => {
    
    if (filteredItems.length === 0) {
      setItem(items);
      
      
    }
   
     else {
      setItem(filteredItems);
      setPaginateItem(Math.ceil(filteredItems.length / 10))

    }
    
  }, [filteredItems,items]);


  return (
    <div className={cl.product}>
      
      <div className={cl.product__container}>
        
        <div className={cl.product__body}>
          <FilterItems setPaginationItem={setPaginateItem} isChecked={isChecked} item={items} filterCard={filterCard} />
          { isCheck ?<GoodList item={item}  /> : <div style={{textAlign:'center',color:'red',width:'100%'}}>Товаров не найдено</div>}
        </div>

        <AppPagination item={paginateItem} page={page} />
      </div>
      
    </div>
  )
}

export default Product