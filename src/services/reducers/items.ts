//import React from 'react';

import {
  GET_ITEMS_LIST_REQUEST,
  GET_ITEMS_LIST_FAILED,
  GET_ITEMS_LIST_SUCCESS,
} from '../actions/items';

import {
  TItemsActions,
  TItemsState,
} from '../../types/items';

const itemsInitialState: TItemsState = {
  itemsLoad: false,
  itemsFailed: false,
  items: [],
};

export const itemsReducer = (
  state = itemsInitialState,
  action: TItemsActions
) => {
  switch (action.type) {
    case GET_ITEMS_LIST_REQUEST: {
      return {
        ...state,
        itemsLoad: true,
        itemsFailed: false,
      };
    }
    case GET_ITEMS_LIST_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        itemsLoad: false,
        itemsFailed: false,
      };
    }
    case GET_ITEMS_LIST_FAILED: {
      return {
        ...state,
        itemsFailed: true,
        itemsLoad: false,
      };
    }
    default: {
      return state;
    }
  }
};
