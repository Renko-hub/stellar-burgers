// builderSlice.ts

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import {
  TConstructorIngredient,
  TIngredient,
  TOrder,
  TUser
} from '@utils-types';

// Интерфейс состояния Burger Builder Slice
interface TBurgerBuilderState {
  bun?: TIngredient | null;
  ingredients: TConstructorIngredient[];
  history: TOrder[];
  totalCalories: number;
  orderStatus: 'pending' | 'processing' | 'completed' | '';
  isAuthenticated: boolean;
  currentUser: TUser | null;
}

// Начальное состояние Burger Builder Slice
const initialState: TBurgerBuilderState = {
  bun: null,
  ingredients: [],
  history: [],
  totalCalories: 0,
  orderStatus: '',
  isAuthenticated: false,
  currentUser: null
};

// Создаем Burger Builder Slice
const burgerBuilderSlice = createSlice({
  name: 'burgerBuilder',
  initialState,
  reducers: {
    setBun(state, action: PayloadAction<TIngredient | null>) {
      state.bun = action.payload;
    },
    addIngredient(state, action: PayloadAction<TIngredient>) {
      if (action.payload.type === 'bun') {
        state.bun = action.payload;
      } else {
        state.ingredients.push({
          ...action.payload,
          id: uuidv4() // Уникальный идентификатор
        });
        state.totalCalories += action.payload.calories || 0;
      }
    },
    removeIngredient(state, action: PayloadAction<string>) {
      const removedIngredient = state.ingredients.find(
        (i) => i.id === action.payload
      );
      if (removedIngredient && removedIngredient.calories) {
        state.totalCalories -= removedIngredient.calories;
      }
      state.ingredients = state.ingredients.filter(
        (i) => i.id !== action.payload
      );
    },
    moveIngredient(
      state,
      action: PayloadAction<{ index: number; upwards: boolean }>
    ) {
      const ingredientLink = state.ingredients[action.payload.index];
      if (action.payload.upwards) {
        state.ingredients.splice(action.payload.index, 1);
        state.ingredients.splice(action.payload.index - 1, 0, ingredientLink);
      } else {
        state.ingredients.splice(action.payload.index, 1);
        state.ingredients.splice(action.payload.index + 1, 0, ingredientLink);
      }
    },
    resetConstructor(state) {
      state.bun = null;
      state.ingredients = [];
      state.history = [];
      state.totalCalories = 0;
      state.orderStatus = '';
    },
    setAuthentication(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    setCurrentUser(state, action: PayloadAction<TUser | null>) {
      state.currentUser = action.payload;
    },
    addToHistory(state, action: PayloadAction<TOrder>) {
      state.history.push(action.payload);
    },
    setOrderStatus(
      state,
      action: PayloadAction<'pending' | 'processing' | 'completed'>
    ) {
      state.orderStatus = action.payload;
    }
  }
});

// Экспорт всех actions и reducer для дальнейшего использования
export const {
  setBun,
  addIngredient,
  removeIngredient,
  moveIngredient,
  resetConstructor,
  setAuthentication,
  setCurrentUser,
  addToHistory,
  setOrderStatus
} = burgerBuilderSlice.actions;

export default burgerBuilderSlice.reducer;
