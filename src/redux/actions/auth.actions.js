import * as types from "../constants/auth.constants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../apiService";

// const LOCAL_BE_URL = "http://localhost:5000";
// const REACT_APP_BACKEND_API = process.env.REACT_APP_BACKEND_API;

const register = (formData) => async (dispatch) => {
  console.log("register info:", formData);
  dispatch({ type: types.REGISTER_REQUEST });

  try {
    const data = await api.post("/user/create", formData);
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
    const data = await api.post("/auth/loginWithEmail", formData);
    console.log(data);
    // luu accesstoken trong localStorage
    api.defaults.headers.common["authorization"] =
      "Bearer " + data.data.data.accessToken;
    api.defaults.headers.authorization = "Bearer " + data.data.data.accessToken;

    dispatch({ type: types.LOGIN_SUCCESS, payload: data });
    toast.success("Login successfully!");
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE });
  }
};

export const authActions = {
  register,
  login,
};
