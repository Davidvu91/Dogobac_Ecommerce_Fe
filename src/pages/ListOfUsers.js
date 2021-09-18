import React, { useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../components/dashBoard/SideBar";
import { userActions } from "../redux/actions/user.actions";
import "./listOpUsers.css";
import Moment from "react-moment";

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
          <Row className="row-padding ">
            <Col lg={2} md={3}>
              {" "}
              <SideBar />
            </Col>
            <Col lg={10} md={9} xs={12}>
              <Row className="row-padding">
                <h3> LIST OF YOUR USER: {totalUsers} </h3>
              </Row>
              <Row className="row-padding dash-row">
                {users?.map((user) => (
                  <Row className="row-padding ">
                    <Col lg={10} md={10}>
                      <Row>
                        <Col lg={2} md={2} className="image-box dash-box">
                          {" "}
                          <img
                            src={user.avataUrl}
                            alt="user img"
                            className="image-dashboard  "
                          />
                        </Col>
                        <Col lg={2} md={2} className="userName-box dash-box">
                          {user.name}{" "}
                        </Col>
                        <Col lg={2} md={2} className="email-box dash-box">
                          {user.email}{" "}
                        </Col>
                        <Col lg={2} md={2} className="email-box dash-box">
                          {" "}
                          {user.phone}{" "}
                        </Col>
                        <Col lg={2} md={2} className="address-box dash-box">
                          {user.address}{" "}
                        </Col>
                        <Col lg={2} md={2} className="createdDay-box dash-box">
                          <Moment format="YYYY/MM/DD">{user.createdAt}</Moment>
                        </Col>
                      </Row>
                    </Col>

                    <Col lg={2} md={2}>
                      <Row>
                        <Col lg={4} md={4}>
                          <Button variant="">
                            <i class="fas fa-edit"></i>
                          </Button>
                        </Col>
                        <Col lg={4} md={4}>
                          <Button variant="">
                            <i class="fas fa-trash"></i>
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ListOfUsers;
