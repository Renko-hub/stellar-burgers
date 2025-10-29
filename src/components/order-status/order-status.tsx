// order-status.tsx

import React, { FC } from 'react';
import { OrderStatusProps } from './type';
import { OrderStatusUI } from '@ui';

const statusText: { [key: string]: string } = {
  pending: 'Готовится',
  done: 'Выполнен',
  created: 'Создан'
};

export const OrderStatus: FC<OrderStatusProps> = ({ status }) => {
  let textStyle = '';
  switch (status) {
    case 'pending':
      textStyle = '#E52B1A'; // Красный оттенок для ожидающего заказа
      break;
    case 'done':
      textStyle = '#00CCCC'; // Голубой оттенок для выполненного заказа
      break;
    default:
      textStyle = '#F2F2F3'; // Серый оттенок для нового заказа
  }

  return <OrderStatusUI textStyle={textStyle} text={statusText[status]} />;
};
