<<<<<<< HEAD
// ingredient-details.tsx

import { useSelector } from '../../services/store';
import { IngredientDetailsUI, Preloader } from '@ui';
import { TIngredient } from '@utils-types';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const IngredientDetails: FC = () => {
  const { id } = useParams<{ id: string }>();

  const ingredientsArray = useSelector(
    (state) => state.ingredients.ingredients
  );

  let ingredientData;
  if (ingredientsArray && ingredientsArray.length > 0) {
    ingredientData = ingredientsArray.find(
      (ingredient: TIngredient) => ingredient._id === id
    );
  }

  if (!ingredientData) {
    console.warn(`Ingredient with ID ${id} not found.`);
=======
import { FC } from 'react';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';

export const IngredientDetails: FC = () => {
  /** TODO: взять переменную из стора */
  const ingredientData = null;

  if (!ingredientData) {
>>>>>>> feature-new
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};
