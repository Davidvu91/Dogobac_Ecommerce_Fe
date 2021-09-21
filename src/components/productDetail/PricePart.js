import React, { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { cartActions } from "../../redux/actions/cart.actions";
import "./productDetail.css";
import NumberFormat from "react-number-format";

const PricePart = ({ product }) => {
  const history = useHistory();
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
  const dispatch = useDispatch();
  const passData = { quantity: count };
  console.log("data before sent to order:", passData);

  const addToCart = () => {
    dispatch(cartActions.addToCart(product, passData, history));
  };

  const handelByNow = async () => {
    console.log("bynow....");
    try {
      await addToCart();
      history.push("/cart");
    } catch (error) {
      throw new Error("something wrong....");
    }
  };

  return (
    <Card style={{ width: "100%" }} className="info-container">
      <Card.Header className="info-title"> {product.name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Kích Thước: {product.dimension}</ListGroup.Item>
        <ListGroup.Item>Đánh Giá: </ListGroup.Item>
        <ListGroup.Item>
          Giá:{" "}
          <b>
            {" "}
            <NumberFormat
              value={product.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"VND"}
              style={{ color: "rgb(238,77,45)" }}
            />
          </b>
        </ListGroup.Item>
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
          <Button
            variant=""
            className="single-btn detail-ntn"
            onClick={addToCart}
          >
            Thêm Vào Giỏ
          </Button>
          <Button
            variant=""
            className="single-btn detail-ntn"
            onClick={handelByNow}
          >
            Mua Ngay
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default PricePart;
