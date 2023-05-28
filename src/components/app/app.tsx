import { useEffect, FC } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from '../../types/store';

import {
  Header,
  //Modal,
  //ModalOverlay,
  //ProtectedRouteElement,
} from '../index';
import {
  Main,
  //Login,
  //Register,
  //ForgotPassword,
  //ResetPassword,
  //Profile,
  //NotFound,
} from '../../pages';

import { getItemsList } from '../../services/actions/items';
import { getUserInfo } from '../../services/actions/user';

import styles from './app-styles.module.css';

const App: FC = () => {
  const location = useLocation();
  const background = location.state?.background;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsList());
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <Routes location={background || location}>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
