import { useEffect, FC } from 'react';
//import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from '../../types/store';
import {
  Layout,
  //Modal,
  //ModalOverlay,
  //ProtectedRouteElement,
} from '../../components/index';
import { getItemsList } from '../../services/actions/items';
import { getUserInfo } from '../../services/actions/user';
import styles from './main-styles.module.css';

const Main: FC = () => {  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemsList());
    dispatch(getUserInfo());
  }, [dispatch]);
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
