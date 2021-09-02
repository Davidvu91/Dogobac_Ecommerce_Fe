import React, { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import "./productDetail.css";

const PricePart = () => {
  const [count, setCount] = useState(1);

  const handleAdd = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const handleSub = (e) => {
    if (count >= 2) {
      setCount(count - 1);
    } else return 1;
  };

  return (
    <Card style={{ width: "100%" }}>
      <Card.Header>Tên Sản Phẩm</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Kích Thước:</ListGroup.Item>
        <ListGroup.Item>Giá:</ListGroup.Item>
        <ListGroup.Item>
          Số Lượng:
          <Button variant="" onClick={handleSub} className="calulate-btn">
            -
          </Button>
          <span>{count}</span>
          <Button variant="" onClick={handleAdd} className="calulate-btn">
            +
          </Button>
        </ListGroup.Item>

        <ListGroup.Item>
          <Button variant="" className="single-btn detail-ntn">
            Thêm Vào Giỏ
          </Button>
          <Button variant="" className="single-btn detail-ntn">
            Mua Ngay
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default PricePart;
