//import { useLocation } from 'react-router-dom';
import { FC } from 'react';
import cart from '../../images/shopping-basket-add256_24909.png';

import styles from './cart-styles.module.css';

const Cart: FC = () => {
  //const { pathname } = useLocation();

  return (
    <section className={styles.cartContainer}>
      <img src={cart} className={styles.cartImg} alt="logo" />
      <p className={styles.description}></p>
    </section>
  );
};

export default Cart;
