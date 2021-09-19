import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
// import { useEffect } from "react";
// import { authActions } from "../redux/actions/auth.actions";

const ProtectedRoute = (props) => {
  const { isAuthenticated } = useSelector((state) => state.authReducer);

  if (isAuthenticated === true) {
    return <Route {...props} />;
  } else {
    toast.error("Login required");
    return <Redirect to="/auth/login" />;
  }
};

export default ProtectedRoute;
