//import { useAuth } from '../services/auth';
import { Navigate } from 'react-router-dom';
import { useSelector } from '../../types/store';
//import { Oval } from 'react-loader-spinner';
import { useDispatch } from '../../types/store';
import { FC, useEffect } from 'react';

import ClipLoader from 'react-spinners/ClipLoader';
import { getUserInfo } from '../../services/actions/user';
//import { getItemsList } from '../../services/actions/items';

import styles from './protected-route-element.module.css';

type TProtectedRouteElementProps = {
  onlyForAuth: boolean;
  children: JSX.Element;
};

const ProtectedRouteElement: FC<TProtectedRouteElementProps> = ({
  onlyForAuth,
  children,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);


  const user = useSelector((state) => state.user);
  const items = useSelector((state) => state.items);

  const userInfo = user.userInfo;

  const isAuth = !!userInfo || user.isAuthChecked || items.itemsLoad || items.items.length !== 0;
  //console.log(isAuth);

  if (
    (children.type.name === 'Profile' ||
      children.type.name === 'ProfileOrders') &&
    !userInfo
  ) {
    return !user.getUserFailed || user.getUserRequest ? (
      <div className={styles.loader}>
        <ClipLoader color={styles.clipLoader} loading={true} size={100} />
        <span>Собираем сведения</span>
      </div>
    ) : (
      <Navigate to='/login' replace />
    );
  }

  if (onlyForAuth && !isAuth) {
    return <Navigate to='/login' replace />;
  }

  if (!onlyForAuth && isAuth) {
    //dispatch(getItemsList());
    //dispatch(getUserInfo());
    return <Navigate to='/' replace />;
  }

  return children;
};

export default ProtectedRouteElement;
