// BurgerConstructor.tsx

import { FC, useMemo } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';

import { useDispatch, useSelector } from '../../services/store';
import { useNavigate } from 'react-router-dom';
import {
  createOrder,
  resetOrderModalData
} from '../../services/slices/ordersSlice';
import { resetConstructor } from '../../services/slices/builderSlice';

export const BurgerConstructor: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const constructorItems = useSelector((state) => state.builder); // получаем конструктор
  const { isAuthenticated } = useSelector((state) => state.user); // проверяем аутентификацию
  const { orderRequest, orderModalData } = useSelector((state) => state.orders); // получаем статус заказа

  /**
   * Функция для клика на кнопке "Отправить заказ":
   */
  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) return; // проверка наличия булочки и отсутствия дублирования запросов

    if (!isAuthenticated) {
      return navigate('/login'); // перенаправляем на форму входа
    }

    // формируем массив с ID ингредиентов
    const data = [
      constructorItems.bun._id,
      ...constructorItems.ingredients.map((item) => item._id),
      constructorItems.bun._id
    ];

    // отправляем заказ
    dispatch(createOrder(data))
      .then(() => {
        // успешная отправка заказа, очищаем конструктор
        dispatch(resetConstructor());
      })
      .catch((err) => {
        console.error('Ошибка при оформлении заказа:', err);
      });
  };

  /**
   * Функция для закрытия модального окна заказа:
   */
  const closeOrderModal = () => {
    dispatch(resetOrderModalData()); // закрываем модальное окно
  };

  /**
   * Расчёт стоимости заказа (не трогаем!):
   */
  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

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
