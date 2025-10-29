<<<<<<< HEAD
// store.ts

import {
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import ingredientsReducer from './slices/ingredientSlice';
import feedsReducer from './slices/feedsSlice';
import userReducer from './slices/userSlice';
import builderReducer from './slices/builderSlice';
import ordersReducer from './slices/ordersSlice';

export const rootReducer = combineReducers({
  builder: builderReducer,
  ingredients: ingredientsReducer,
  orders: ordersReducer,
  feeds: feedsReducer,
  user: userReducer
});

export const store = configureStore({
=======
import { configureStore } from '@reduxjs/toolkit';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

const rootReducer = () => {}; // Заменить на импорт настоящего редьюсера

const store = configureStore({
>>>>>>> feature-new
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

<<<<<<< HEAD
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch = dispatchHook.withTypes<AppDispatch>();
export const useSelector = selectorHook.withTypes<RootState>();
=======
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
>>>>>>> feature-new

export default store;
