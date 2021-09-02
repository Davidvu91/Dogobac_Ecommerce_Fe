import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainPage from "../components/MainPage";
import SearchBox from "../components/SearchBox";
import "./style.css";
const HomePage = () => {
  return (
    <>
      <Container>
        <Row style={{ justifyContent: "center" }} className="row-padding">
          <Col lg={6} md={6} xs={12}>
            <SearchBox />
          </Col>
        </Row>
        <Row>
          {/* <Col lg={2} md={2} xs={12} className="sidebar-column row-padding">
                <SideBar />
              </Col> */}
          <Col lg={12} md={12} xs={12} className="row-padding">
            <MainPage />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
