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
            <Col lg={5} md={5} xs={12} className="footer-subBox">
              <Row className=" footer-sub-container">
                <Col lg={2} md={2} xs={2} className="footer-main-icon">
                  <div>
                    <i class="fas fa-house-user fa-2x"></i>
                  </div>
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
                  <div>
                    <i class="fas fa-couch fa-2x"></i>
                  </div>
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

            <Col lg={2} md={2} xs={12} className="footer-subBox">
              <Row className=" footer-sub-container">
                <Col lg={2} md={2} xs={2} className="footer-main-icon">
                  <Link
                    className="link-class"
                    to={{
                      pathname: "https://www.facebook.com/dogobac0982781221",
                    }}
                    target="_blank"
                  >
                    <i class="fab fa-facebook-square icon fa-2x"> </i>
                  </Link>
                  <Link
                    className="link-class"
                    to={{
                      pathname: "https://www.facebook.com/dogobac0982781221",
                    }}
                    target="_blank"
                  >
                    <i class="fab fa-twitter-square icon fa-2x"></i>
                  </Link>
                  <Link
                    className="link-class"
                    to={{
                      pathname: "https://www.facebook.com/dogobac0982781221",
                    }}
                    target="_blank"
                  >
                    <i class="fab fa-instagram-square icon fa-2x"></i>
                  </Link>
                </Col>
                <Col lg={10} md={10} xs={10} className="footer-content">
                  <div className="d-none d-xl-block">
                    <div className="footer-text">FaceBook</div>
                    <div className="footer-text">Twitter</div>
                    <div className="footer-text">Instagram</div>
                  </div>
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
