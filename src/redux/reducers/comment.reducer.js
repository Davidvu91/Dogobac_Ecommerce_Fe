import * as types from "../constants/comment.constant";

const initialState = {
  comment: [],
  loading: false,
};

const commentReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case types.CREATE_COMMENT_TO_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_COMMENT_TO_PRODUCT_SUCCESS:
      return { ...state, loading: false };
    case types.CREATE_COMMENT_TO_PRODUCT_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default commentReducer;
