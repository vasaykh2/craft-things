//import { useLocation } from 'react-router-dom';
import { FC } from 'react';
import track from '../../images/track.png';

import styles from './track-styles.module.css';

const Track: FC = () => {
  //const { pathname } = useLocation();

  return (
    <section className={styles.trackContainer}>
      <img src={track} className={styles.trackImg} alt="Заказы" />
      <p className={styles.description}></p>
    </section>
  );
};

export default Track;
