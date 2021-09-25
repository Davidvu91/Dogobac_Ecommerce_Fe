import * as types from "../constants/redirect.constants";

const initialState = {
  redirect: null,
};

const redirectReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // SET REDIRECT
    case types.SET_REDIRECT:
      return { redirect: payload };
    case types.DELETE_REDIRECT:
      return { redirect: null };

    default:
      return state;
  }
};

export default redirectReducer;
