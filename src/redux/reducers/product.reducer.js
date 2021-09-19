import * as types from "../constants/product.constants";

const initialState = {
  data: {},
  updatedproduct: {},
  relatedProducts: {},
  loading: false,
  selectedProduct: {},
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
    // GET RELATED PRODUCTS
    case types.GET_RELATED_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case types.GET_RELATED_PRODUCT_SUCCESS:
      return { ...state, relatedProducts: payload, loading: false };
    case types.GET_RELATED_PRODUCT_FAILURE:
      return { ...state, loading: false };
    //UPDATE SINGLE PRODUCT
    case types.UPDATE_SIGLE_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case types.UPDATE_SIGLE_PRODUCT_SUCCESS:
      return { ...state, loading: false, updatedproduct: payload };
    case types.UPDATE_SIGLE_PRODUCT_FAILURE:
      return { ...state, loading: false };
    //DELETE SINGLE PRODUCT
    case types.DELETE_SIGLE_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case types.DELETE_SIGLE_PRODUCT_SUCCESS:
      return { ...state, loading: false };
    case types.DELETE_SIGLE_PRODUCT_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default productReducer;
