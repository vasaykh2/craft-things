import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  PATCH_USER_REQUEST,
  PATCH_USER_SUCCESS,
  PATCH_USER_FAILED,
} from '../services/actions/user';

export type TUserActions =
  | TGetUserRequestAction
  | TGetUserSuccessAction
  | TGetUserFailedAction
  | TPatchUserRequestAction
  | TPatchUserSuccessAction
  | TPatchUserFailedAction;

export type TForm = {
  email?: string;
  password?: string;
  name?: string;
  about?: string;
  token?: string;
};

export type TRegisterForm = Required<
  Omit<TForm, 'email' | 'password' | 'token'>
>;

export type TUser = {
  name: string;
  about: string;
  avatar: string;
  _id: string;
  cohort: string;
};

export type TUserState = {
  userInfo: TUser | null;
  getUserRequest: boolean;
  getUserFailed: boolean;
  patchUserRequest: boolean;
  patchUserFailed: boolean;
  message: string | null;
};

type TGetUserRequestAction = {
  readonly type: typeof GET_USER_REQUEST;
};

type TGetUserSuccessAction = {
  readonly type: typeof GET_USER_SUCCESS;
  readonly payload: TUser;
};

type TGetUserFailedAction = {
  readonly type: typeof GET_USER_FAILED;
};

type TPatchUserRequestAction = {
  readonly type: typeof PATCH_USER_REQUEST;
};

type TPatchUserSuccessAction = {
  readonly type: typeof PATCH_USER_SUCCESS;
  readonly payload: { userInfo: TUser; message: string };
};

type TPatchUserFailedAction = {
  readonly type: typeof PATCH_USER_FAILED;
  readonly payload: string;
};
