import { TItem } from './items';
import { TUserInfo } from './user';

export type TResponse<T> = {
  success: boolean;
} & T;

export type TMessage = {
  message: string;
};

export type TItemsResponse = {
  data: Array<TItem>;
};

export type TUserResponse = {
  user: TUserInfo;
};

