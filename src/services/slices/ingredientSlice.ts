// ingredientsSlice.ts

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getIngredientsApi } from '@api';
import { TIngredient } from '@utils-types';

// Интерфейс состояния Ingredients Slice
type TIngredientsState = {
  ingredients: TIngredient[];
  loading: boolean;
  error: string | null;
};

// Начальное состояние
const initialState: TIngredientsState = {
  ingredients: [],
  loading: false,
  error: null
};

// Aсинхронный Thunk для загрузки ингредиентов
export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async () => await getIngredientsApi()
);

// Создаем Ingredients Slice
const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.loading = false;
        state.ingredients = action.payload;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Неизвестная ошибка';
      });
  }
});

// Экспортируем reducer
export default ingredientsSlice.reducer;
