import * as types from "../constants/user.constants";
import { toast } from "react-toastify";
import api from "../../apiService";

// const REACT_APP_BACKEND_API = process.env.REACT_APP_BACKEND_API;

// GET SINGLE USER INFORMATION:
// http://localhost:5000/user/info
const getSingleUserInfo = () => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_USER_REQUEST, payload: null });
  try {
    const data = await api.get("/user/info");
    console.log("Single User info:", data);
    dispatch({ type: types.GET_SINGLE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.GET_SINGLE_USER_FAILURE, payload: null });
  }
};

// UPDATE USER INFO:
// http://localhost:5000/user/update
const updateUserInfo = (passData) => async (dispatch) => {
  console.log("data before send to server:", passData);
  dispatch({ type: types.UPDATA_SINGLE_USER_REQUEST, payload: null });
  try {
    const data = await api.put("user/update", passData);
    console.log("Updated user info:", data);
    dispatch({ type: types.UPDATA_SINGLE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.UPDATA_SINGLE_USER_FAILURE, payload: null });
  }
};

// GET ALL USERS
// http://localhost:5000/user/getall
const getAllUsers = () => async (dispatch) => {
  dispatch({ type: types.GET_ALL_USERS_REQUEST, payload: null });
  try {
    const data = await api.get("user/getall");
    console.log("List of users:", data);
    dispatch({ type: types.GET_ALL_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.GET_ALL_USERS_FAILURE, payload: null });
  }
};

export const userActions = { getSingleUserInfo, updateUserInfo, getAllUsers };
