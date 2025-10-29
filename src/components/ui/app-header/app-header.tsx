<<<<<<< HEAD
import { FC } from 'react';
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';

=======
import React, { FC } from 'react';
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';
>>>>>>> feature-new
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@zlden/react-developer-burger-ui-components';

<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

=======
>>>>>>> feature-new
export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => (
  <header className={styles.header}>
    <nav className={`${styles.menu} p-4`}>
      <div className={styles.menu_part_left}>
<<<<<<< HEAD
        <NavLink to='/' className={clsx(styles.navlink, 'mr-4', 'p-4')}>
          {({ isActive }) => (
            <div className={clsx(styles.link, isActive && styles.link_active)}>
              <BurgerIcon type={isActive ? 'primary' : 'secondary'} />
              <span className='text text_type_main-default ml-2'>
                Конструктор
              </span>
            </div>
          )}
        </NavLink>
        <NavLink to='/feed' className={clsx(styles.navlink, 'p-4')}>
          {({ isActive }) => (
            <div className={clsx(styles.link, isActive && styles.link_active)}>
              <ListIcon type={isActive ? 'primary' : 'secondary'} />
              <span className='text text_type_main-default ml-2'>
                Лента заказов
              </span>
            </div>
          )}
        </NavLink>
=======
        <>
          <BurgerIcon type={'primary'} />
          <p className='text text_type_main-default ml-2 mr-10'>Конструктор</p>
        </>
        <>
          <ListIcon type={'primary'} />
          <p className='text text_type_main-default ml-2'>Лента заказов</p>
        </>
>>>>>>> feature-new
      </div>
      <div className={styles.logo}>
        <Logo className='' />
      </div>
      <div className={styles.link_position_last}>
<<<<<<< HEAD
        <NavLink to='/profile' className={clsx(styles.navlink, 'p-4')}>
          {({ isActive }) => (
            <div className={clsx(styles.link, isActive && styles.link_active)}>
              <ProfileIcon type={isActive ? 'primary' : 'secondary'} />
              <span className='text text_type_main-default ml-2'>
                {userName || 'Личный кабинет'}
              </span>
            </div>
          )}
        </NavLink>
=======
        <ProfileIcon type={'primary'} />
        <p className='text text_type_main-default ml-2'>
          {userName || 'Личный кабинет'}
        </p>
>>>>>>> feature-new
      </div>
    </nav>
  </header>
);
