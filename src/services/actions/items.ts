import { api } from '../../utils/api';
import { AppDispatch, AppThunk } from '../../types/store';

export const GET_ITEMS_LIST_REQUEST: 'GET_ITEMS_LIST_REQUEST' = 'GET_ITEMS_LIST_REQUEST';
export const GET_ITEMS_LIST_FAILED: 'GET_ITEMS_LIST_FAILED' = 'GET_ITEMS_LIST_FAILED';
export const GET_ITEMS_LIST_SUCCESS: 'GET_ITEMS_LIST_SUCCESS' = 'GET_ITEMS_LIST_SUCCESS';

export const getItemsList: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_ITEMS_LIST_REQUEST,
    });
    api
      .getItems()
      .then((res) => {
        dispatch({
          type: GET_ITEMS_LIST_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ITEMS_LIST_FAILED,
        });
      });
  };
};
