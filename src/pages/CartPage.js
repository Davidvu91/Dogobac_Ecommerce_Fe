import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cartPage.css";
import { cartActions } from "../redux/actions/cart.actions";
import { userActions } from "../redux/actions/user.actions";

const CartPage = () => {
  // const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);
  let carts = user?.data?.data?.user?.cart;
  console.log("Im in cart page, I got carts info:", carts);

  const dispatch = useDispatch();

  const handleDeleteCart = (cartId) => {
    console.log("hahahah", cartId);
    dispatch(cartActions.deleteCart(cartId));
  };

  return (
    <div className="cart-page">
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
            <div className="cart-priceUnit cart-item"> {cart.createdAt}</div>
            {/* <div className="cart-totalMoney cart-item"> {cart.total}</div> */}
            <div
              className="cart-delete cart-item"
              onClick={() => handleDeleteCart(cart._id)}
            >
              <i class="fas fa-trash"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
