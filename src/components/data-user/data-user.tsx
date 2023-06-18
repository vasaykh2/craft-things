//import { useLocation } from 'react-router-dom';
import { FC, ReactNode } from 'react';

import styles from './data-user-styles.module.css';

type TDataUserProps = {  
  children: ReactNode;
};

const DataUser: FC<TDataUserProps> = ({children}) => {
  //const { pathname } = useLocation();

  return (
    <div className={styles.container}>     
      {children}
    </div>
  );
};

export default DataUser;
