import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import cartReducer from "./cart.reducer";
import productReducer from "./product.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  authReducer: authReducer,
  userReducer: userReducer,
  productReducer: productReducer,
  cartReducer: cartReducer,
});
