import React, { Component } from "react";
import { Card } from "react-bootstrap";
import ReactDOM from "react-dom";
import {
  Carousel,
  onChange,
  onClickItem,
  onClickThumb,
} from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

const MainImage = ({ product }) => {
  return (
    <Carousel
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
      autoPlay
    >
      <div>
        <Card style={{ width: "100%" }}>
          <img src={product.imageUrl[0]} alt="Product" />
        </Card>
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <Card style={{ width: "100%" }}>
          <img src={product.imageUrl[1]} alt="Product" />
        </Card>
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <Card style={{ width: "100%" }}>
          <img src={product.imageUrl[2]} alt="Product" />
        </Card>
        {/* <p className="legend">Legend 1</p> */}
      </div>
    </Carousel>
  );
};

export default MainImage;
