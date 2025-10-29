<<<<<<< HEAD
// BurgerConstructor.tsx

=======
>>>>>>> feature-new
import { FC, useMemo } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';

<<<<<<< HEAD
import { useDispatch, useSelector } from '../../services/store';
import { useNavigate } from 'react-router-dom';
import {
  createOrder,
  resetOrderModalData
} from '../../services/slices/ordersSlice';

export const BurgerConstructor: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const constructorItems = useSelector((state) => state.builder); // Доступ к конструктору

  const { isAuthenticated } = useSelector((state) => state.user); // Проверяем аутентификацию

  const { orderRequest, orderModalData } = useSelector((state) => state.orders); // Данные о заказе

  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) return; // Если булочка отсутствует или заказ уже отправлен

    if (!isAuthenticated) {
      return navigate('/login'); // Перенаправляем на страницу входа
    }

    const data = [
      constructorItems.bun._id,
      ...constructorItems.ingredients.map((ingredient) => ingredient._id),
      constructorItems.bun._id
    ]; // Формируем список ID ингредиентов

    dispatch(createOrder(data)); // Отправляем заказ
  };

  const closeOrderModal = () => {
    dispatch(resetOrderModalData()); // Закрываем окно заказа
  };
=======
export const BurgerConstructor: FC = () => {
  /** TODO: взять переменные constructorItems, orderRequest и orderModalData из стора */
  const constructorItems = {
    bun: {
      price: 0
    },
    ingredients: []
  };

  const orderRequest = false;

  const orderModalData = null;

  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) return;
  };
  const closeOrderModal = () => {};
>>>>>>> feature-new

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

<<<<<<< HEAD
=======
  return null;

>>>>>>> feature-new
  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
