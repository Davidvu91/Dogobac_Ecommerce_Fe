import * as types from "../constants/auth.constants";

const initialState = {
  user: {},
  loading: false,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //register
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
    default:
      return state;
  }
};

export default authReducer;
