import React from "react";
import { Button, Form, NavLink } from "react-bootstrap";
import "./validate.css";
import { Formik } from "formik";
import { SignupSchema } from "./Valid.Shema";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authActions } from "../../redux/actions/auth.actions";
import { Link } from "react-router-dom";

const Register = () => {
  const errorMess = useSelector((state) => state.authReducer.message);
  const dispatch = useDispatch();
  const history = useHistory();
  const n = Object.keys(errorMess).length;

  return (
    <div className="validate-register-contatiner">
      {n === 0 ? (
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
            const formData = values;
            console.log("passData:", formData);
            dispatch(authActions.register(formData, history));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit} className="form-main-container">
              <div className="form-field-container">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  placeholder="Tên"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name ? (
                  <div className="inValid-text">{errors.name}</div>
                ) : null}
              </div>

              <div className="form-field-container">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <div className="inValid-text">{errors.email}</div>
                ) : null}
              </div>

              <div className="form-field-container">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  s
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password ? (
                  <div className="inValid-text">{errors.password}</div>
                ) : null}
              </div>

              <div className="lg-rg-content">
                <p>Bạn đã có tài khoản? </p>
                <NavLink as={Link} to="/auth/login" style={{ color: "blue" }}>
                  Đăng Nhập
                </NavLink>
              </div>

              <div className="form-submit-btn">
                <Button variant="" type="submit" className="single-form-bnt">
                  Tạo Tài Khoản
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <>
          <div className="register__error--message">{errorMess} !</div>

          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
              const formData = values;
              console.log("passData:", formData);
              dispatch(authActions.register(formData, history));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit} className="form-main-container">
                <div className="form-field-container">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    name="name"
                    placeholder="Tên"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name && touched.name ? (
                    <div className="inValid-text">{errors.name}</div>
                  ) : null}
                </div>

                <div className="form-field-container">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <div className="inValid-text">{errors.email}</div>
                  ) : null}
                </div>

                <div className="form-field-container">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    s
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password ? (
                    <div className="inValid-text">{errors.password}</div>
                  ) : null}
                </div>

                <div className="lg-rg-content">
                  <p>Bạn đã có tài khoản? </p>
                  <NavLink as={Link} to="/auth/login" style={{ color: "blue" }}>
                    Đăng Nhập
                  </NavLink>
                </div>

                <div className="form-submit-btn">
                  <Button variant="" type="submit" className="single-form-bnt">
                    Tạo Tài Khoản
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};

export default Register;
