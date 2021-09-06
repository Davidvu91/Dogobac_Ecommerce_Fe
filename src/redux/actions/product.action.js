import * as types from "../constants/product.constants";
import { toast } from "react-toastify";
import api from "../../apiService";

// const REACT_APP_BACKEND_API = process.env.REACT_APP_BACKEND_API;

const createProduct = (formData) => async (dispatch) => {
  console.log("product info before send to data base:", formData);
  dispatch({ type: types.POST_CREATE_PRODUCT_REQUEST });
  try {
    const data = await api.post("/product/create", formData);
    console.log(data);
    dispatch({ type: types.POST_CREATE_PRODUCT_SUCCESS, payload: data });
    toast.success("create product successfully");
  } catch (error) {
    dispatch({ type: types.POST_CREATE_PRODUCT_FAILURE });
  }
};

export const productActions = {
  createProduct,
};
