import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./FooterNew.css";

const FooterNew = () => {
  return (
    <div className="footer-container">
      <Container>
        <Row className="row-padding footer-style">
          <Row className="footer-main-row">
            <Col lg={6} md={6} xs={12} className="footer-subBox">
              <Row className=" footer-sub-container">
                <Col lg={2} md={2} xs={2} className="footer-main-icon">
                  <Link className="link-class" to="/">
                    <i class="fas fa-house-user fa-2x"></i>
                  </Link>
                </Col>
                <Col lg={10} md={10} xs={10} className="footer-content">
                  <div className="footer-title">DO GO BAC</div>
                  <div>
                    <div className="footer-sub-content">
                      <div className="footer-sub-icon">
                        <i class="fas fa-map-marked-alt"></i>
                      </div>
                      <div className="footer-text">Showroom Vung Tau</div>
                    </div>

                    <div className="footer-sub-content">
                      <div className="footer-sub-icon">
                        <i class="fas fa-map-marker"></i>
                      </div>
                      <div className="footer-text">124 Do Luong, 11 Ward</div>
                    </div>
                    <div className="footer-sub-content">
                      <div className="footer-sub-icon">
                        <i class="fas fa-mobile-alt"></i>
                      </div>
                      <div className="footer-text"> 098.278.1221</div>
                    </div>
                    <div className="footer-sub-content">
                      <div className="footer-sub-icon">
                        <i class="fas fa-envelope"></i>
                      </div>
                      <div className="footer-text">dogobacvt@gmail.com</div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={5} md={5} xs={12} className="footer-subBox">
              <Row className=" footer-sub-container">
                <Col lg={2} md={2} xs={2} className="footer-main-icon">
                  <Link className="link-class" to="/">
                    <i class="fas fa-couch fa-2x"></i>
                  </Link>
                </Col>
                <Col lg={10} md={10} xs={10} className="footer-content">
                  <div className="footer-title">THỂ LOẠI </div>
                  <div>
                    <div className="footer-text">Sofa</div>
                    <div className="footer-text">Giường</div>
                    <div className="footer-text">Kệ Tivi</div>
                    <div className="footer-text">Bàn Ăn</div>
                    <div className="footer-text">Tủ Áo</div>
                    <div className="footer-text">Tủ Giày Dép</div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={1} md={1} xs={1} className="footer-subBox">
              <Row className=" footer-sub-container">
                {/* <Col lg={2} md={2} xs={2} className="footer-main-icon">
                  <Link className="link-class" to="/">
                    <i class="fas fa-users fa-2x"></i>
                  </Link>
                </Col> */}
                <Col className="footer-content">
                  <Row>
                    <Row>
                      {" "}
                      <Link className="link-class footer-text" to="/">
                        <i class="fab fa-facebook-square icon fa-2x"> </i>
                        <p className="icon-title"> FaceBook</p>
                      </Link>
                    </Row>
                    <Row>
                      {" "}
                      <Link className="link-class footer-text" to="/">
                        <i class="fab fa-twitter-square icon fa-2x"></i>
                        <p className="icon-title"> Twitter</p>
                      </Link>
                    </Row>
                    <Row>
                      {" "}
                      <Link className="link-class footer-text" to="/">
                        <i class="fab fa-instagram-square icon fa-2x"></i>
                        <p className="icon-title"> Instagram</p>
                      </Link>
                    </Row>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default FooterNew;
