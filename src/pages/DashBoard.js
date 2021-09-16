import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainInfo from "../components/dashBoard/MainInfo";
import SideBar from "../components/dashBoard/SideBar";

const DashBoard = () => {
  return (
    <Container>
      <Row className="row-padding">
        <Col lg={2} md={3}>
          <SideBar />
        </Col>
        <Col lg={10} md={9} xs={12}>
          <MainInfo />
        </Col>
      </Row>
    </Container>
  );
};

export default DashBoard;
