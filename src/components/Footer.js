import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <Row>
      <div class="container full-vw pleft-0">
        <section id="footer">
          <div class="container full-vw">
            <div class="container1">
              <div class="sub-container">
                <div class="footer-img">
                  <Link className="link-class" to="/">
                    <i class="fas fa-house-user fa-3x"></i>
                  </Link>
                </div>
                <div class="ft-content">
                  <div class="ft-title">
                    <h4>ĐỒ GỖ BẮC</h4>
                  </div>
                  <Link className="link-class" to="/">
                    Showroom Vũng Tàu:
                  </Link>
                  <Link className="link-class" to="/">
                    Số 124 Đô Lương, Phường 11
                  </Link>
                  <Link className="link-class" to="/">
                    Hotline: 098.278.1221
                  </Link>
                </div>
              </div>

              <div class="sub-container">
                <div class="footer-img">
                  <Link className="link-class" to="/">
                    {" "}
                    <i class="fas fa-couch fa-3x"></i>
                  </Link>
                </div>
                <div class="ft-content">
                  <div class="ft-title">
                    <h4>Categories</h4>
                  </div>
                  <Link className="link-class" to="/">
                    About Us
                  </Link>
                  <Link className="link-class" to="/">
                    How It Works
                  </Link>
                  <Link className="link-class" to="/">
                    Security
                  </Link>
                </div>
              </div>

              <div class="sub-container">
                <div class="footer-img">
                  <Link className="link-class" to="/">
                    <i class="fas fa-users fa-3x"></i>
                  </Link>
                </div>
                <div class="ft-content">
                  <div class="ft-title">
                    <h4>Follow</h4>
                  </div>
                  <Link className="link-class" to="/">
                    <i class="fab fa-facebook-square icon"></i>
                  </Link>
                  <Link className="link-class" to="/">
                    <i class="fab fa-twitter-square icon"></i>
                  </Link>
                  <Link className="link-class" to="/">
                    <i class="fab fa-instagram-square icon"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Row>
  );
};

export default Footer;
