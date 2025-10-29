<<<<<<< HEAD
// order-info.tsx

import { FC, useEffect, useMemo } from 'react';

import { TIngredient } from '@utils-types';
import { useDispatch, useSelector } from '../../services/store';
import { OrderInfoUI, Preloader } from '@ui';
import { useParams } from 'react-router-dom';

import { fetchOrder } from '../../services/slices/ordersSlice';

export const OrderInfo: FC = () => {
  const dispatch = useDispatch();

  const { number } = useParams<{ number: string }>();

  const { ingredients } = useSelector((state) => state.ingredients); // Получаем только массив ингредиентов
  const { isOrderLoading, orderModalData: orderData } = useSelector(
    (state) => state.orders
  );

  useEffect(() => {
    dispatch(fetchOrder(Number(number))); // Запрашиваем заказ при загрузке компонента
  }, [dispatch, number]); // Добавили номер заказа в зависимости эффекта
=======
import { FC, useMemo } from 'react';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient } from '@utils-types';

export const OrderInfo: FC = () => {
  /** TODO: взять переменные orderData и ingredients из стора */
  const orderData = {
    createdAt: '',
    ingredients: [],
    _id: '',
    status: '',
    name: '',
    updatedAt: 'string',
    number: 0
  };

  const ingredients: TIngredient[] = [];
>>>>>>> feature-new

  /* Готовим данные для отображения */
  const orderInfo = useMemo(() => {
    if (!orderData || !ingredients.length) return null;

    const date = new Date(orderData.createdAt);

    type TIngredientsWithCount = {
      [key: string]: TIngredient & { count: number };
    };

    const ingredientsInfo = orderData.ingredients.reduce(
<<<<<<< HEAD
      (acc: TIngredientsWithCount, itemId) => {
        const ingredient = ingredients.find(
          (ing: TIngredient) => ing._id === itemId
        );
        if (ingredient) {
          if (!acc[itemId]) {
            acc[itemId] = { ...ingredient, count: 1 };
          } else {
            acc[itemId].count++;
          }
        }
        return acc;
      },
      {} as TIngredientsWithCount
=======
      (acc: TIngredientsWithCount, item) => {
        if (!acc[item]) {
          const ingredient = ingredients.find((ing) => ing._id === item);
          if (ingredient) {
            acc[item] = {
              ...ingredient,
              count: 1
            };
          }
        } else {
          acc[item].count++;
        }

        return acc;
      },
      {}
>>>>>>> feature-new
    );

    const total = Object.values(ingredientsInfo).reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );

    return {
      ...orderData,
      ingredientsInfo,
      date,
      total
    };
  }, [orderData, ingredients]);

<<<<<<< HEAD
  if (isOrderLoading || !ingredients.length) {
    return <Preloader />;
  }

  if (!orderInfo) {
    return null;
=======
  if (!orderInfo) {
    return <Preloader />;
>>>>>>> feature-new
  }

  return <OrderInfoUI orderInfo={orderInfo} />;
};
