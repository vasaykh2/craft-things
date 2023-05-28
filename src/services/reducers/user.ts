import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  PATCH_USER_REQUEST,
  PATCH_USER_SUCCESS,
  PATCH_USER_FAILED,
} from '../actions/user';

import { TUserState, TUserActions } from '../../types/user';

const userInitialState: TUserState = {
  userInfo: null,
  getUserRequest: false,
  getUserFailed: false,
  patchUserRequest: false,
  patchUserFailed: false,
  errorMessage: null,
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
        errorMessage: action.payload.message,
      };
    case PATCH_USER_FAILED:
      return {
        ...state,
        patchUserRequest: false,
        patchUserFailed: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
