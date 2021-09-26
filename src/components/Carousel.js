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
            src="http://res.cloudinary.com/dejusl2dv/image/upload/v1632669833/cyzdzhzgmyoyxhfam6wf.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-content">
            {/* <h3 className="carousel-title">SOFA GỖ TỰ NHIÊN CAO CẤP</h3>
            <p className="carousel-text">Uy Tín - Chất Lượng - Giá Rẻ Nhất!</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dejusl2dv/image/upload/v1632669844/erblmqhflyusoesjlw4i.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="carousel-content">
            {/* <h3 className="carousel-title">SOFA GỖ TỰ NHIÊN CAO CẤP</h3>
            <p className="carousel-text">Uy Tín - Chất Lượng - Giá Rẻ Nhất!</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dejusl2dv/image/upload/v1632669852/flcqd0vkagacqoqsqabw.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="carousel-content">
            {/* <h3 className="carousel-title"> SOFA GỖ TỰ NHIÊN CAO CẤP</h3>
            <p className="carousel-text">Uy Tín - Chất Lượng - Giá Rẻ Nhất!</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://doanhnghiepvanbagoto.com/uploads/plugin/product_items/1078/14-1.jpg"
            alt="Fourth slide"
          />

          <Carousel.Caption className="carousel-content">
            {/* <h3 className="carousel-title"> SOFA GỖ TỰ NHIÊN CAO CẤP</h3>
            <p className="carousel-text">Uy Tín - Chất Lượng - Giá Rẻ Nhất!</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Row>
  );
};

export default CarouselPart;
