import * as types from "../constants/redirect.constants";

//ADD A PRODUCT TO CART

const setRedirect = (link) => async (dispatch) => {
  dispatch({ type: types.SET_REDIRECT, payload: link });
};

//DELETE A SINGLE CART

const deleteRedirect = () => async (dispatch) => {
  dispatch({ type: types.DELETE_REDIRECT });
};

export const redirectActions = {
  deleteRedirect,
  setRedirect,
};
