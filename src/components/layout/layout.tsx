import { FC, useCallback, } from 'react';
import { useSelector, useDispatch } from '../../types/store';

import {
  Item,
  //Modal,
  //ModalOverlay,
  //ProtectedRouteElement,
} from '../index';

import { TItem } from '../../types/items';

import styles from './layout-styles.module.css';

const Layout: FC = () => {
  //const { pathname } = useLocation();

  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.items);

  const handleRightClick = useCallback(
    (item: TItem) => {
      //dispatch(addItem(item));
    },
    []
  );

  return (
    <ul className={styles.layout}>
      {items.map(item => item && ( <Item
              item={item}
              key={item._id}
              onRightClick={(evt) => {
                evt.preventDefault();
                handleRightClick(item);
              }}
            />))}
    </ul>
  );
};

export default Layout;
