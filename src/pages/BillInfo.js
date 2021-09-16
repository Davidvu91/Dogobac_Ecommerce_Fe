import React from "react";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import "./billInfo.css";

const BillInfo = () => {
  return (
    <Container>
      <Row className="bill-header row-padding">
        <Col>
          <h3>ĐỒ GỖ BẮC | Thông Tin Hóa Đơn</h3>
        </Col>
      </Row>
      <Row className="bill-body row-padding">
        <Row>
          <h3>Thông Tin Người Mua</h3>
        </Row>
        <Row>
          <Col>Số Đt:</Col>
          <Col>Địa chỉ:</Col>
        </Row>
      </Row>
      <Row className="bill-body row-padding ">
        <Row>
          <h3>Thông Tin Sản Phẩm</h3>
        </Row>

        {/* Bắt đầu vòng lặp */}
        <Row>
          <Col>
            <Row>
              <Col>Image</Col>
              <Col>Name</Col>
            </Row>
          </Col>
          <Col>Price</Col>
          <Col>Quantity</Col>
          <Col>Total</Col>
        </Row>
        {/* Kết thúc vòng lặp */}
      </Row>
      <Row className="bill-footer row-padding">
        <Row>
          <Col>Sub Total:</Col>
        </Row>
        <Row>
          <Col>Phương thức thanh toán: Thanh toán khi nhận hàng</Col>
        </Row>
        <Row>
          <Col>
            <Button variant="" className="single-btn">
              Xác Nhận Mua Hàng
            </Button>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default BillInfo;
