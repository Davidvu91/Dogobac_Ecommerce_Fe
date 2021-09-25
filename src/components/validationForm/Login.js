import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/actions/auth.actions";
import { useHistory } from "react-router";
import { Form, Button, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="validate-register-contatiner">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Bạn chưa nhập email!";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Email chưa hợp lệ!";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log("values:", values);
          const formData = values;
          console.log("formData:", formData);
          dispatch(authActions.login(formData, history));
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
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div className="inValid-text">
                {errors.email && touched.email && errors.email}
              </div>
            </div>

            <div className="form-field-container">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
            </div>

            <div className="lg-rg-content">
              <p>Already has an account? </p>
              <NavLink as={Link} to="/auth/register" style={{ color: "blue" }}>
                Đăng Ký
              </NavLink>
            </div>

            <div className="form-submit-btn">
              <Button variant="" type="submit" className="single-form-bnt">
                Đăng Nhập
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
