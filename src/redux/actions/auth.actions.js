import * as types from "../constants/auth.constants";
import { toast } from "react-toastify";
import api from "../../apiService";

const LOCAL_BE_URL = "http://localhost:5000";

const register = (formData) => async (dispatch) => {
  console.log("register info:", formData);
  dispatch({ type: types.REGISTER_REQUEST });

  try {
    const data = await api.post(`${LOCAL_BE_URL}/user/create`, formData);
    console.log(data);
    dispatch({ type: types.REGISTER_SUCCESS, payload: data.data.data });
    toast.success("Register successfully!");
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE });
  }
};

const login = (formData) => async (dispatch) => {
  console.log("login info", formData);
  dispatch({ type: types.LOGIN_REQUEST });

  try {
    const data = await api.post(
      `${LOCAL_BE_URL}/auth/loginWithEmail`,
      formData
    );
    console.log(data);
    dispatch({ type: types.LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE });
  }
};

const createProduct = (formData) => async (dispatch) => {
  console.log("product info:", formData);
  dispatch({ type: types.POST_CREATE_PRODUCT_REQUEST });
  try {
    const data = await api.post("/auth/create", formData);
    console.log(data);
    dispatch({ type: types.POST_CREATE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.POST_CREATE_PRODUCT_FAILURE });
  }
};

export const authActions = {
  register,
  login,
  createProduct,
};
