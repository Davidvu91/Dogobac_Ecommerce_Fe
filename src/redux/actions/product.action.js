import * as types from "../constants/product.constants";
import { toast } from "react-toastify";
import api from "../../apiService";

const REACT_APP_BACKEND_API = process.env.REACT_APP_BACKEND_API;
const getProduct =
  ({ pageNum, limit, query }) =>
  async (dispatch) => {
    dispatch({ type: types.GET_PRODUCT_REQUEST });

    try {
      let url = `${REACT_APP_BACKEND_API}/products?page=${pageNum}&limit=${limit}`;
      if (query) url += `&query=${query}`;
      const data = await api.get(url);
      dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({ type: types.GET_PRODUCT_FAILURE });
    }
  };

export const productActions = {
  getProduct,
};
