import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItem } from '../type/Item';

type Todo = {
   countGood:number;
   goodItem:IItem[];
   modalBasketActive:boolean;
   buttonActive:boolean;
   sumPrice:number;
}



const initialState: Todo = {
   countGood: 0,
   goodItem:[],
   modalBasketActive:false,
   buttonActive:false,
   sumPrice:0
}

const singlePageSlice = createSlice({
   name: 'singlePage',
   initialState,
   reducers: {
      addBusket(state, action:PayloadAction<IItem>){
         state.countGood = state.countGood + 1;
        
         const existingItem = state.goodItem.find(item => item.id === action.payload.id);
         if (existingItem) {
            existingItem.count = existingItem.count + 1;
         } else {
            state.goodItem.push({ ...action.payload, count: 1 });
         }
        
     },
    
      selectModalActive(state, action: PayloadAction<boolean>){
         state.modalBasketActive=action.payload
      },
      stateButtonActive(state, action:PayloadAction<boolean>){
         state.buttonActive=action.payload
      },
      
      addPriceBasket(state,action:PayloadAction<IItem>){
         state.sumPrice = state.sumPrice + action.payload.price;
         
      },
      reducePriceBasket(state,action:PayloadAction<IItem>){
         state.sumPrice=state.sumPrice-action.payload.price
         
      },
      deleteGoodBasket(state,action:PayloadAction<IItem>){
         state.sumPrice=state.sumPrice-action.payload.price*action.payload.count
        state.goodItem=state.goodItem.filter(elem=>elem.id!==action.payload.id);
        state.countGood=state.countGood-1
        
         

      },
      addCountBasketItem(state,action:PayloadAction<IItem>){
         state.goodItem = state.goodItem.map((item: IItem) => {
            if (item.id === action.payload.id) {
               return {
                  ...item,
                  count: item.count + 1
               };
            }
            return item;
         });
      },
      reduceCountBasketItem(state, action: PayloadAction<IItem>) {
         state.goodItem = state.goodItem.map((item: IItem) => {
            if (item.id === action.payload.id) {
               return {
                  ...item,
                  count: item.count - 1
               };
            }
            return item;
         });
      },
      
      
   }
     
});

export const { 
   addBusket ,
   selectModalActive,stateButtonActive,
   addPriceBasket,
   reducePriceBasket,
   deleteGoodBasket,
   reduceCountBasketItem,
   addCountBasketItem
} = singlePageSlice.actions;

export default singlePageSlice.reducer;