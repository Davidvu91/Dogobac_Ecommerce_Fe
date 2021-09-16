import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./carosel.css";

const CarouselPart = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Row className="carousel-part">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://res.cloudinary.com/dejusl2dv/image/upload/v1631173883/jeuhj2arwfpgth46w5on.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>SOFA GỖ TỰ NHIÊN CAO CẤP</h3>
            <p>Uy Tín - Chất Lượng - Giá Rẻ Nhất!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://res.cloudinary.com/dejusl2dv/image/upload/v1631526110/shncyj8xuajwpgtdgbyw.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>SOFA GỖ TỰ NHIÊN CAO CẤP</h3>
            <p>Uy Tín - Chất Lượng - Giá Rẻ Nhất!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://res.cloudinary.com/dejusl2dv/image/upload/v1631174830/eiwaxv8talirsexd5cnz.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>SOFA GỖ TỰ NHIÊN CAO CẤP</h3>
            <p>Uy Tín - Chất Lượng - Giá Rẻ Nhất!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://res.cloudinary.com/dejusl2dv/image/upload/v1631174955/f08eeoewjvwh3txboytj.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>SOFA GỖ TỰ NHIÊN CAO CẤP</h3>
            <p>Uy Tín - Chất Lượng - Giá Rẻ Nhất!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Row>
  );
};

export default CarouselPart;