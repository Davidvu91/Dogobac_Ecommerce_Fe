import React, { useState } from "react";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./billInfo.css";
import NumberFormat from "react-number-format";
import { orderActions } from "../redux/actions/order.actions";

const BillInfo = () => {
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);
  console.log("users in Bill Page:", user);

  let userInfo = user?.data?.data?.user;
  console.log("hihihi", userInfo);
  let carts = user?.data?.data?.user?.cart;
  console.log("Im in bill info, I got carts info:", carts);

  const totalMoney = carts?.reduce(
    (initValue, cart) =>
      initValue + cart.items.quantity * cart.items.productId.price,
    0
  );

  let cartIds = [];
  let n = carts.length;
  for (let i = 0; i < n; i++) {
    console.log("cartids...:", carts[i]._id);
    cartIds.push(carts[i]._id);
  }
  console.log("cartIds:", cartIds);

  const owner = userInfo._id;

  const passData = {};

  passData.amount = totalMoney;
  passData.items = cartIds;
  passData.owner = owner;
  console.log("passData:", passData);

  const dispatch = useDispatch();
  const handleCreateOrder = () => {
    dispatch(orderActions.createOrder(passData));
  };

  return (
    <>
      {loading ? (
        <h1>...loading</h1>
      ) : (
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
              <h4>Tên: {userInfo.name}</h4>
            </Row>
            <Row>
              <Col lg={2} md={2} xs={2}>
                Số Đt:(+84) {userInfo.phone}
              </Col>
              <Col>Địa chỉ: {userInfo.address}</Col>
            </Row>
          </Row>
          <Row className="bill-body row-padding ">
            <Row className=" row-padding">
              <h3>Thông Tin Sản Phẩm</h3>
            </Row>

            {/* Bắt đầu vòng lặp */}
            <Row>
              {carts?.map((cart) => (
                <Row key={cart._id} className="row-padding">
                  <Col lg={6} md={6} xs={6}>
                    <Row>
                      <Col lg={3} md={3} xs={3}>
                        {" "}
                        <img
                          src={cart.items.productId.imageUrl[0]}
                          alt=""
                          className="cart-Image"
                        />
                      </Col>
                      <Col lg={9} md={9} xs={9}>
                        {cart.items.productId.name}
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    {" "}
                    <span>Price: </span>
                    <NumberFormat
                      value={cart.items.productId.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"VND"}
                    />
                  </Col>
                  <Col>
                    <span>Quantity: </span> {cart.items.quantity}
                  </Col>
                  <Col>
                    <span>Total: </span>{" "}
                    <NumberFormat
                      value={cart.items.quantity * cart.items.productId.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"VND"}
                    />
                  </Col>
                </Row>
              ))}
            </Row>
            {/* Kết thúc vòng lặp */}
          </Row>
          <Row className="bill-footer row-padding">
            <Row className=" row-padding">
              <Col>
                <span> Sub Total: </span>
                <b>
                  <NumberFormat
                    value={totalMoney}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"VND"}
                  />
                </b>
              </Col>
            </Row>
            <Row>
              <Col>
                {" "}
                Phương thức thanh toán: <i>Thanh toán khi nhận hàng</i>{" "}
              </Col>
            </Row>
            <Row className=" row-padding ">
              <Col>
                <Button
                  variant=""
                  className="single-btn"
                  onClick={handleCreateOrder}
                >
                  Xác Nhận Mua Hàng
                </Button>
              </Col>
            </Row>
          </Row>
        </Container>
      )}
    </>
  );
};

export default BillInfo;
