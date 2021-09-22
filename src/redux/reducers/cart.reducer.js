import * as types from "../constants/cart.constants";

const initialState = {
  products: [],
  loading: false,
};

const cartReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    // ADD PRODUCT TO CART
    case types.ADD_PRODUCT_TO_CART_REQUEST:
      return { ...state, loading: true };
    case types.ADD_PRODUCT_TO_CART_SUCCESS:
      return { ...state, loading: false };
    case types.ADD_PRODUCT_TO_CART_FAILURE:
      return { ...state, loading: false };
    // DELETE SINGLE CART:
    case types.DELETE_SINGLE_CART_REQUEST:
      return { ...state, loading: true };
    case types.DELETE_SINGLE_CART_SUCCESS:
      return { ...state, loading: false };
    case types.DELETE_SINGLE_CART_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default cartReducer;
