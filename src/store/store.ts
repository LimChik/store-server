import { configureStore } from '@reduxjs/toolkit';
import singlePageSlice from './singlePageSlice';
import todoReducer from './todoSlice';

const store = configureStore({
   reducer: {
      todos: todoReducer,
      singlePage:singlePageSlice,
   },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
