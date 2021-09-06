import * as types from "../constants/product.constants";

const initialState = {
  product: {},
  loanging: false,
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // POST create product
    case types.POST_CREATE_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case types.POST_CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case types.POST_CREATE_PRODUCT_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default productReducer;
