import { api } from '../../utils/api';
//import { setCookie, deleteCookie, getCookie } from '../../utils/cookie';
import { AppDispatch, AppThunk } from '../../types/store';
import {
  TRegisterForm,  
} from '../../types/user';

export const GET_USER_REQUEST: 'GET_USER_REQUEST' = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS: 'GET_USER_SUCCESS' = 'GET_USER_SUCCESS';
export const GET_USER_FAILED: 'GET_USER_FAILED' = 'GET_USER_FAILED';

export const PATCH_USER_REQUEST: 'PATCH_USER_REQUEST' = 'PATCH_USER_REQUEST';
export const PATCH_USER_SUCCESS: 'PATCH_USER_SUCCESS' = 'PATCH_USER_SUCCESS';
export const PATCH_USER_FAILED: 'PATCH_USER_FAILED' = 'PATCH_USER_FAILED';

export const getUserInfo: AppThunk = () => {
  return function (dispatch: AppDispatch | AppThunk) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    api
      .getUserInfo()
      .then((res) => {
        res &&
          dispatch({
            type: GET_USER_SUCCESS,
            payload: res,
          });
      })
      .catch((err) => {
        dispatch({
          type: GET_USER_FAILED,
        });
      })
  };
};

export const patchUserInfo: AppThunk = ({
  name,
  about,
}: TRegisterForm) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: PATCH_USER_REQUEST,
    });
    api
      .patchUserInfo(name, about)
      .then((res) => {
        res &&
          res.success &&
          dispatch({
            type: PATCH_USER_SUCCESS,
            payload: { userInfo: res.user, message: 'User info changed' },
          });
      })
      .catch((err) => {
        dispatch({
          type: PATCH_USER_FAILED,
          payload: err.message,
        });
      });
  };
};
