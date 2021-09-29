import * as types from "../constants/auth.constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../apiService";
import { userActions } from "./user.actions";

// const LOCAL_BE_URL = "http://localhost:5000";
// const REACT_APP_BACKEND_API = process.env.REACT_APP_BACKEND_API;

const register = (formData, history) => async (dispatch) => {
  console.log("register info:", formData);
  dispatch({ type: types.REGISTER_REQUEST });

  try {
    const data = await api.post("/user/create", formData);
    console.log(data);
    dispatch({ type: types.REGISTER_SUCCESS, payload: data.data.data });
    history.push("/auth/login");
    toast.success("TẠO TÀI KHOẢN THÀNH CÔNG!");
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE });
    toast.error("TẠO TÀI KHOẢN THẤT BẠI!");
  }
};

const login = (formData, history) => async (dispatch) => {
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
    dispatch(userActions.getSingleUserInfo());
    history.push("/");
    toast.success("ĐĂNG NHẬP THÀNH CÔNG!");
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE });
    toast.error("ĐĂNG NHẬP THẤT BẠI!");
  }
};

export const authActions = {
  register,
  login,
};
