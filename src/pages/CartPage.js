import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import "./cartPage.css";
import { cartActions } from "../redux/actions/cart.actions";
import UpdateProfile from "../components/UpdateProfile";
import { useHistory } from "react-router-dom";
import { userActions } from "../redux/actions/user.actions";
import Moment from "react-moment";
import NumberFormat from "react-number-format";

const CartPage = () => {
  const history = useHistory();
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);
  let carts = user?.data?.data?.user?.cart;
  console.log("Im in cart page, I got carts info:", carts);
  let userInfo = user?.data?.data?.user;
  console.log("hihihi", userInfo);

  const dispatch = useDispatch();

  let handleDeleteCart = (cartId) => {
    dispatch(cartActions.deleteCart(cartId, history));
  };

  useEffect(() => {
    dispatch(userActions.getSingleUserInfo());
  }, [dispatch]);

  let phone = userInfo?.phone;
  console.log("phone: ", phone);
  let address = userInfo?.address;
  console.log("address:", address);
  //MODALS:
  const [show, setShow] = useState(false);
  // const handleShow = () => {
  //   console.log("handle show");
  // };
  const handleClose = () => setShow(false);

  //Functions call actions onClick

  // const handleGetSingleProfile = (e) => {
  //   dispatch(userActions.getSingleUserInfo());
  // };

  let handleOnActions = () => {
    console.log("actions...");
    if (!phone || !address) return setShow(true);
    console.log("show...");
    dispatch(userActions.getSingleUserInfo());
    history.push("/auth/bill");
  };

  let totalMoney =
    carts &&
    carts.length &&
    carts.reduce(
      (initValue, cart) =>
        initValue + cart?.items?.quantity * cart?.items?.productId?.price,
      0
    );
  console.log("tong tien la:", totalMoney);

  return (
    <>
      {loading ? (
        <h1>...loading</h1>
      ) : (
        <Container className="cartPage-container">
          <Row className=" row-padding">
            <Col>
              <h3 className="cartPage-title">ĐỒ GỖ BẮC | Giỏ Hàng Của Bạn:</h3>
            </Col>
          </Row>
          <Row className="cart-page row-padding">
            {carts?.map((cart) => (
              <Row key={cart._id} className="row-padding">
                <Col lg={5} md={5}>
                  <Row>
                    <Col lg={1} md={1}>
                      {" "}
                      <input
                        type="checkbox"
                        id="c1"
                        name="checkBox"
                        className="check-box"
                      />
                    </Col>
                    <Col lg={11} md={11}>
                      <Row>
                        <Col lg={4} md={4}>
                          <img
                            src={cart?.items?.productId?.imageUrl[0]}
                            alt=""
                            className="cart-Image"
                          />
                        </Col>
                        <Col lg={8} md={8}>
                          {cart?.items?.productId?.name}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>

                <Col lg={7} md={7}>
                  <Row>
                    <Col lg={2} md={2}>
                      {cart?.items?.productId?.dimension}{" "}
                    </Col>
                    <Col lg={1} md={1}>
                      {cart?.items?.quantity}{" "}
                    </Col>
                    <Col lg={2} md={2}>
                      <NumberFormat
                        value={cart?.items?.productId?.price}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"VND "}
                      />
                    </Col>
                    <Col lg={3} md={3}>
                      <Moment format="YYYY/MM/DD">{cart?.createdAt}</Moment>
                    </Col>
                    <Col
                      lg={3}
                      md={3}
                      style={{ fontWeight: "bold", color: "rgb(238,77,45)" }}
                    >
                      <NumberFormat
                        value={
                          cart?.items?.quantity * cart?.items?.productId?.price
                        }
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"VND"}
                      />
                    </Col>
                    <Col lg={1} md={1}>
                      <Button
                        variant=""
                        onClick={() => handleDeleteCart(cart._id)}
                      >
                        {" "}
                        <i class="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            ))}
            <Row className="cart-order row-padding">
              <Row>
                <Col
                  lg={3}
                  md={6}
                  xs={12}
                  style={{ fontWeight: "bold", color: "rgb(238,77,45)" }}
                >
                  <span>Tong tien: </span>

                  <NumberFormat
                    value={totalMoney}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"VND "}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={3} md={6} xs={12}>
                  <Button
                    variant=""
                    type="submit"
                    className="single-btn"
                    onClick={() => {
                      handleOnActions();
                    }}
                  >
                    Mua Hàng
                  </Button>{" "}
                </Col>
              </Row>
            </Row>
          </Row>

          {/* MODALS: */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update Your Profile</Modal.Title>
            </Modal.Header>
            <UpdateProfile />
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      )}
    </>
  );
};

export default CartPage;
