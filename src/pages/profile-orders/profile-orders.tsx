import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
<<<<<<< HEAD
import { useDispatch, useSelector } from '../../services/store';
import {
  fetchUserOrdersThunk,
  selectUserOrderHistory
} from '../../services/slices/user';
import { getFeeds } from '../../services/slices/feed';

export const ProfileOrders: FC = () => {
  /** TODO: взять переменную из стора */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserOrdersThunk());
    dispatch(getFeeds());
  }, []);
  const orders: TOrder[] = useSelector((state) =>
    selectUserOrderHistory(state.user)
  );
=======
import { useSelector, useDispatch } from '@store';
import { getOrdersSelector, getOrdersThunk } from '@slices';

export const ProfileOrders: FC = () => {
  const dispatch = useDispatch();
  const orders: TOrder[] = useSelector(getOrdersSelector);

  useEffect(() => {
    dispatch(getOrdersThunk());
  }, [dispatch]);
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9

  return <ProfileOrdersUI orders={orders} />;
};
