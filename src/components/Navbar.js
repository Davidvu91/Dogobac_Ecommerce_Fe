import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.css";

import { userActions } from "../redux/actions/user.actions";

const Navbarr = () => {
  const user = useSelector((state) => state.userReducer.user);
  let profile = user?.data?.data?.user;
  console.log("profile in navBar:", profile);
  let role = profile?.role;
  console.log("role of user:", role);

  const dispatch = useDispatch();
  const handleGetSingleProfile = (e) => {
    dispatch(userActions.getSingleUserInfo());
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <Navbar expand="lg" className="navbar-bg">
        {/* <Navbar.Brand as={Link} to="/">
        <img src={logo} alt="coderbook" width="50px" />
      </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className="nav-title-layout">
              <img src="/do-go-bac.png" alt="logo" height="45px" />
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/auth/register"
              className="nav-title-layout"
            >
              Register
            </Nav.Link>

            {/* <Nav.Link as={Link} to="/auth/create" className="nav-title-layout">
            Create Product
          </Nav.Link> */}

            <Nav.Link as={Link} to="/auth/login" className="nav-title-layout">
              Login
            </Nav.Link>

            <Nav.Link className="nav-title-layout" onClick={handleLogOut}>
              Log out
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/cart"
              className="nav-title-layout"
              onClick={handleGetSingleProfile}
            >
              <i class="fas fa-cart-plus fa-lg"></i>
            </Nav.Link>
            {role === 0 || role === undefined ? (
              <Nav.Link
                as={Link}
                to="/auth/profile"
                className="nav-title-layout "
                onClick={handleGetSingleProfile}
              >
                <i class="fas fa-user fa-lg"></i>
              </Nav.Link>
            ) : (
              <Nav.Link
                as={Link}
                to="/admin/dashboard"
                className="nav-title-layout "
              >
                <i class="fas fa-tachometer-alt fa-2x"></i>
              </Nav.Link>
            )}
          </Nav>
          {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="" className="search-bnt">
            Search
          </Button>
        </Form> */}
        </Navbar.Collapse>
      </Navbar>
      <div style={{ height: "6rem" }}></div>
    </>
  );
};

export default Navbarr;
