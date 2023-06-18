//import { useLocation } from 'react-router-dom';
import { FC } from 'react';
import '../../fonts/fonts.css';
import logo from '../../images/logo.svg';

import {
  DataUser,
  //Modal,
  //ModalOverlay,
  //ProtectedRouteElement,
} from '../index';


import styles from './header-styles.module.css';

const Header: FC = () => {
  //const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <p className={styles.description}>
        Добро пожаловать на сайт работ Марии Ивановой!
      </p>
      <DataUser></DataUser>
    </header>
  );
};

export default Header;
