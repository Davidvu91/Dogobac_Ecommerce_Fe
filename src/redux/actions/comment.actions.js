import * as types from "../constants/comment.constant";
import { toast } from "react-toastify";
import api from "../../apiService";

// CREATE A COMMENT TO SINGLE PRODUCT:
// http://localhost:5000/review/create/6139bbb0e106fce635bb1e07
const createComment = (productId) => async (dispatch) => {
  console.log(productId);
  dispatch({ type: types.CREATE_COMMENT_TO_PRODUCT_REQUEST });
  try {
    await api.post(`/review/create/${productId}`);
    dispatch({ type: types.CREATE_COMMENT_TO_PRODUCT_SUCCESS });
  } catch (error) {
    dispatch({ type: types.CREATE_COMMENT_TO_PRODUCT_FAILURE });
  }
};

export const commentActions = {
  createComment,
};
