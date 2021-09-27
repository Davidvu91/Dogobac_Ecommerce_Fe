import * as types from "../constants/user.constants";

const initialState = {
  user: {},
  loading: false,
  listUsers: {},
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //GET SINGLE USER INFO:
    case types.GET_SINGLE_USER_REQUEST:
      return { ...state, loading: true };
    case types.GET_SINGLE_USER_SUCCESS:
      return { ...state, user: payload, loading: false };
    case types.GET_SINGLE_USER_FAILURE:
      localStorage.removeItem("accessToken");
      return { ...state, loading: false };
    //UPDATE SINGLE USER:
    case types.UPDATA_SINGLE_USER_REQUEST:
      return { ...state, loading: true };
    case types.UPDATA_SINGLE_USER_SUCCESS:
      return { ...state, user: payload, loading: false };
    case types.UPDATA_SINGLE_USER_FAILURE:
      return { ...state, loading: false };
    //GET ALL USES:
    case types.GET_ALL_USERS_REQUEST:
      return { ...state, loading: true };
    case types.GET_ALL_USERS_SUCCESS:
      return { ...state, listUsers: payload, loading: false };
    case types.GET_ALL_USERS_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default userReducer;
