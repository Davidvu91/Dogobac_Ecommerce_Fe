import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Form, NavLink, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userActions } from "../redux/actions/user.actions";

import { Link } from "react-router-dom";
import { authActions } from "../redux/actions/auth.actions";
import "./loginRegister.css";

const LoginPage = () => {
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  const data = useSelector((state) => state.authReducer.user?.data);
  console.log("data in login page:", data);
  console.log("....isAuthenticated:", isAuthenticated);

  let user = data?.data?.user;
  console.log("user in login page...............", user);
  let userId = user?._id;
  console.log("userId in login page:", userId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getSingleUserInfo());
  }, [dispatch]);

  const [formData, setstatFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setstatFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.email.value = "";
    e.target.password.value = "";
    setstatFormData("");
    dispatch(authActions.login(formData, history));
  };

  console.log(formData);
  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <Form onSubmit={handleSubmit} className="loginForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleOnChange}
          />
        </Form.Group>

        <div className="lg-rg-content">
          <p>Not has an account? </p>
          <NavLink as={Link} to="/auth/register">
            Register
          </NavLink>
        </div>

        <div className="login-btn">
          <Row>
            <Button variant="" type="submit" className="single-btn">
              Login
            </Button>
          </Row>
          <Row>
            <Button variant="" type="submit" className="single-btn">
              Login With GooGle
            </Button>
          </Row>
          <Row>
            <Button variant="" type="submit" className="single-btn">
              Login With Facebook
            </Button>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
