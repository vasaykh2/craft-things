//import { useLocation } from 'react-router-dom';
import { FC } from 'react';
import '../../fonts/fonts.css';
import logo from '../../images/logo.svg';
import ClipLoader from 'react-spinners/ClipLoader';

import {
  DataUser,
  Cart,
  //Modal,
  //ModalOverlay,
  //ProtectedRouteElement,
} from '../index';

import { useSelector, } from '../../types/store';

import styles from './header-styles.module.css';

const Header: FC = () => {
  const { itemsLoad } = useSelector((state) => state.items);

  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <p className={styles.description}>
        Добро пожаловать на сайт работ Марии Ивановой! <ClipLoader color={styles.clipLoader} loading={!itemsLoad} />
      </p>
      <DataUser>        
        <Cart/>
      </DataUser>
    </header>
  );
};

export default Header;
