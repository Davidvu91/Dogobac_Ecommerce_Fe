import React from "react";

import {
  Carousel,
  onChange,
  onClickItem,
  onClickThumb,
} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
        <img src={product.imageUrl[0]} alt="Product" />
      </div>
      <div>
        <img src={product.imageUrl[1]} alt="Product" />
      </div>
      <div>
        <img src={product.imageUrl[2]} alt="Product" />
      </div>
    </Carousel>
  );
};

export default MainImage;
