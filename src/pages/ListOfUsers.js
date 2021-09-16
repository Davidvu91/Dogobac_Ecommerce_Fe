import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideBar from "../components/dashBoard/SideBar";
import { userActions } from "../redux/actions/user.actions";
import "./listOpUsers.css";

const ListOfUsers = () => {
  const data = useSelector((state) => state.userReducer.listUsers);
  const loading = useSelector((state) => state.userReducer.loading);
  console.log("data in dash board:", data);
  const totalUsers = data?.data?.data?.totalUser;
  console.log("tong so users la:", totalUsers);
  const users = data?.data?.data?.data;
  console.log("list of user in dash board:", users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.getAllUsers());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h1>...is loading</h1>
      ) : (
        <Container>
          <Row className="row-padding">
            <Col lg={2} md={3}>
              {" "}
              <SideBar />
            </Col>
            <Col lg={10} md={9} xs={12}>
              <Row className="row-padding">
                <h1> LIST OF YOUR USER: {totalUsers} </h1>
              </Row>
              {users?.map((user) => (
                <Row className="row-padding, listuser dash-row">
                  <Col className="check-box  dash-box">
                    <input
                      type="checkbox"
                      name="checkBox"
                      className="check-box "
                    />{" "}
                  </Col>
                  <Col className="image-box dash-box">
                    {" "}
                    <img
                      src={user.avataUrl}
                      alt="user img"
                      className="image-dashboard  "
                    />
                  </Col>
                  <Col className="userName-box dash-box">{user.name} </Col>
                  <Col className="email-box dash-box">{user.email} </Col>
                  <Col className="address-box dash-box">{user.address} </Col>
                  <Col className="createdDay-box dash-box">
                    {user.createdAt}{" "}
                  </Col>
                  <Col className="actions-box dash-box">
                    <Row>
                      <Col>
                        <Link>
                          <i class="fas fa-trash"></i>
                        </Link>
                      </Col>
                      <Col>
                        <Link>
                          <i class="fas fa-edit"></i>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ))}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ListOfUsers;
