import * as types from "../constants/auth.constants";

const initialState = {
  user: {},
  loading: false,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //REGISTER
    case types.REGISTER_REQUEST:
      return { ...state, loading: true };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        isAuthenticated: true,
      };
    case types.REGISTER_FAILURE:
      return { ...state, loading: false };
    // LOGIN
    case types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
      return { ...state, loading: false, isAuthenticated: true, user: payload };
    case types.LOGIN_FAILURE:
      return { ...state, loading: true, isAuthenticated: false };

    default:
      return state;
  }
};

export default authReducer;
