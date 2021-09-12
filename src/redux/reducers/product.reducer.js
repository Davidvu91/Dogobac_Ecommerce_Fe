import * as types from "../constants/product.constants";

const initialState = {
  data: {},
  loading: false,
  selectedProduct: null,
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // POST - CREATE A PRODUCT
    case types.POST_CREATE_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case types.POST_CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case types.POST_CREATE_PRODUCT_FAILURE:
      return { ...state, loading: false };
    // GET - ALL PRODUCTS
    case types.GET_ALL_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case types.GET_ALL_PRODUCT_SUCCESS:
      return { ...state, data: payload, loading: false };
    case types.GET_ALL_PRODUCT_FAILURE:
      return { ...state, loading: false };
    // GET SINGLE PRODUCT BY ID
    case types.GET_SIGLE_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case types.GET_SIGLE_PRODUCT_SUCCESS:
      return { ...state, selectedProduct: payload, loading: false };
    case types.GET_SIGLE_PRODUCT_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default productReducer;
