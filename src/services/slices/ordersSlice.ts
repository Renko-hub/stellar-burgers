// ordersSlice.ts

import { getOrderByNumberApi, getOrdersApi, orderBurgerApi } from '@api';
import {
  createAsyncThunk,
  createSlice,
  SerializedError
} from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

// Интерфейс состояния Orders Slice
interface TOrdersState {
  isOrderLoading: boolean;
  isOrdersLoading: boolean;
  orderRequest: boolean;
  orderModalData: TOrder | null;
  error: null | SerializedError;
  data: TOrder[];
}

// Начальное состояние Orders Slice
const initialState: TOrdersState = {
  isOrderLoading: true,
  isOrdersLoading: true,
  orderRequest: false,
  orderModalData: null,
  error: null,
  data: []
};

// Асинхронный Thunk для создания заказа
export const createOrder = createAsyncThunk(
  'orders/create',
  async (data: string[]) => await orderBurgerApi(data)
);

// Thunk для получения заказа по ID
export const fetchOrder = createAsyncThunk<TOrder, number>(
  'orders/fetchOrder',
  async (orderId) => (await getOrderByNumberApi(orderId)).orders[0]
);

// Thunk для получения списка заказов
export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async () => await getOrdersApi()
);

// Создаем Orders Slice
const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    resetOrderModalData(state) {
      state.orderModalData = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.isOrderLoading = true;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.isOrderLoading = false;
        state.orderModalData = action.payload;
      })
      .addCase(fetchOrder.rejected, (state) => {
        state.isOrderLoading = false;
      })

      .addCase(fetchOrders.pending, (state) => {
        state.isOrdersLoading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.isOrdersLoading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.isOrdersLoading = false;
        state.error = action.error;
      })

      .addCase(createOrder.pending, (state) => {
        state.orderRequest = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.orderModalData = action.payload.order;
      })
      .addCase(createOrder.rejected, (state) => {
        state.orderRequest = false;
      });
  }
});

// Экспорт action для сброса modal данных
export const { resetOrderModalData } = ordersSlice.actions;

// Экспорт reducer
export default ordersSlice.reducer;
