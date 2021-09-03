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

function App() {
  return (
    <Router>
      <Navbarr />
      <Switch>
        <Route exact path={`/`} component={HomePage} />
        <ProtectedRoute exact path={`/cart`} component={CartPage} />
        <Route exact path={`/:id`} component={ProductDetailPage} />
        <Route exact path={`/auth/login`} component={LoginPage} />
        <Route exact path={`/auth/register`} component={RegisterPage} />
        <Route exact path={`/auth/create`} component={CreateProduct} />
        <Route exact path={`/auth/profile`} component={ProfilePage} />
      </Switch>
    </Router>
  );
}

export default App;
