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
              <i>Đẳng cấp & Sang Trọng</i>{" "}
            </p>
            <p className="about-text">
              Chúng tôi luôn mong muốn và khao khát mang thiên nhiên đến gần hơn
              với ngôi nhà của bạn, mang những giá trị nguyên bản vào trong cuộc
              sống hàng ngày. GỖ TỰ NHIÊN được yêu thích và trở thành thú chơi
              đẳng cấp cũng bởi vì vậy. Vẻ đẹp của nó vô cùng tráng lệ nhưng lại
              tinh tế, sắc sảo trong từng đường nét.
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
              <i>Nâng tầm giá trị gỗ quý ngàn năm</i>{" "}
            </p>
            <p className="about-text">
              Với mong muốn gìn giữ và nâng tầm vẻ đẹp cho những ngôi nhà Việt,
              chúng tôi đang nỗ lực tạo ra nhiều sản phẩm đa dạng về chủng loại
              cũng như phong phú về hình thức. Các loại GỖ TỰ NHIÊN NGUYÊN KHỐI
              quý hiếm như: CẨM, HƯƠNG, GÕ VÀNG, GÕ ĐỎ, LIM,…. Đều là gỗ tự
              nhiên 100%, có độ bền, dẻo dai và chịu được sự tác động lớn từ môi
              trường bên ngoài.
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
              <i>Khách hàng là nguồn cảm hứng sáng tạo</i>{" "}
            </p>
            <p className="about-text">
              Hiện nay, với sự phát triển lớn mạnh của mình, chúng tôi không chỉ
              dừng lại ở quy mô thị trường trong nước mà tương lai gần sẽ vươn
              ra thị trường thế giới để cùng hội nhập và đóng góp vào sự nghiệp
              kinh tế của Đất nước. Để làm được điều đó chúng tôi cần sự đồng
              hành của quý vị, những người làm nên sức sống của công ty.
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
