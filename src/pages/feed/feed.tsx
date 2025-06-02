import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
<<<<<<< HEAD
import { useSelector } from '../../services/store';
import { getFeeds, selectFeedOrders } from '../../services/slices/feed';
import { useDispatch } from '../../services/store';

export const Feed: FC = () => {
  /** TODO: взять переменную из стора */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeeds());
  }, [dispatch]);

  const orders: TOrder[] = useSelector(selectFeedOrders);
=======
import { useDispatch, useSelector } from '@store';
import { getFeedThunk, getOrdersSelector } from '@slices';

export const Feed: FC = () => {
  const dispatch = useDispatch();
  const orders: TOrder[] = useSelector(getOrdersSelector);

  const handleGetFeeds = () => {
    dispatch(getFeedThunk());
  };

  useEffect(() => {
    handleGetFeeds();
  }, [dispatch]);
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9

  if (!orders.length) {
    return <Preloader />;
  }

<<<<<<< HEAD
  return (
    <FeedUI
      orders={orders}
      handleGetFeeds={() => {
        dispatch(getFeeds());
      }}
    />
  );
=======
  return <FeedUI orders={orders} handleGetFeeds={handleGetFeeds} />;
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9
};
