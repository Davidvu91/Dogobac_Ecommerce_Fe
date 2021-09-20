import * as types from "../constants/order.constants";
import api from "../../apiService";

//CREATE AN ORDER:
// http://localhost:5000/order/create
const createOrder = (passData) => async (dispatch) => {
  console.log(passData);
  dispatch({ type: types.POST_CREATE_ORDER_REQUEST });
  try {
    const data = await api.post("/order/create", passData);
    dispatch({ type: types.POST_CREATE_ORDER_SUCCESS, payload: data });
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

export const orderActions = { createOrder, getAllOrder };
