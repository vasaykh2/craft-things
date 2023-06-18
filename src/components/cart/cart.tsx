//import { useLocation } from 'react-router-dom';
import { FC } from 'react';
import logo from '../../images/logo.svg';
import '../../fonts/fonts.css';

import styles from './header-styles.module.css';

const Header: FC = () => {
  //const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <p className={styles.description}>
        Добро пожаловать на сайт работ Марии Ивановой!
      </p>
    </header>
  );
};

export default Header;
