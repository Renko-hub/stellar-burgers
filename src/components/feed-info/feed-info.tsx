<<<<<<< HEAD
// feed-info.tsx

=======
>>>>>>> feature-new
import { FC } from 'react';

import { TOrder } from '@utils-types';
import { FeedInfoUI } from '../ui/feed-info';
<<<<<<< HEAD
import { useSelector } from '../../services/store';
=======
>>>>>>> feature-new

const getOrders = (orders: TOrder[], status: string): number[] =>
  orders
    .filter((item) => item.status === status)
    .map((item) => item.number)
    .slice(0, 20);

export const FeedInfo: FC = () => {
<<<<<<< HEAD
  const { data } = useSelector((state) => state.feeds);

  const readyOrders = getOrders(data.orders, 'done');

  const pendingOrders = getOrders(data.orders, 'pending');
=======
  /** TODO: взять переменные из стора */
  const orders: TOrder[] = [];
  const feed = {};

  const readyOrders = getOrders(orders, 'done');

  const pendingOrders = getOrders(orders, 'pending');
>>>>>>> feature-new

  return (
    <FeedInfoUI
      readyOrders={readyOrders}
      pendingOrders={pendingOrders}
<<<<<<< HEAD
      feed={{
        total: data.total,
        totalToday: data.totalToday
      }}
=======
      feed={feed}
>>>>>>> feature-new
    />
  );
};
