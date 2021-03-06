// import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.css";

// import { userActions } from "../redux/actions/user.actions";

const Navbarr = () => {
  const user = useSelector((state) => state.userReducer.user);
  let profile = user?.data?.data?.user;
  console.log("profile in navBar:", profile);
  let role = profile?.role;
  console.log("role of user:", role);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(userActions.getSingleUserInfo());
  // }, [dispatch]);

  // const handleGetSingleProfile = (e) => {
  //   dispatch(userActions.getSingleUserInfo());
  // };

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <Navbar expand="lg" className="navbar-bg">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/" className="nav-title-layout">
              <img src="/do-go-bac.png" alt="logo" height="45px" />
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/cart"
              className="nav-title-layout"
              // onClick={handleGetSingleProfile}
            >
              <i class="fas fa-cart-plus fa-lg"></i>
            </Nav.Link>
            {role === undefined ? (
              <>
                <Nav.Link
                  as={Link}
                  to="/auth/register"
                  className="nav-title-layout"
                >
                  Đăng ký
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/auth/login"
                  className="nav-title-layout"
                >
                  Đăng nhập
                </Nav.Link>
              </>
            ) : role === 0 ? (
              <>
                <Nav.Link
                  as={Link}
                  to="/auth/profile"
                  className="nav-title-layout "
                  // onClick={handleGetSingleProfile}
                >
                  <i class="fas fa-user fa-lg"></i>
                </Nav.Link>

                <Nav.Link className="nav-title-layout" onClick={handleLogOut}>
                  Đăng xuất
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  as={Link}
                  to="/admin/dashboard"
                  className="nav-title-layout "
                >
                  <i class="fas fa-tachometer-alt fa-2x"></i>
                </Nav.Link>
                <Nav.Link className="nav-title-layout" onClick={handleLogOut}>
                  Log out
                </Nav.Link>
              </>
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
