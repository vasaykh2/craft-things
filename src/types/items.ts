import {
  GET_ITEMS_LIST_REQUEST,
  GET_ITEMS_LIST_FAILED,
  GET_ITEMS_LIST_SUCCESS,
} from '../services/actions/items';
import {
  LOGOUT_REQUEST,  
} from '../services/actions/user';

import {
  TUserInfo
} from '../types/user';

export type TItem = {  
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
  image: string;
  price: number;  
  ordered: number;
};

export type TGetItemsRequestAction = {
  readonly type: typeof GET_ITEMS_LIST_REQUEST;
};

export type TGetItemsSuccessAction = {
  readonly type: typeof GET_ITEMS_LIST_SUCCESS;
  readonly payload: Array<TItem>;
};

export type TGetItemsFailedAction = {
  readonly type: typeof   GET_ITEMS_LIST_FAILED
};

export type TItemsActions =
  | TGetItemsRequestAction
  | TGetItemsSuccessAction
  | TGetItemsFailedAction
  | TLogoutRequestAction;

export type TItemsState = {
  items: Array<TItem>;
  itemsLoad: boolean;
  itemsFailed: boolean;
};

type TLogoutRequestAction = {
  readonly type: typeof LOGOUT_REQUEST;
};