import { FC, useEffect, useMemo } from 'react';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient } from '@utils-types';
<<<<<<< HEAD
import { getingredients } from '../../services/slices/ingredients';
import { useDispatch, useSelector } from '../../services/store';
import { useParams } from 'react-router-dom';
import { getOrderNumber, orderSelector } from '../../services/slices/orders';

interface OrderInfoProps {
  orderNumber: string;
}

export const OrderInfo: FC<OrderInfoProps> = ({ orderNumber }) => {
  /** TODO: взять переменные orderData и ingredients из стора */
  const number = Number(orderNumber);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderNumber(number));
  }, [dispatch]);
  const orderData = useSelector(orderSelector);

  const ingredients: TIngredient[] = useSelector(getingredients);
=======
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '@store';
import {
  getOrderThunk,
  getOrderSelector,
  getIngredientsSelector
} from '@slices';

export const OrderInfo: FC = () => {
  const dispatch = useDispatch();
  const orderNubmer = Number(useParams().number);

  useEffect(() => {
    dispatch(getOrderThunk(orderNubmer));
  }, [dispatch]);

  const orderData = useSelector(getOrderSelector).order;

  const ingredients: TIngredient[] = useSelector(getIngredientsSelector);
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9

  const orderInfo = useMemo(() => {
    if (!orderData || !ingredients.length) return null;

    const date = new Date(orderData.createdAt);

    type TIngredientsWithCount = {
      [key: string]: TIngredient & { count: number };
    };

    const ingredientsInfo = orderData.ingredients.reduce(
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

  if (!orderInfo) {
    return <Preloader />;
  }

  return <OrderInfoUI orderInfo={orderInfo} />;
};
