//import { useLocation } from 'react-router-dom';
import { FC } from 'react';
import user from '../../images/user.svg';

import styles from './user-styles.module.css';

const User: FC = () => {
  //const { pathname } = useLocation();

  return (
    <section className={styles.userContainer}>
      <img src={user} className={styles.userImg} alt="Пользователь" />
      <p className={styles.description}></p>
    </section>
  );
};

export default User;
