import React, { FC } from 'react';
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';
import { Link } from 'react-router-dom';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@zlden/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => (
  <header className={styles.header}>
    <nav className={`${styles.menu} p-4`}>
      <div className={styles.menu_part_left}>
<<<<<<< HEAD
        <NavLink
          to='/'
          className={({ isActive }) =>
            classNames(styles.link, { [styles.link_active]: isActive })
          }
        >
          <BurgerIcon type={'primary'} />
          <p className='text text_type_main-default ml-2 mr-10'>Конструктор</p>
        </NavLink>
        <NavLink
          to='/feed'
          className={({ isActive }) =>
            classNames(styles.link, { [styles.link_active]: isActive })
          }
        >
          <ListIcon type={'primary'} />
          <p className='text text_type_main-default ml-2'>Лента заказов</p>
        </NavLink>
      </div>
      <div className={styles.logo}>
        <NavLink
          to='/'
          className={({ isActive }) =>
            classNames(styles.link, { [styles.link_active]: isActive })
          }
        >
          <Logo className='' />
        </NavLink>
      </div>
      <div className={styles.link_position_last}>
        <NavLink
          to='/profile'
          className={({ isActive }) =>
            classNames(styles.link, { [styles.link_active]: isActive })
          }
        >
          <ProfileIcon type={'primary'} />
          <p className='text text_type_main-default ml-2'>
            {userName || 'Личный кабинет'}
          </p>
        </NavLink>
=======
        <Link
          to='/'
          style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
        >
          <BurgerIcon type={'primary'} />
          <p className='text text_type_main-default ml-2 mr-10'>Конструктор</p>
        </Link>
        <Link
          to='/feed'
          style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
        >
          <ListIcon type={'primary'} />
          <p className='text text_type_main-default ml-2'>Лента заказов</p>
        </Link>
      </div>
      <div className={styles.logo}>
        <Link
          to='/'
          style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
        >
          <Logo className='' />
        </Link>
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9
      </div>
      <Link to='/profile' style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className={styles.link_position_last}>
          <ProfileIcon type={'primary'} />
          <p className='text text_type_main-default ml-2'>
            {userName || 'Личный кабинет'}
          </p>
        </div>
      </Link>
    </nav>
  </header>
);
