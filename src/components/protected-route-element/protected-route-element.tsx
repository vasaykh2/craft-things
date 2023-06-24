//import { useAuth } from '../services/auth';
import { Navigate } from 'react-router-dom';
import { useSelector } from '../../types/store';
//import { Oval } from 'react-loader-spinner';
import { useDispatch } from '../../types/store';
import { FC, useEffect } from 'react';

import ClipLoader from 'react-spinners/ClipLoader';
import { getUserInfo } from '../../services/actions/user';


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
  
  const userInfo = user.userInfo;
  console.log(userInfo);


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

  if (onlyForAuth && !userInfo) {
    return <Navigate to='/login' replace />;
  }

  /*if (!onlyForAuth && userInfo) {
    return <Navigate to='/' replace />;
  }*/


  return children;
};

export default ProtectedRouteElement;
