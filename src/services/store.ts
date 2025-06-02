<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
=======
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import feedReducer from './slices/feedSlice';
import ingredientsReducer from './slices/ingredientsSlice';
import constructorReducer from './slices/constructorSlice';
import orderReducer from './slices/orderSlice';

>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9
import {
  TypedUseSelectorHook,
  useDispatch as reduxDispatch,
  useSelector as reduxSelector
} from 'react-redux';

<<<<<<< HEAD
=======
export const rootReducer = combineReducers({
  user: userReducer,
  feed: feedReducer,
  order: orderReducer,
  ingredients: ingredientsReducer,
  constructorbg: constructorReducer
});

>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => reduxDispatch();
export const useSelector: TypedUseSelectorHook<RootState> = reduxSelector;

export default store;
