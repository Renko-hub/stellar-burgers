// feedsSlice.ts

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFeedsApi } from '@api';
import { TOrdersData } from '@utils-types';

// Интерфейс состояния Feeds Slice
type TFeedsState = {
  // Признак загрузки
  loading: boolean;
  // Сообщение об ошибке
  error: string | null;
  // Полученные данные о заказах
  data: TOrdersData;
};

// Начальное состояние Feeds Slice
const initialState: TFeedsState = {
  loading: true,
  error: null,
  data: { orders: [], total: NaN, totalToday: NaN }
};

// Асинхронный Thunk для загрузки фида заказов
export const fetchFeeds = createAsyncThunk<TOrdersData>(
  'feeds/fetch',
  async () => await getFeedsApi()
);

// Создаем Feeds Slice
const feedsSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFeeds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeeds.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchFeeds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки ленты.';
      });
  }
});

// Экспортируем reducer
export default feedsSlice.reducer;
