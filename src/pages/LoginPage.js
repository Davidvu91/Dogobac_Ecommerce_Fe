import React from "react";
import { useState } from "react";
import { Button, Form, NavLink, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../redux/actions/auth.actions";
import "./loginRegister.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [formData, setstatFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setstatFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login(formData));
    e.target.email.value = "";
    e.target.password.value = "";
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
