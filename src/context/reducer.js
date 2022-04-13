import {
  FETCH_ALL_DATA_REQ,
  FETCH_ALL_DATA_SUCCESS,
  FETCH_ALL_DATA_FAILURE,
  ADD_TO_CART_ITEM_REQ,
  ADD_TO_CART_ITEM_SUCCESS,
  ADD_TO_CART_ITEM_FAILURE,
} from "./actionTypes";

const init = {
  loading: false,
  error: "",
  success: false,
  data: [],
  cartItem: [],
};

const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_DATA_REQ:
      return { ...store, loading: true };
    case FETCH_ALL_DATA_SUCCESS:
      return { ...store, loading: false, data: payload };
    case FETCH_ALL_DATA_FAILURE:
      return { ...store, loading: false, error: payload.message };
    case ADD_TO_CART_ITEM_REQ:
      return { ...store, loading: true };
    case ADD_TO_CART_ITEM_SUCCESS:
      return {
        ...store,
        loading: false,
        cartItem: [...store.cartItem, payload],
      };
    case ADD_TO_CART_ITEM_FAILURE:
      return { ...store, loading: false, error: payload.message };
      break;
    default:
      return { ...store };
  }
};

export default reducer;
