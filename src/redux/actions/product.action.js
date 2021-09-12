import * as types from "../constants/product.constants";
import { toast } from "react-toastify";
import api from "../../apiService";

const REACT_APP_BACKEND_API = process.env.REACT_APP_BACKEND_API;
// CREATE A PRODUCT
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

// GET ALL PRODUCTS
// http://localhost:5000/product/list?order=asc&sortBy=price&limit=4&page=1&search=sofa

const getAllProducts =
  (order, sortBy, limit, page, search) => async (dispatch) => {
    dispatch({ type: types.GET_ALL_PRODUCT_REQUEST, payload: null });
    try {
      let url = `${REACT_APP_BACKEND_API}/product/list?order=${order}&sortBy=${sortBy}&limit=${limit}&page=${page}`;
      if (search) url += `&search=${search}`;
      const data = await api.get(url);
      console.log("get list all product:", data);
      dispatch({ type: types.GET_ALL_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: types.GET_ALL_PRODUCT_FAILURE, payload: null });
    }
  };

// GET SINGLE PRODUCT
// http://localhost:5000/product/6139bc61e106fce635bb1e0d

const getSingleProductById = (productId) => async (dispatch) => {
  dispatch({ type: types.GET_SIGLE_PRODUCT_REQUEST, payload: null });
  try {
    const data = await api.get(`product/${productId}`);
    console.log("single product data:", data);
    dispatch({ type: types.GET_ALL_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.GET_SIGLE_PRODUCT_FAILURE, payload: null });
  }
};

export const productActions = {
  createProduct,
  getAllProducts,
  getSingleProductById,
};
