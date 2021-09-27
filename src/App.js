import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbarr from "./components/Navbar";
import ProductDetailPage from "./pages/ProductDetailPage";
import CreateProduct from "./pages/CreateProduct";
import CartPage from "./pages/CartPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfilePage from "./pages/ProfilePage";
import DashBoard from "./pages/DashBoard";
import ListOfUsers from "./pages/ListOfUsers";
import BillInfo from "./pages/BillInfo";
import Toastify from "./components/Toastify";
import FooterNew from "./components/FooterNew";
import EditProduct from "./pages/EditProduct";
import ListOfOrder from "./components/dashBoard/ListOfOrder";
import AdminProfile from "./components/dashBoard/AdminProfile";
import Thankyou from "./pages/Thankyou";
import Register from "./components/validationForm/Register";
import { useDispatch, useSelector } from "react-redux";
import { redirectActions } from "./redux/actions/redirect.actions";
import Login from "./components/validationForm/Login";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { userActions } from "./redux/actions/user.actions";

function App() {
  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const history = useHistory();
  const redirect = useSelector((state) => state.redirectReducer.redirect);
  console.log("redirect:... ", redirect);
  useEffect(() => {
    if (redirect) {
      const tempRedirect = redirect;
      dispatch(redirectActions.deleteRedirect());
      history.push(tempRedirect);
    }
  }, [redirect, dispatch, history]);

  useEffect(() => {
    if (accessToken) {
      dispatch(userActions.getSingleUserInfo());
    }
  }, [dispatch, accessToken]);

  return (
    <div>
      <Navbarr />
      <Toastify />
      <Switch>
        <Route exact path={`/`} component={HomePage} />
        <Route exact path={`/product/:id`} component={ProductDetailPage} />
        <Route exact path={`/auth/login`} component={Login} />
        <Route exact path={`/auth/register`} component={Register} />
        <Route exact path={`/auth/create`} component={CreateProduct} />
        <Route exact path={`/auth/listUsers`} component={ListOfUsers} />
        <Route exact path={`/auth/listOrders`} component={ListOfOrder} />
        <Route exact path={`/auth/bill`} component={BillInfo} />
        <Route exact path={`/thanks`} component={Thankyou} />
        <Route exact path={`/admin/profile`} component={AdminProfile} />
        <Route exact path={`/admin/edit/:productId`} component={EditProduct} />
        <ProtectedRoute exact path={`/auth/profile`} component={ProfilePage} />
        <ProtectedRoute exact path={`/cart`} component={CartPage} />
        <ProtectedRoute exact path={`/admin/dashboard`} component={DashBoard} />
      </Switch>
      <FooterNew />
    </div>
  );
}

export default App;
