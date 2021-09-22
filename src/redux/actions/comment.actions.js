import * as types from "../constants/comment.constant";
// import { toast } from "react-toastify";
import api from "../../apiService";
import { productActions } from "./product.action";

// CREATE A COMMENT TO SINGLE PRODUCT:
// http://localhost:5000/review/create/6139bbb0e106fce635bb1e07
const createComment = (passData, productId) => async (dispatch) => {
  console.log("data in comment actions", passData, productId);
  const { rating, content } = passData;
  dispatch({ type: types.CREATE_COMMENT_TO_PRODUCT_REQUEST });
  try {
    await api.post(`/review/create/${productId}`, { rating, content });
    dispatch({ type: types.CREATE_COMMENT_TO_PRODUCT_SUCCESS });
    dispatch(productActions.getSingleProductById(productId));
  } catch (error) {
    dispatch({ type: types.CREATE_COMMENT_TO_PRODUCT_FAILURE });
  }
};

export const commentActions = {
  createComment,
};
