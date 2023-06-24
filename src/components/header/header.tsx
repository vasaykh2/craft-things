//import { useLocation } from 'react-router-dom';
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../../fonts/fonts.css';
import logo from '../../images/logo.svg';
import ClipLoader from 'react-spinners/ClipLoader';

import {
  DataUser,
  Cart,
  Track,
  User,
  //Modal,
  //ModalOverlay,
  //ProtectedRouteElement,
} from '../index';

import { useSelector } from '../../types/store';

import styles from './header-styles.module.css';

const Header: FC = () => {
  const { pathname } = useLocation();
  const { itemsLoad } = useSelector((state) => state.items);

  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt='logo' />
      <p className={styles.description}>
        Добро пожаловать на сайт работ Марии Ивановой!{' '}
        <ClipLoader color={styles.clipLoader} loading={!itemsLoad} />
      </p>
      <DataUser>
        <ul className={styles.nav}>
        <li className='mr-0 pr-2'>
            <NavLink
              to='/profile'
              state={{ from: { pathname: '/' } }}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.link_active}` : styles.link
              }
            >
              <User />
            </NavLink>
          </li>
          
          <Track />
          <Cart />
        </ul>
      </DataUser>
    </header>
  );
};

export default Header;
