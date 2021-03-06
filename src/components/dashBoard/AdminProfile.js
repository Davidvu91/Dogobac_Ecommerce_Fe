import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";
import ProfilePage from "../../pages/ProfilePage";

const AdminProfile = () => {
  return (
    <Container className="admin-profile" style={{ fontFamily: "Montserrat" }}>
      <Row className="row-padding">
        <Col lg={2} md={3}>
          {" "}
          <SideBar />
        </Col>{" "}
        <Col lg={4} md={4}>
          <Row>
            <Col>
              {" "}
              <ProfilePage />{" "}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminProfile;
