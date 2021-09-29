import * as types from "../constants/cart.constants";
import { toast } from "react-toastify";
import api from "../../apiService";
import { userActions } from "./user.actions";
import { redirectActions } from "./redirect.actions";

//ADD A PRODUCT TO CART
// http://localhost:5000/cart/add/6139bc0fe106fce635bb1e0a
const addToCart = (product, passData, history) => async (dispatch) => {
  console.log("set data to pass", passData);
  const productId = product._id;

  dispatch({ type: types.ADD_PRODUCT_TO_CART_REQUEST, payload: null });
  try {
    await api.post(`/cart/add/${productId}`, passData);
    dispatch({ type: types.ADD_PRODUCT_TO_CART_SUCCESS, payload: null });
    toast.success(`THÊM SẢN PHẨM THÀNH CÔNG!`);
  } catch (error) {
    dispatch({ type: types.ADD_PRODUCT_TO_CART_FAILURE, payload: null });
    toast.error(`THÊM SẢN PHẨM THẤT BẠI!`);
    history.push("/auth/login");
  }
};

//ADD TO CART AND REDIRECT
// http://localhost:5000/cart/add/6139bc0fe106fce635bb1e0a
const buyNow = (product, passData) => async (dispatch) => {
  console.log("set data to pass", passData);
  const productId = product._id;

  dispatch({ type: types.ADD_PRODUCT_TO_CART_REQUEST, payload: null });
  try {
    await api.post(`/cart/add/${productId}`, passData);
    dispatch({ type: types.ADD_PRODUCT_TO_CART_SUCCESS, payload: null });
    dispatch(redirectActions.setRedirect("/cart"));
  } catch (error) {
    dispatch({ type: types.ADD_PRODUCT_TO_CART_FAILURE, payload: null });
    toast.error(`Add ${product.name} Failure`);
    dispatch(redirectActions.setRedirect("/auth/login"));
  }
};

//DELETE A SINGLE CART
// http://localhost:5000/cart/delete/6141747b8ca8b56cbeaaa90c
const deleteCart = (cartId, history) => async (dispatch) => {
  dispatch({ type: types.DELETE_SINGLE_CART_REQUEST });
  try {
    await api.delete(`/cart/delete/${cartId}`);
    dispatch({ type: types.DELETE_SINGLE_CART_SUCCESS });
    dispatch(userActions.getSingleUserInfo());
  } catch (error) {
    dispatch({ type: types.DELETE_SINGLE_CART_FAILURE });
  }
};

export const cartActions = {
  addToCart,
  deleteCart,
  buyNow,
};
