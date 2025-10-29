<<<<<<< HEAD
// ingredients-category.tsx

=======
>>>>>>> feature-new
import { forwardRef, useMemo } from 'react';
import { TIngredientsCategoryProps } from './type';
import { TIngredient } from '@utils-types';
import { IngredientsCategoryUI } from '../ui/ingredients-category';
<<<<<<< HEAD
import { useSelector } from '../../services/store';
=======
>>>>>>> feature-new

export const IngredientsCategory = forwardRef<
  HTMLUListElement,
  TIngredientsCategoryProps
>(({ title, titleRef, ingredients }, ref) => {
<<<<<<< HEAD
  const burgerConstructor = useSelector((state) => state.builder);

  const ingredientsCounters = useMemo(() => {
    const { bun, ingredients } = burgerConstructor;

=======
  /** TODO: взять переменную из стора */
  const burgerConstructor = {
    bun: {
      _id: ''
    },
    ingredients: []
  };

  const ingredientsCounters = useMemo(() => {
    const { bun, ingredients } = burgerConstructor;
>>>>>>> feature-new
    const counters: { [key: string]: number } = {};
    ingredients.forEach((ingredient: TIngredient) => {
      if (!counters[ingredient._id]) counters[ingredient._id] = 0;
      counters[ingredient._id]++;
    });
    if (bun) counters[bun._id] = 2;
    return counters;
  }, [burgerConstructor]);

  return (
    <IngredientsCategoryUI
      title={title}
      titleRef={titleRef}
      ingredients={ingredients}
      ingredientsCounters={ingredientsCounters}
      ref={ref}
    />
  );
});
