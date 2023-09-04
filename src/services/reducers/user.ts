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
} from '../actions/user';

import { TUserState, TUserActions } from '../../types/user';

const userInitialState: TUserState = {
  userInfo: null,
  isAuthChecked: false,
  registerRequest: false,
  registerFailed: false,
  getUserRequest: false,
  getUserFailed: false,
  patchUserRequest: false,
  patchUserFailed: false,
  isTokenRefreshed: false,
  loginRequest: false,
  loginFailed: false,
  logoutRequest: false,
  logoutFailed: false,
  forgotPasswordRequest: false,
  forgotPasswordSuccess: false,
  forgotPasswordFailed: false,
  resetPasswordRequest: false,
  resetPasswordSuccess: false,
  resetPasswordFailed: false,
  message: null,
};

export const userReducer = (state = userInitialState, action: TUserActions) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        getUserRequest: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        getUserRequest: false,
        getUserFailed: false,
        userInfo: action.payload,
      };
    case GET_USER_FAILED:
      return {
        ...state,
        getUserRequest: false,
        getUserFailed: true,
      };
    case PATCH_USER_REQUEST:
      return {
        ...state,
        patchUserRequest: true,
        patchUserSuccess: false,
      };
    case PATCH_USER_SUCCESS:
      return {
        ...state,
        patchUserRequest: false,
        patchUserFailed: false,
        userInfo: action.payload.userInfo,
        message: action.payload.message,
      };
    case PATCH_USER_FAILED:
      return {
        ...state,
        patchUserRequest: false,
        patchUserFailed: true,
        message: action.payload,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loginRequest: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginRequest: false,
        loginFailed: false,
        isAuthChecked: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loginRequest: false,
        loginFailed: true,
        message: action.payload,
      };
    default:
      return state;
  }
};
