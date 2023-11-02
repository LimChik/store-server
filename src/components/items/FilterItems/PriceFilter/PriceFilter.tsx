import React,{useState,useEffect,FC, memo} from 'react'
import { IItem } from '../../../../type/Item';
import cl from './PriceFilter.module.css';
interface IPriceFilterProps{
  item:IItem[];
  getChangeMaxValue:(value:string)=>void;
  getChangeMinValue:(value:string)=>void;

}
const PriceFilter:FC<IPriceFilterProps> = memo(({item,getChangeMaxValue,getChangeMinValue}) => {

  const [maxPlaceholderValue, setMaxPlaceHolderValue] = useState(0)//Значение максимального холдера в инпуте для цены кроссовок
  const [minPlaceholderValue, setMinPlaceHolderValue] = useState(0)//Значение минимального холдера в инпуте для цены кроссовок

  const [minInputValue, setMinInputValue] = useState('');//Минимальное значение введеного значения инпута для цены кроссовок
  const [maxInputValue, setMaxInputValue] = useState('');//

  useEffect(() => {
    
    const arrValue: number[] = [];
    item.map((elem) => {
      arrValue.push(elem.price)
    });
    (setMinPlaceHolderValue(Math.min.apply(null, arrValue)));
    (setMaxPlaceHolderValue(Math.max.apply(null, arrValue)));
  }, [item])
  function sortMinPlaceItems(e: React.ChangeEvent<HTMLInputElement>) {
  
    setMinInputValue(e.target.value);
    getChangeMinValue(e.target.value)
  }

  function sortMaxPlaceItems(e: React.ChangeEvent<HTMLInputElement>) {
    setMaxInputValue(e.target.value)
    getChangeMaxValue(e.target.value)
  }
  return (
    <div className={cl.filter__body__price}>
      <label> Цена</label>
      <input className={cl.filter__body__input} value={minInputValue} onChange={sortMinPlaceItems} type="text" placeholder={String(minPlaceholderValue)} />
      <input className={cl.filter__body__input} value={maxInputValue} onChange={sortMaxPlaceItems} type="text" placeholder={String(maxPlaceholderValue)} />

    </div>
  )
})

export default PriceFilter