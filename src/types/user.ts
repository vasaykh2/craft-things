import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  PATCH_USER_REQUEST,
  PATCH_USER_SUCCESS,
  PATCH_USER_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from '../services/actions/user';

export type TUserActions =
  | TGetUserRequestAction
  | TGetUserSuccessAction
  | TGetUserFailedAction
  | TLoginRequestAction
  | TLoginSuccessAction
  | TLoginFailedAction
  | TPatchUserRequestAction
  | TPatchUserSuccessAction
  | TPatchUserFailedAction;

export type TForm = {
  _id?: string;
  email?: string;
  password?: string;
  username?: string;
  about?: string;
  avatar?: string;
  token?: string;
};

export type TRegisterForm = Required<
  Omit<TForm, 'token'>
>;

export type TUserInfo = Required<Omit<TForm, 'token' | 'password'>>;

export type TLoginForm = Required<Omit<TForm, 'token' | 'name' | '_id' | 'about' | 'avatar'>>;

export type TUserState = {
  userInfo: TUserInfo | null;
  isAuthChecked: boolean;
  registerRequest: boolean;
  registerFailed: boolean;
  getUserRequest: boolean;
  getUserFailed: boolean;
  patchUserRequest: boolean;
  patchUserFailed: boolean;
  isTokenRefreshed: boolean;
  loginRequest: boolean;
  loginFailed: boolean;
  logoutRequest: boolean;
  logoutFailed: boolean;
  forgotPasswordRequest: boolean;
  forgotPasswordSuccess: boolean;
  forgotPasswordFailed: boolean;
  resetPasswordRequest: boolean;
  resetPasswordSuccess: boolean;
  resetPasswordFailed: boolean;
  message: string | null;
};

type TGetUserRequestAction = {
  readonly type: typeof GET_USER_REQUEST;
};

type TGetUserSuccessAction = {
  readonly type: typeof GET_USER_SUCCESS;
  readonly payload: TUserInfo;
};

type TGetUserFailedAction = {
  readonly type: typeof GET_USER_FAILED;
};

type TPatchUserRequestAction = {
  readonly type: typeof PATCH_USER_REQUEST;
};

type TPatchUserSuccessAction = {
  readonly type: typeof PATCH_USER_SUCCESS;
  readonly payload: { userInfo: TUserInfo; message: string };
};

type TPatchUserFailedAction = {
  readonly type: typeof PATCH_USER_FAILED;
  readonly payload: string;
};

type TLoginRequestAction = {
  readonly type: typeof LOGIN_REQUEST;
};

type TLoginSuccessAction = {
  readonly type: typeof LOGIN_SUCCESS;
  //readonly payload: TUserInfo;
};

type TLoginFailedAction = {
  readonly type: typeof LOGIN_FAILED;
  readonly payload: string;
};