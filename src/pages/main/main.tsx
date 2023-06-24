import {  FC } from 'react';
//import { useNavigate, useLocation } from 'react-router-dom';
import {
  Layout,
  //Modal,
  //ModalOverlay,
  //ProtectedRouteElement,
} from '../../components/index';
import styles from './main-styles.module.css';

const Main: FC = () => {  
  //const location = useLocation();
  //const navigate = useNavigate();  
  return (
    <main className={styles.blocks}>
      <p>main</p>
      <Layout/>
    </main>
  );
};

export default Main;
