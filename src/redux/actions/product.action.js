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
    toast.success("TẠO SẢN PHẨM MỚI THÀNH CÔNG!");
  } catch (error) {
    dispatch({ type: types.POST_CREATE_PRODUCT_FAILURE });
  }
};

// GET ALL PRODUCTS
// http://localhost:5000/product/list?order=asc&sortBy=price&limit=4&page=1&search=sofa
// http://localhost:5000/product/filter?order=desc&sortBy=price&limit=8&page=1&category=giường

const getAllProducts =
  (order, sortBy, limit, page, search, category) => async (dispatch) => {
    dispatch({ type: types.GET_ALL_PRODUCT_REQUEST, payload: null });
    try {
      let url = `${REACT_APP_BACKEND_API}/product/list?order=${order}&sortBy=${sortBy}&limit=${limit}&page=${page}`;
      if (search) url += `&search=${search}`;
      if (category)
        url = `${REACT_APP_BACKEND_API}/product/filter?order=${order}&sortBy=${sortBy}&limit=${limit}&page=${page}&category=${category}`;
      console.log("url: ", url);
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
  console.log("productId nhan dc khi click:", productId);
  dispatch({ type: types.GET_SIGLE_PRODUCT_REQUEST, payload: null });
  try {
    const data = await api.get(`/product/${productId}`);
    console.log("get single product data:", data);

    dispatch({ type: types.GET_ALL_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.GET_SIGLE_PRODUCT_FAILURE, payload: null });
  }
};

// UPDATE SINGLE PRODUCT
// localhost:5000/product/6139c15fe106fce635bb1e25
const upadateSingleProduct =
  (productId, passData, history) => async (dispatch) => {
    console.log("productId to Update:", productId);
    dispatch({ type: types.UPDATE_SIGLE_PRODUCT_REQUEST, payload: null });
    try {
      const data = await api.put(`product/${productId}`, passData);
      console.log("updated product in actions:", data);
      dispatch({ type: types.UPDATE_SIGLE_PRODUCT_SUCCESS, payload: data });
      toast.success("SỬA SẢN PHẨM THÀNH CÔNG!");
      history.push("/admin/dashboard");
    } catch (error) {
      dispatch({ type: types.UPDATE_SIGLE_PRODUCT_FAILURE, payload: null });
      toast.error("SỬA SẢN PHẨM THẤT BẠI");
    }
  };

//DELET SINGLE PRODUCT:
// localhost:5000/product/613b65258620bc438d81078c
const deletSingleProduct = (productId, history) => async (dispatch) => {
  console.log("id of deleted product:", productId);
  dispatch({ type: types.DELETE_SIGLE_PRODUCT_REQUEST, payload: null });
  try {
    await api.delete(`product/${productId}`);
    dispatch({ type: types.DELETE_SIGLE_PRODUCT_SUCCESS, payload: null });
    dispatch(productActions.getAllProducts("asc", "createdAt", 6, 1));
    history.push("/admin/dashboard");
  } catch (error) {
    console.log("error:", error);
    dispatch({ type: types.DELETE_SIGLE_PRODUCT_FAILURE, payload: null });
  }
};

// GET RELATED PRODUCT
// http://localhost:5000/product/related/6139c15fe106fce635bb1e25?order=desc&sortBy=createdAt&limit=6

// const getRelatedProduct =
//   (productId, order, sortBy, limit) => async (dispatch) => {
//     console.log("data receive :", productId, order, sortBy, limit);
//     dispatch({ type: types.GET_RELATED_PRODUCT_REQUEST, payload: null });
//     try {
//       console.log("run this ", { productId, order, sortBy, limit });
//       let url = `/product/related/${productId}?order=${order}&sortBy=${sortBy}&limit=${limit}`;
//       const data = await api.get(url);

//       console.log("get related products data:", data);

//       dispatch({ type: types.GET_RELATED_PRODUCT_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type: types.GET_RELATED_PRODUCT_FAILURE, payload: null });
//     }
//   };

export const productActions = {
  createProduct,
  getAllProducts,
  getSingleProductById,
  upadateSingleProduct,
  deletSingleProduct,
};
