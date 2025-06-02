<<<<<<< HEAD
import { FC } from 'react';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { Preloader } from '../ui/preloader';
import { ingredientsSlice } from '../../services/slices/ingredients';
import { useParams } from 'react-router-dom';
import { useSelector } from '../../services/store';

export const IngredientDetails: FC = () => {
  const ingredientId = useParams();
  const ingredientData = useSelector((state) =>
    ingredientsSlice.selectors.selectIngredientById(state, ingredientId)
=======
import { FC, useEffect } from 'react';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useSelector } from '@store';
import { getIngredientsSelector } from '@slices';
import { useParams } from 'react-router-dom';

export const IngredientDetails: FC = () => {
  const ingridientId = useParams().id;

  const ingredients = useSelector(getIngredientsSelector);
  const ingredientData = ingredients.find(
    (ingredient) => ingredient._id === ingridientId
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9
  );

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};
