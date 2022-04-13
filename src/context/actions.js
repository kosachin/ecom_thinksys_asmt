import {
  FETCH_ALL_DATA_REQ,
  FETCH_ALL_DATA_SUCCESS,
  FETCH_ALL_DATA_FAILURE,
  ADD_TO_CART_ITEM_REQ,
  ADD_TO_CART_ITEM_SUCCESS,
  ADD_TO_CART_ITEM_FAILURE,
} from "./actionTypes";

export const fetchAllDataRequest = () => ({
  type: FETCH_ALL_DATA_REQ,
});

export const fetchAllDataSuccess = (payload) => ({
  type: FETCH_ALL_DATA_SUCCESS,
  payload,
});

export const fetchAllDataFailure = (payload) => ({
  type: FETCH_ALL_DATA_FAILURE,
  payload,
});

export const addToCartRequest = () => ({
  type: ADD_TO_CART_ITEM_REQ,
});

export const addToCartSuccess = (payload) => ({
  type: ADD_TO_CART_ITEM_SUCCESS,
  payload,
});

export const addToCartFailure = (payload) => ({
  type: ADD_TO_CART_ITEM_FAILURE,
  payload,
});
