import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const DescriptionPart = ({ product }) => {
  return (
    <>
      <Card style={{ width: "100%" }} className="review-card">
        <Card.Header>THÔNG TIN SẢN PHẨM CHI TIẾT</Card.Header>
        <Card.Body>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={product.imageUrl[1]} />
        <br />
        <Card.Text>
          Giao hàng miễn phí toàn thành phố Vũng Tàu, Bảo hành 5 năm
        </Card.Text>
        <br />
        <Card.Img variant="top" src={product.imageUrl[2]} />
      </Card>
    </>
  );
};

export default DescriptionPart;
