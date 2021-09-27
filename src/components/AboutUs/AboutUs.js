import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";

const AboutUs = () => {
  return (
    <Container className="about-container">
      <Row className="about-row-main-title">
        <Col>
          <h4 className="about-main-title">
            {" "}
            <span className="about-dogobac">ĐỒ GỖ BẮC</span> - TINH HOA GỖ VIỆT
          </h4>
        </Col>
      </Row>

      <Row className="about-sigle-row ">
        <Col lg={6} md={6} xs={12} className="about-col-content">
          <div className="about-img-container">
            <img
              className="about-img"
              src="http://res.cloudinary.com/dejusl2dv/image/upload/v1632661470/j9qdrivanxgqzoduqh9o.jpg"
              alt="legend1"
            />
          </div>
        </Col>
        <Col lg={6} md={6} xs={12} className="about-col-content">
          <Row className="about-row-sub-title">
            <h5 className="about-sub-title">TRUYỀN THỐNG LÂU ĐỜI</h5>
          </Row>
          <Row>
            <p className="about-text">
              {" "}
              <i>Thư giãn thông minh, trải nghiệm tuyệt vời</i>{" "}
            </p>
            <p className="about-text">
              Sofa văng có động cơ, đem đến trải nghiệm thư giãn thông minh tại
              nhà. Với hệ thống động cơ mượt mà, bạn có thể điều chỉnh ghế theo
              ý thích, như ngả lưng, nâng chân,... chỉ với 1 nút bấm. Sofa văng
              có động cơ đến từ các thương hiệu hàng đầu: Chateau d’Ax, Milano &
              Design, sử dụng chất liệu da thật và đệm mút êm ái, đem đến những
              phút giây thư giãn êm ái tuyệt vời và tiện lợi.
            </p>
          </Row>
        </Col>
      </Row>

      <Row className="about-sigle-row flex-column-reverse flex-md-row">
        <Col lg={6} md={6} xs={12} className="about-col-content">
          <Row className="about-row-sub-title">
            <h5 className="about-sub-title">
              {" "}
              LƯU GIỮ TINH HOA & HƠI THỞ THỜI ĐẠI
            </h5>
          </Row>
          <Row>
            <p className="about-text">
              {" "}
              <i>Thư giãn thông minh, trải nghiệm tuyệt vời</i>{" "}
            </p>
            <p className="about-text">
              Sofa văng có động cơ, đem đến trải nghiệm thư giãn thông minh tại
              nhà. Với hệ thống động cơ mượt mà, bạn có thể điều chỉnh ghế theo
              ý thích, như ngả lưng, nâng chân,... chỉ với 1 nút bấm. Sofa văng
              có động cơ đến từ các thương hiệu hàng đầu: Chateau d’Ax, Milano &
              Design, sử dụng chất liệu da thật và đệm mút êm ái, đem đến những
              phút giây thư giãn êm ái tuyệt vời và tiện lợi.
            </p>
          </Row>
        </Col>

        <Col lg={6} md={6} xs={12} className="about-col-content">
          <div className="about-img-container">
            <img
              className="about-img"
              src="https://res.cloudinary.com/dejusl2dv/image/upload/v1632669844/erblmqhflyusoesjlw4i.jpg"
              alt="legend2"
            />
          </div>
        </Col>
      </Row>

      <Row className="about-sigle-row  ">
        <Col lg={6} md={6} xs={12} className="about-col-content">
          <div className="about-img-container">
            <img
              className="about-img"
              src="http://res.cloudinary.com/dejusl2dv/image/upload/v1632672153/xumeotrcufyg5rg9o28x.jpg"
              alt="legend3"
            />
          </div>
        </Col>
        <Col lg={6} md={6} xs={12} className="about-col-content">
          <Row className="about-row-sub-title">
            <h5 className="about-sub-title">TRAU CHUỐT TỪNG ĐƯỜNG NÉT</h5>
          </Row>
          <Row>
            <p className="about-text">
              {" "}
              <i>Thư giãn thông minh, trải nghiệm tuyệt vời</i>{" "}
            </p>
            <p className="about-text">
              Sofa văng có động cơ, đem đến trải nghiệm thư giãn thông minh tại
              nhà. Với hệ thống động cơ mượt mà, bạn có thể điều chỉnh ghế theo
              ý thích, như ngả lưng, nâng chân,... chỉ với 1 nút bấm. Sofa văng
              có động cơ đến từ các thương hiệu hàng đầu: Chateau d’Ax, Milano &
              Design, sử dụng chất liệu da thật và đệm mút êm ái, đem đến những
              phút giây thư giãn êm ái tuyệt vời và tiện lợi.
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
