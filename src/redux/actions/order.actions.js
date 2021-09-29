import * as types from "../constants/order.constants";
import api from "../../apiService";
import { cartActions } from "./cart.actions";

//CREATE AN ORDER:
// http://localhost:5000/order/create
const createOrder = (passData) => async (dispatch) => {
  console.log("passData in create Order action", passData);
  const cartIds = passData.items;
  console.log("array of cartId: ", cartIds);
  dispatch({ type: types.POST_CREATE_ORDER_REQUEST });
  try {
    const data = await api.post("/order/create", passData);
    console.log("data:", data);
    dispatch({ type: types.POST_CREATE_ORDER_SUCCESS, payload: "paid" });
    for (let i = 0; i < cartIds.length; i++) {
      dispatch(cartActions.deleteCart(cartIds[i]));
    }
    console.log("haha, xoa cart sau khi mua");
  } catch (error) {
    dispatch({ type: types.POST_CREATE_ORDER_FAILURE });
  }
};

// GET ALL ORDERS:
// http://localhost:5000/order/getall
const getAllOrder = () => async (dispatch) => {
  dispatch({ type: types.GET_ALL_ORDER_REQUEST });
  try {
    const data = await api.get("/order/getall");
    dispatch({ type: types.GET_ALL_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.GET_ALL_ORDER_FAILURE });
  }
};

// PUT UPDATE AN ORDER:
// http://localhost:5000/order/update/614b4c7739ee201ff54a75f0
const updateStatusOfOrder = (orderId, passData) => async (dispatch) => {
  console.log("order to Update:", orderId);
  dispatch({ type: types.PUT_UPDATE_ORDER_REQUEST, payload: null });
  try {
    const data = await api.put(`order/update/${orderId}`, passData);
    console.log("updated product in actions:", data);
    dispatch({ type: types.PUT_UPDATE_ORDER_SUCCESS, payload: data });

    dispatch(orderActions.getAllOrder());
  } catch (error) {
    dispatch({ type: types.PUT_UPDATE_ORDER_FAILURE, payload: null });
  }
};

export const orderActions = { createOrder, getAllOrder, updateStatusOfOrder };
