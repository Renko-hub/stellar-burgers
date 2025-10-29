// builderSlice.ts

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  TConstructorIngredient,
  TIngredient,
  TOrder,
  TUser
} from '@utils-types';

// Интерфейс состояния Burger Builder Slice
interface TBurgerBuilderState {
  // Булочка для бургера
  bun?: TIngredient | null;
  // Ингредиенты, выбранные пользователем
  ingredients: TConstructorIngredient[];
  // История предыдущих заказов
  history: TOrder[];
  // Общая калорийность выбранного набора ингредиентов
  totalCalories: number;
  // Статус текущего заказа
  orderStatus: 'pending' | 'processing' | 'completed' | '';
  // Признак аутентифицированности пользователя
  isAuthenticated: boolean;
  // Текущие данные пользователя
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
    // Устанавливаем булочку в конструктор
    setBun(state, action: PayloadAction<TIngredient | null>) {
      state.bun = action.payload;
    },
    // Добавляем новый ингредиент в конструктор
    addIngredient(state, action: PayloadAction<TIngredient>) {
      if (action.payload.type === 'bun') {
        state.bun = action.payload;
      } else {
        state.ingredients.push({
          ...action.payload,
          id: Math.random().toString(36).substr(2, 9)
        });
        state.totalCalories += action.payload.calories || 0;
      }
    },
    // Удаляем указанный ингредиент из конструктора
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
    // Меняем позицию ингредиента в списке
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
    // Очищаем весь конструктор и сбрасываем состояние
    resetConstructor(state) {
      state.bun = null;
      state.ingredients = [];
      state.history = [];
      state.totalCalories = 0;
      state.orderStatus = '';
    },
    // Установить статус аутентификации пользователя
    setAuthentication(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    // Установить текущие данные пользователя
    setCurrentUser(state, action: PayloadAction<TUser | null>) {
      state.currentUser = action.payload;
    },
    // Добавить заказ в историю заказов
    addToHistory(state, action: PayloadAction<TOrder>) {
      state.history.push(action.payload);
    },
    // Установить статус текущего заказа
    setOrderStatus(
      state,
      action: PayloadAction<'pending' | 'processing' | 'completed'>
    ) {
      state.orderStatus = action.payload;
    }
  }
});

// Экспортирование всех actions и reducer для дальнейшего использования
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
