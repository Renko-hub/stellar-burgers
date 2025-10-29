<<<<<<< HEAD
// constructor-page.tsx

import { useSelector } from '../../services/store';

import styles from './constructor-page.module.css';
import { FC } from 'react';
=======
import { useSelector } from '../../services/store';

import styles from './constructor-page.module.css';
>>>>>>> feature-new

import { BurgerIngredients } from '../../components';
import { BurgerConstructor } from '../../components';
import { Preloader } from '../../components/ui';
<<<<<<< HEAD

export const ConstructorPage: FC = () => {
  const isIngredientsLoading = useSelector(
    (state) => state.ingredients.loading
  ); // Используем новое состояние загрузки
=======
import { FC } from 'react';

export const ConstructorPage: FC = () => {
  /** TODO: взять переменную из стора */
  const isIngredientsLoading = false;
>>>>>>> feature-new

  return (
    <>
      {isIngredientsLoading ? (
        <Preloader />
      ) : (
        <main className={styles.containerMain}>
          <h1
            className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}
          >
            Соберите бургер
          </h1>
          <div className={`${styles.main} pl-5 pr-5`}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </main>
      )}
    </>
  );
};
