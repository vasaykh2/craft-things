import { useEffect, FC } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { useSelector, useDispatch } from '../../types/store';

import {
  Header,
  ProfileForm,
  //Modal,
  //ModalOverlay,
  ProtectedRouteElement,
} from '../index';
import {
  Main,
  Login,
  //Register,
  //ForgotPassword,
  //ResetPassword,
  Profile,
  //NotFound,
} from '../../pages';

import { getItemsList } from '../../services/actions/items';
import { getUserInfo } from '../../services/actions/user';

import styles from './app-styles.module.css';

const App: FC = () => {
  const location = useLocation();
  const background = location.state?.background;
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getItemsList());
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <Routes location={background || location}>
        <Route
          path='/'
          element={
            <ProtectedRouteElement onlyForAuth={true}>
              <>
                items.itemsLoad ? (
                <Oval
                  ariaLabel='loading'
                  height={70}
                  width={70}
                  strokeWidth={5}
                  strokeWidthSecondary={2}
                  color='blue'
                  secondaryColor='white'
                />
                ) : items.items ? (
                <Main />) : null
              </>
            </ProtectedRouteElement>
          }
        />

        <Route
          path='/login'
          element={
            <ProtectedRouteElement onlyForAuth={false}>
              <Login />
            </ProtectedRouteElement>
          }
        />

        <Route
          path='/profile'
          element={
            <ProtectedRouteElement onlyForAuth={true}>
              <Profile />
            </ProtectedRouteElement>
          }
        >
          <Route
            path=''
            element={
              <ProtectedRouteElement onlyForAuth={true}>
                <ProfileForm />
              </ProtectedRouteElement>
            }
          />
          {/*<Route
                path='orders'
                element={
                  <ProtectedRouteElement onlyForAuth={true}>
                    <ProfileOrders />
                  </ProtectedRouteElement>
                }
              />*/}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
