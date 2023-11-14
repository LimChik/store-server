import {FC,useEffect} from 'react'
import { useAppDispatch } from '../../../hooks';
import { paginateGoodItem } from '../../../store/singlePageSlice';
import  cl from  './AppPagintaion.module.css'



interface AppPaginationProps{
   item:number;
   page:number[]
}
const AppPagination:FC<AppPaginationProps> = ({item,page}) => {
   
const dispatch=useAppDispatch();
   for(let i=1;i<=item;i++){
      page.push(i)
      
   }

 const jopa=(e:React.MouseEvent)=>{
   const target=e.target as HTMLElement;
   target.classList.remove(`${cl.active}`)
   if(target.closest(`.${cl.paginateItem}`)){
      const paginateItemArr=document.querySelectorAll(`.${cl.paginateItem}`);
      paginateItemArr.forEach(elem=>{
         elem.classList.remove(`${cl.active}`)
      })
      target.classList.add(`${cl.active}`)
      const num=Number(target.innerHTML);
      dispatch(paginateGoodItem(num))
    
   }
   
  
 }

  return (
     <div style={{ display: 'flex', gap: '10px', textAlign: 'center',justifyContent:'center',margin:'20px 0 0 0' }}  onClick={jopa}>
         
        {page.map((elem)=><div key={elem} className={cl.paginateItem} >{elem}</div>)}
        
   </div>
  )
}

export default AppPagination