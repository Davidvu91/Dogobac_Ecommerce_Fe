import * as types from "../constants/order.constants";
import api from "../../apiService";
import { toast } from "react-toastify";

//CREATE AN ORDER:
// http://localhost:5000/order/create
const createOrder = (passData) => async (dispatch) => {
  console.log(passData);
  dispatch({ type: types.POST_CREATE_ORDER_REQUEST });
  try {
    const data = await api.post("/order/create", passData);
    console.log("data:", data);
    dispatch({ type: types.POST_CREATE_ORDER_SUCCESS, payload: "paid" });
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
    toast.success("update status successfully");
    dispatch(orderActions.getAllOrder());
  } catch (error) {
    dispatch({ type: types.PUT_UPDATE_ORDER_FAILURE, payload: null });
  }
};

export const orderActions = { createOrder, getAllOrder, updateStatusOfOrder };
