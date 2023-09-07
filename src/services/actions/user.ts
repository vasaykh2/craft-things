import { api } from '../../utils/api';
import { setCookie, deleteCookie, getCookie } from '../../utils/cookie';
import { AppDispatch, AppThunk } from '../../types/store';
import { TRegisterForm, TLoginForm } from '../../types/user';

export const GET_USER_REQUEST: 'GET_USER_REQUEST' = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS: 'GET_USER_SUCCESS' = 'GET_USER_SUCCESS';
export const GET_USER_FAILED: 'GET_USER_FAILED' = 'GET_USER_FAILED';
export const CHECK_AUTH: 'CHECK_AUTH' = 'CHECK_AUTH';

export const PATCH_USER_REQUEST: 'PATCH_USER_REQUEST' = 'PATCH_USER_REQUEST';
export const PATCH_USER_SUCCESS: 'PATCH_USER_SUCCESS' = 'PATCH_USER_SUCCESS';
export const PATCH_USER_FAILED: 'PATCH_USER_FAILED' = 'PATCH_USER_FAILED';

export const LOGIN_REQUEST: 'LOGIN_REQUEST' = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_FAILED: 'LOGIN_FAILED' = 'LOGIN_FAILED';

export const LOGOUT_REQUEST: 'LOGOUT_REQUEST' = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS: 'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED: 'LOGOUT_FAILED' = 'LOGOUT_FAILED';

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
      .finally(() =>
        dispatch({
          type: CHECK_AUTH,
        })
      );
  };
};

export const logIn: AppThunk = ({ username, password }: TLoginForm) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    let status = '?';
    api
      .logIn(username, password)
      .then((res) => {
        localStorage.setItem('refreshToken', res.refreshToken);
        setCookie('jwt', res.access_token);

        dispatch({
          type: LOGIN_SUCCESS,
        });
        //console.log(res.access_token)
      })
      .then(() => {
        //console.log(getCookie('jwt'));
        //getUserInfo();
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAILED,
          payload: err.message,
        });
        if (err.message === 'Unexpected end of JSON input') {
          status = 'ok';
        }
      });
    /*.finally(() => {
        if (status === 'ok') {
          dispatch({
            type: LOGIN_SUCCESS,
          });
          console.log(status);
        }
      });*/
    //console.log(getCookie('jwt'));
  };
};

export const logOut: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    localStorage.removeItem('refreshToken');
    deleteCookie('jwt');
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  };
};

export const patchUserInfo: AppThunk = ({ username, about }: TRegisterForm) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: PATCH_USER_REQUEST,
    });
    api
      .patchUserInfo(username, about)
      .then((res) => {
        res &&
          dispatch({
            type: PATCH_USER_SUCCESS,
            payload: { userInfo: res, message: 'User info changed' },
          });
        //console.log(res);
      })
      .catch((err) => {
        dispatch({
          type: PATCH_USER_FAILED,
          payload: err,
        });
        //console.log(err.message);
      });
  };
};
