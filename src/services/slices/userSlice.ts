// userSlice.ts

import {
  SerializedError,
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit';
import { storeTokens, clearTokens } from '../../utils/auth';
import {
  TLoginData,
  TRegisterData,
  getUserApi,
  loginUserApi,
  logoutApi,
  registerUserApi,
  updateUserApi
} from '@api';
import { TUser } from '@utils-types';

// Интерфейс состояния User Slice
interface TUserState {
  // Признак проверки аутентификации
  isAuthChecked: boolean;
  // Признак аутентифицированности пользователя
  isAuthenticated: boolean;
  // Ошибка регистрации
  registerError?: SerializedError;
  // Ошибка входа
  loginError?: SerializedError;
  // Ошибка общего характера
  error?: SerializedError;
  // Данные текущего пользователя
  data: TUser;
}

// Начальное состояние User Slice
const initialState: TUserState = {
  isAuthChecked: false,
  isAuthenticated: false,
  data: { name: '', email: '' }
};

// Async Thunk для регистрации пользователя
export const register = createAsyncThunk<TUser, TRegisterData>(
  'user/register',
  async (data, { rejectWithValue }) => {
    const response = await registerUserApi(data);
    if (!response.success) return rejectWithValue(response);
    storeTokens(response.refreshToken, response.accessToken); // Сохраняем токены
    return response.user;
  }
);

// Async Thunk для авторизации пользователя
export const login = createAsyncThunk<TUser, TLoginData>(
  'user/login',
  async (data, { rejectWithValue }) => {
    const response = await loginUserApi(data);
    if (!response.success) return rejectWithValue(response);
    storeTokens(response.refreshToken, response.accessToken); // Сохраняем токены
    return response.user;
  }
);

// Async Thunk для выхода пользователя
export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    const response = await logoutApi();
    if (!response.success) return rejectWithValue(response);
    clearTokens(); // Очищаем токены
  }
);

// Async Thunk для получения данных текущего пользователя
export const fetchUser = createAsyncThunk(
  'user/fetch',
  async (_, { rejectWithValue }) => {
    const response = await getUserApi();
    if (!response.success) return rejectWithValue(response);
    return response.user;
  }
);

// Async Thunk для обновления данных пользователя
export const updateUser = createAsyncThunk<TUser, Partial<TRegisterData>>(
  'user/update',
  async (data, { rejectWithValue }) => {
    const response = await updateUserApi(data);
    if (!response.success) return rejectWithValue(response);
    return response.user;
  }
);

// Создаем User Slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(register.pending, (state) => {
        state.registerError = undefined;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.registerError = undefined;
        state.isAuthenticated = true;
        state.data = { ...action.payload };
      })
      .addCase(register.rejected, (state, action) => {
        state.registerError = action.meta.rejectedWithValue
          ? (action.payload as SerializedError)
          : action.error;
      })
      .addCase(login.pending, (state) => {
        state.loginError = undefined;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginError = undefined;
        state.isAuthenticated = true;
        state.data = { ...action.payload };
      })
      .addCase(login.rejected, (state, action) => {
        state.loginError = action.meta.rejectedWithValue
          ? (action.payload as SerializedError)
          : action.error;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.data = { email: '', name: '' };
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isAuthChecked = true;
        state.data = { ...action.payload };
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isAuthChecked = true;
        state.error = action.error;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.data = { ...action.payload };
      });
  }
});

// Экспортируем reducer
export default userSlice.reducer;
