import { FC, memo } from 'react';
import { useLocation } from 'react-router-dom';

import { BurgerIngredientUI } from '@ui';
import { TBurgerIngredientProps } from './type';
<<<<<<< HEAD
import { useDispatch } from '../../services/store';
import { addIngredient } from '../../services/slices/burgerConstructor';
=======
import { useDispatch } from '@store';
import { addIngredient } from '@slices';
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9

export const BurgerIngredient: FC<TBurgerIngredientProps> = memo(
  ({ ingredient, count }) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const handleAdd = () => {
<<<<<<< HEAD
      dispatch(addIngredient({ ...ingredient, id: ingredient._id }));
=======
      dispatch(addIngredient(ingredient));
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9
    };

    return (
      <BurgerIngredientUI
        ingredient={ingredient}
        count={count}
        locationState={{ background: location }}
        handleAdd={handleAdd}
      />
    );
  }
);
