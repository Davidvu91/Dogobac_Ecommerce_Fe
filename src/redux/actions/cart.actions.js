import * as types from "../constants/cart.constants";
import { toast } from "react-toastify";
import api from "../../apiService";
import { userActions } from "./user.actions";

//ADD A PRODUCT TO CART
// http://localhost:5000/cart/add/6139bc0fe106fce635bb1e0a
const addToCart = (product, passData, history) => async (dispatch) => {
  console.log("set data to pass", passData);
  const productId = product._id;

  dispatch({ type: types.ADD_PRODUCT_TO_CART_REQUEST, payload: null });
  try {
    await api.post(`/cart/add/${productId}`, passData);
    dispatch({ type: types.ADD_PRODUCT_TO_CART_SUCCESS, payload: null });
    toast.success(`Add ${product.name} to cart successfully!`);
  } catch (error) {
    dispatch({ type: types.ADD_PRODUCT_TO_CART_FAILURE, payload: null });
    toast.error(`Add ${product.name} Failure`);
    history.push("/auth/login");
  }
};

//DELETE A SINGLE CART
// http://localhost:5000/cart/delete/6141747b8ca8b56cbeaaa90c
const deleteCart = (cartId, history) => async (dispatch) => {
  dispatch({ type: types.DELETE_SINGLE_CART_REQUEST, payload: null });
  try {
    await api.delete(`/cart/delete/${cartId}`);
    dispatch({ type: types.DELETE_SINGLE_CART_SUCCESS, payload: null });
    console.log("delete cart thanh cong");
    toast.success(`Delete Item successfully!`);
    dispatch(userActions.getSingleUserInfo());
  } catch (error) {
    dispatch({ type: types.DELETE_SINGLE_CART_FAILURE, payload: null });
  }
};

export const cartActions = {
  addToCart,
  deleteCart,
};
