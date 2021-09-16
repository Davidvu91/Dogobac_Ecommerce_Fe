import * as types from "../constants/comment.constant";
import { toast } from "react-toastify";
import api from "../../apiService";

// CREATE A COMMENT TO SINGLE PRODUCT:
// http://localhost:5000/review/create/6139bbb0e106fce635bb1e07
const createComment = (data) => async (dispatch) => {
  console.log(data);
  dispatch({ type: types.CREATE_COMMENT_TO_PRODUCT_REQUEST, payload: null });
  try {
  } catch (error) {}
};

export const commentActions = {
  createComment,
};
