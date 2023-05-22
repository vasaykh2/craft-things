import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import styles from './app-styles.module.css';

function App() {
  const location = useLocation();
  const background = location.state?.background;
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
