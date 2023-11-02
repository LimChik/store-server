import React,{FC, memo, useEffect, useState} from 'react'

import { IItem } from '../../../type/Item'
import cl from './FilterItems.module.css'
import PriceFilter from './PriceFilter/PriceFilter';
import SizeFilter from './SizeFilter/SizeFilter';
import BrandFilter from './BrandFilter/BrandFilter';
interface IFilterItemsProps{
   item:IItem[];
   filterCard:(filterItem:IItem[])=>void;
   isChecked:()=>void;
  
}
const FilterItems:FC<IFilterItemsProps> = memo(({item,filterCard,isChecked}) => {

const [filterItem,setFilterItem]=useState<IItem[]>([])

const [minInputValue,setMinInputValue]=useState('');//Минимальное значение введеного значения инпута для цены кроссовок
const [maxInputValue, setMaxInputValue] = useState('');//Максимальное значение введеного значения инпута для цены кроссовок
const[sizeInputValue,setSizeInputValue]=useState<number[]>([])//массив выбранных для фильтрации размеров обуви;
const [brandSelected,setBrandSelected]=useState<string[]>([])//массив выбранных брендов кроссовок

 function sortPrice(){
     filterCard(item.filter((elem) =>(elem.price >= Number(minInputValue)) && (elem.price <= Number(maxInputValue)) && sizeInputValue.includes(elem.size)  &&brandSelected.includes(elem.brand)
   ))}

   function stopFilterClick(){
      setSizeInputValue([]);
      setMinInputValue('');
      setMaxInputValue('');
      isChecked();
   
    
   }
   function getChangeMaxValue(value:string){
      setMaxInputValue(value)
   }
   function getChangeMinValue(value:string){
      setMinInputValue(value)
   }

   function getArrSize(value: React.SetStateAction<number[]>){
      setSizeInputValue(value)
   }



useEffect(()=>{
   
   const arrValue: number[] = [];
   filterItem.map((elem) => {
      arrValue.push(elem.price)    
   });
   
}, [filterItem])


  return (
   <div className={cl.filter__body} >
            <PriceFilter getChangeMinValue={getChangeMinValue} getChangeMaxValue={getChangeMaxValue} item={item}/>
            <SizeFilter getArrSize={getArrSize}/>
            <BrandFilter item={item} setBrandSelected={setBrandSelected} brandSelected={brandSelected} />
        
        <button onClick={sortPrice}>Нажми меня</button>
        <button onClick={stopFilterClick}>Сбросить фильтер</button>
        
   </div>
  
  )
})

export default FilterItems;