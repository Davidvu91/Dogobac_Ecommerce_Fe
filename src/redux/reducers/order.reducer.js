import * as types from "../constants/order.constants";

const initialState = {
  data: {},
  loading: false,
};

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //POST - CREATE AN ORDER:
    case types.POST_CREATE_ORDER_REQUEST:
      return { ...state, loading: true };
    case types.POST_CREATE_ORDER_SUCCESS:
      return { ...state, loading: false, data: payload };
    case types.POST_CREATE_ORDER_FAILURE:
      return { ...state, loading: false };
    //GET - ALL ORDERS:
    case types.GET_ALL_ORDER_REQUEST:
      return { ...state, loading: true };
    case types.GET_ALL_ORDER_SUCCESS:
      return { ...state, loading: false, data: payload };
    case types.GET_ALL_ORDER_FAILURE:
      return { ...state, loading: false };
    //PUT - UPDATE ORDER STATUS:
    case types.PUT_UPDATE_ORDER_REQUEST:
      return { ...state, loading: true };
    case types.PUT_UPDATE_ORDER_SUCCESS:
      return { ...state, loading: false, data: payload };
    case types.PUT_UPDATE_ORDER_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default orderReducer;
