import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbarr from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
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

function App() {
  return (
    <Router>
      <Navbarr />
      <Toastify />
      <Switch>
        <Route exact path={`/`} component={HomePage} />
        <Route exact path={`/product/:id`} component={ProductDetailPage} />
        <Route exact path={`/auth/login`} component={LoginPage} />
        <Route exact path={`/auth/register`} component={RegisterPage} />
        <Route exact path={`/auth/create`} component={CreateProduct} />
        <Route exact path={`/auth/listUsers`} component={ListOfUsers} />
        <Route exact path={`/auth/bill`} component={BillInfo} />
        <Route exact path={`/admin/edit/:productId`} component={EditProduct} />
        <ProtectedRoute exact path={`/auth/profile`} component={ProfilePage} />
        <ProtectedRoute exact path={`/cart`} component={CartPage} />
        <ProtectedRoute exact path={`/admin/dashboard`} component={DashBoard} />
      </Switch>
      <FooterNew />
    </Router>
  );
}

//  <ProtectedRoute exact path={`/cart`} component={CartPage} />
export default App;
