import React,{FC, memo} from 'react'
import { IItem } from '../../../../type/Item';
import cl from './BrandFilter.module.css';

interface IBrandFilterProps {
    item:IItem[];
    brandSelected:string[];
    setBrandSelected: React.Dispatch<React.SetStateAction<string[]>>
  
}
const BrandFilter:FC<IBrandFilterProps> = memo(({item,brandSelected,setBrandSelected}) => {

  const arrBrand: string[] = Array.from(new Set(item.map((elem) => elem.brand)))
  const handleButtonClick = (value: string, target: HTMLElement) => {


    target.classList.toggle(cl.isActive);
    setBrandSelected(prevState => [...prevState, value]);

  };


  const handleContainerClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const nextSibling=target.nextSibling as HTMLElement;
    console.log(nextSibling.innerText)
    
    if (target.classList.contains(cl.filter__body__brands_checkbox)) {

      const value = nextSibling.innerText;
      if (value) {
        handleButtonClick((value), target);
        if (!target.classList.contains(cl.isActive)) {
          setBrandSelected(brandSelected.filter((values) => values != (value)))
        }
      }

    };
  }

  return (
    <div className={cl.filter__body__brand} onClick={handleContainerClick}>
      {arrBrand.map((elem, index) => (
        <div key={index} className={cl.filter__body__brands}>
          <div className={cl.filter__body__brands_checkbox}></div>
          <div className={cl.filter__body__brands_name}>{elem}</div>
          <div className={cl.filter__body__brands_results}>500</div>
        </div>
      ))}

    </div>
  )
})

export default BrandFilter