import * as types from "../constants/product.constants";
import { toast } from "react-toastify";
import api from "../../apiService";

const BACKEND_API_LOCALHOST = process.env.BACKEND_API_LOCALHOST;
const getProduct =
  ({ pageNum, limit, query }) =>
  async (dispatch) => {
    dispatch({ type: types.GET_PRODUCT_REQUEST });

    try {
      let url = `${BACKEND_API_LOCALHOST}/products?page=${pageNum}&limit=${limit}`;
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
