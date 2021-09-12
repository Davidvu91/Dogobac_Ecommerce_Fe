import * as types from "../constants/cart.constants";
import { toast } from "react-toastify";
import api from "../../apiService";

//ADD A PRODUCT TO CART
// http://localhost:5000/cart/add/6139bc0fe106fce635bb1e0a
const addToCart = (product, count) => async (dispatch) => {
  console.log("ban da chon mua so luong la", count);
  const productId = product._id;
  dispatch({ type: types.ADD_PRODUCT_TO_CART_REQUEST, payload: null });
  try {
    await api.post(`/cart/add/${productId}`, count);
    dispatch({ type: types.ADD_PRODUCT_TO_CART_SUCCESS, payload: null });
    toast.success(`Add ${product.name} to cart successfully!`);
  } catch (error) {
    dispatch({ type: types.ADD_PRODUCT_TO_CART_FAILURE, payload: null });
    toast.error(`Add ${product.name} Failure`);
  }
};

export const cartActions = {
  addToCart,
};
