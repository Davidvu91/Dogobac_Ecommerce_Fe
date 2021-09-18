import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./FooterNew.css";

const FooterNew = () => {
  return (
    <Row className="row-padding">
      <Container className="footer-container">
        <Row className="footer-main-row">
          <Col lg={4} md={4} xs={12} className="footer-subBox">
            <Row className=" footer-sub-container">
              <Col lg={2} md={2} xs={2} className="footer-main-icon">
                <Link className="link-class" to="/">
                  <i class="fas fa-house-user fa-2x"></i>
                </Link>
              </Col>
              <Col lg={10} md={10} xs={10} className="footer-content">
                <Row>DO GO BAC</Row>
                <Row>
                  <Row>Showroom Vung Tau</Row>
                  <Row>124 Do Luong, 11 Ward</Row>
                  <Row>Hotlone: 098.278.1221</Row>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col lg={4} md={4} xs={12} className="footer-subBox">
            <Row className=" footer-sub-container">
              <Col lg={2} md={2} xs={2} className="footer-main-icon">
                <Link className="link-class" to="/">
                  <i class="fas fa-couch fa-2x"></i>
                </Link>
              </Col>
              <Col lg={10} md={10} xs={10} className="footer-content">
                <Row>CATEGORIRE</Row>
                <Row>
                  <Row>
                    {" "}
                    <Link className="link-class" to="/">
                      Bed
                    </Link>
                  </Row>
                  <Row>
                    {" "}
                    <Link className="link-class" to="/">
                      Closet
                    </Link>
                  </Row>
                  <Row>
                    {" "}
                    <Link className="link-class" to="/">
                      Tivi-Seft
                    </Link>
                  </Row>
                  <Row>
                    {" "}
                    <Link className="link-class" to="/">
                      Sofa
                    </Link>
                  </Row>
                  <Row>
                    {" "}
                    <Link className="link-class" to="/">
                      Dining Table
                    </Link>
                  </Row>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col lg={4} md={4} xs={12} className="footer-subBox">
            <Row className=" footer-sub-container">
              <Col lg={2} md={2} xs={2} className="footer-main-icon">
                <Link className="link-class" to="/">
                  <i class="fas fa-users fa-2x"></i>
                </Link>
              </Col>
              <Col lg={10} md={10} xs={10} className="footer-content">
                <Row>FOLLOW</Row>
                <Row>
                  <Row>
                    {" "}
                    <Link className="link-class" to="/">
                      <i class="fab fa-facebook-square icon"></i>
                    </Link>
                  </Row>
                  <Row>
                    {" "}
                    <Link className="link-class" to="/">
                      <i class="fab fa-twitter-square icon"></i>
                    </Link>
                  </Row>
                  <Row>
                    {" "}
                    <Link className="link-class" to="/">
                      <i class="fab fa-instagram-square icon"></i>
                    </Link>
                  </Row>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default FooterNew;
