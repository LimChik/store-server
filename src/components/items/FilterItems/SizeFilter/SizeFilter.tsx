import React ,{FC,memo,useState}from 'react'
import cl from './SizeFilter.module.css';
import ButtonSize from '../../../../UI/ButtonSIze/ButtonSize';

interface ISizeFilterProps{
  getArrSize:(value: React.SetStateAction<number[]>)=>void
}
const SizeFilter:FC<ISizeFilterProps> = memo(({getArrSize}) => {
  const arrSize: number[] = [39, 43, 44, 45, 46]//Размеры обуви;
  const [sizeInputValue, setSizeInputValue] = useState<number[]>([])//массив выбранных для фильтрации размеров обуви


  const handleButtonClick = (value: number, target: HTMLElement) => {


    target.classList.toggle(cl.isActive);
    getArrSize(prevState => [...prevState, value]);
    
  };


  const handleContainerClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains(cl.filter__body__input__size)) {

      const value = target.getAttribute('value');
      if (value) {
        handleButtonClick(Number(value), target);
        if (!target.classList.contains(cl.isActive)) {
          getArrSize(sizeInputValue.filter((values) => values != Number(value)))
          
        }


      }

    };


  }  
  return (
    <div className={cl.filter__body__size}>
      <label>Размер обуви </label>

      <div className={cl.filter__body__sizes} onClick={handleContainerClick}  >
        {arrSize.map((elem, index) =>
          <ButtonSize  text={elem} value={elem} key={index} className={cl.filter__body__input__size} />
        )}
      </div>
    </div>
  )
})

export default SizeFilter