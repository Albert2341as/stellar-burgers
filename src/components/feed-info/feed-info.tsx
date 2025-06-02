import { FC } from 'react';

import { TOrder } from '@utils-types';
<<<<<<< HEAD
import { FeedInfoUI } from '../ui/feed-info';
import { useSelector } from '../../services/store';
import {
  selectFeedOrders,
  selectFeedTotalToday,
  selectFeedTotalOrders
} from '../../services/slices/feed';
=======
import { FeedInfoUI } from '@ui';
import { useSelector } from '@store';
import { getFeedStateSelector } from '@slices';
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9

const getOrders = (orders: TOrder[], status: string): number[] =>
  orders
    .filter((item) => item.status === status)
    .map((item) => item.number)
    .slice(0, 20);

export const FeedInfo: FC = () => {
<<<<<<< HEAD
  /** TODO: взять переменные из стора */
  const orders: TOrder[] = useSelector(selectFeedOrders);
=======
  const ordersState = useSelector(getFeedStateSelector);
  const orders: TOrder[] = ordersState.orders;
  const feed = { total: ordersState.total, totalToday: ordersState.totalToday };
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9

  const total = useSelector(selectFeedTotalOrders);
  const totalToday = useSelector(selectFeedTotalToday);
  const readyOrders = getOrders(orders, 'done');

  const pendingOrders = getOrders(orders, 'pending');

  return (
    <FeedInfoUI
      readyOrders={readyOrders}
      pendingOrders={pendingOrders}
      feed={{ total, totalToday }}
    />
  );
};
