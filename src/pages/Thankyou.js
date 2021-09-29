import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <Container className="thank-page">
      <Row>
        <Col xs={12} md={6} lg={6}>
          <img
            src="/thank_you.jpg"
            alt="thankyou-img"
            className="thank-page-img"
            style={{ width: "100%" }}
          />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <div>
            {" "}
            <h4 className="thanks-title">CẢM ƠN BẠN ĐÃ MUA HÀNG</h4>
          </div>
          <div>
            {" "}
            <p>Chúng tôi sẽ liên hệ với bạn trong vòng 24h</p>
          </div>
          <div>
            {" "}
            <p>
              Nếu bạn cần hỗ trợ, vui lòng liên hệ Hotline:{" "}
              <span style={{ color: "rgb(238,77,45)", fontWeight: "bold" }}>
                098.235.6789
              </span>
            </p>
          </div>
          <div>
            {" "}
            <i>
              {" "}
              <p>Xin Cảm Ơn!</p>{" "}
            </i>
          </div>
          <div style={{ marginTop: "50px", textAlign: "center" }}>
            {" "}
            <Button variant="" className="single-btn">
              <Link to="/">Tiếp Tục Mua Hàng!</Link>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Thankyou;
