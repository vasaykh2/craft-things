import { FC } from 'react';
import { useSelector, } from '../../types/store';

import styles from './item-styles.module.css';
//import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';
import { TItem } from '../../types/items';

type TItemProps = {
  item: TItem;
  onRightClick: (evt: React.MouseEvent<HTMLLIElement>) => void;
};

const Item: FC<TItemProps> = ({ item, onRightClick }) => {
  const location = useLocation();

  const { userInfo } = useSelector((state) => state.user);
  
  const likeCount = item.likes.length;
  const isMyLike = userInfo && item.likes.find(el => el._id === userInfo._id) ? true : false;


/* const [, dragRef] = useDrag({
    type: 'items',
    item: { ...item },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });*/

  return (
    <li /*ref={dragRef}*/ key={item._id} onContextMenu={onRightClick}>
      <Link
        className={styles.card}
        to={{
          pathname: `/items/${item._id}`,
        }}
        state={{ background: location, idItemDetails: item._id }}
      >
        <img src={item.link} alt={item.name} className={styles.image} />
        <div className={styles.description}>
          <h2 className={styles.title}>{item.name}</h2>
          <div className={styles.likes}>
            <button type="button" className={isMyLike ? styles.buttonMyLikes : styles.buttonLikes}></button>
            <p className={styles.likeCount}>{likeCount}</p>
          </div>
        </div>
        <button className={styles.deleteButton}></button>
      </Link>
    </li>
  );
};

export default Item;