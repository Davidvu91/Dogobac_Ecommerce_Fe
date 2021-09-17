import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import "./cartPage.css";
import { cartActions } from "../redux/actions/cart.actions";
import UpdateProfile from "../components/UpdateProfile";
import { useHistory } from "react-router-dom";
import { userActions } from "../redux/actions/user.actions";

const CartPage = () => {
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);
  let carts = user?.data?.data?.user?.cart;
  console.log("Im in cart page, I got carts info:", carts);

  let userInfo = user?.data?.data?.user;
  console.log("hihihi", userInfo);

  const dispatch = useDispatch();
  let handleDeleteCart = (cartId) => {
    console.log("hahahah", cartId);
    dispatch(cartActions.deleteCart(cartId));
  };

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
  const history = useHistory();

  //Functions call actions onClick

  const handleGetSingleProfile = (e) => {
    dispatch(userActions.getSingleUserInfo());
  };

  let handleOnActions = () => {
    console.log("actions...");
    if (!phone || !address) return setShow(true);
    console.log("show...");
    handleGetSingleProfile();
    history.push("/auth/bill");
  };
  console.log("line 50", carts);
  let totalMoney =
    carts?.length &&
    carts.reduce(
      (initValue, cart) =>
        initValue + cart.items.quantity * cart.items.productId.price,
      0
    );
  console.log("tong tien la:", totalMoney);

  return (
    <>
      {loading ? (
        <h1>...loading</h1>
      ) : (
        <Container>
          <Row className="cart-page row-padding">
            {carts?.map((cart) => (
              <div className="cart-container">
                <div className="cart-block">
                  <div className="cart-ticksign cart-item">
                    {" "}
                    <input
                      type="checkbox"
                      id="c1"
                      name="checkBox"
                      className="check-box"
                    />
                  </div>
                  <div className="cart-productInfo cart-item">
                    <img
                      src={cart.items.productId.imageUrl[0]}
                      alt=""
                      className="cart-Image"
                    />
                    <div className="cart-productName">
                      {cart.items.productId.name}
                    </div>
                  </div>
                </div>
                <div className="cart-block">
                  <div className="cart-productDemension cart-item">
                    {cart.items.productId.dimension}{" "}
                  </div>
                  <div className="cart-quantity cart-item">
                    {cart.items.quantity}{" "}
                  </div>
                  <div className="cart-priceUnit cart-item">
                    {" "}
                    {cart.items.productId.price}
                  </div>
                  <div className="cart-priceUnit cart-item">
                    {" "}
                    {cart.createdAt}
                  </div>
                  <div className="cart-totalMoney cart-item">
                    {" "}
                    {cart.items.quantity * cart.items.productId.price}
                  </div>
                  <div
                    className="cart-delete cart-item"
                    onClick={() => handleDeleteCart(cart._id)}
                  >
                    <i class="fas fa-trash"></i>
                  </div>
                </div>
              </div>
            ))}
            <Row className="cart-order row-padding">
              <Col>Tong tien: {totalMoney}</Col>
              <Col>
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
