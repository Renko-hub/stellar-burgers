// app-headerUI.tsx

import { FC } from 'react';
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';

import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@zlden/react-developer-burger-ui-components';

import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => (
  <header className={styles.header}>
    <nav className={`${styles.menu} p-4`}>
      <div className={styles.menu_part_left}>
        {/* Навигационные ссылки */}
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
      </div>

      {/* Логотип теперь тоже ведет на главную страницу */}
      <div className={styles.logo}>
        <NavLink to='/'>
          <Logo className='' />
        </NavLink>
      </div>

      <div className={styles.link_position_last}>
        {/* Профильная ссылка */}
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
      </div>
    </nav>
  </header>
);
