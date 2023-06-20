//import { useAuth } from '../services/auth';
import { Navigate } from 'react-router-dom';
import { useSelector } from '../../types/store';
//import { Oval } from 'react-loader-spinner';
import { FC } from 'react';

//import styles from './protected-route-element.module.css';

type TProtectedRouteElementProps = {
  onlyForAuth: boolean;
  children: JSX.Element;
};

const ProtectedRouteElement: FC<TProtectedRouteElementProps> = ({
  onlyForAuth,
  children,
}) => {
  const user = useSelector((state) => state.user);
  
  const userInfo = user.userInfo;

  if (onlyForAuth && !userInfo) {
    return <Navigate to='/login' replace />;
  }

  return children;
};

export default ProtectedRouteElement;
