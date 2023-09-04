import {
  GET_ITEMS_LIST_REQUEST,
  GET_ITEMS_LIST_FAILED,
  GET_ITEMS_LIST_SUCCESS,
} from '../services/actions/items';

import {
  TUserInfo
} from '../types/user';

export type TItem = {
  likes: TUserInfo[];
  _id: string;  
  name: string;
  link: string;
  owner: TUserInfo;
  createdAt: string;
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
  | TGetItemsFailedAction;

export type TItemsState = {
  items: Array<TItem>;
  itemsLoad: boolean;
  itemsFailed: boolean;
};
