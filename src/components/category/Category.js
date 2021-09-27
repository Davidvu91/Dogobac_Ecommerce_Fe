import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Category.css";

const Category = ({ handleCategory }) => {
  return (
    <Row className="category-container">
      <Col lg={2} md={2} xs={4} className="category-col">
        <div
          className="category-item"
          onClick={() => {
            handleCategory("sofa");
          }}
        >
          <img
            className="category-img"
            src="http://res.cloudinary.com/dejusl2dv/image/upload/v1632661470/j9qdrivanxgqzoduqh9o.jpg"
            alt="sofa"
          />
          <p className="category-text"> Sofa</p>
        </div>
      </Col>

      <Col lg={2} md={2} xs={4} className="category-col">
        <div
          className="category-item"
          onClick={() => {
            handleCategory("giường");
          }}
        >
          <img
            className="category-img"
            src="http://res.cloudinary.com/dejusl2dv/image/upload/v1632396431/xcgdwlfx4hcdrafeps31.jpg"
            alt="Category"
          />
          <p className="category-text"> Giường</p>
        </div>
      </Col>

      <Col lg={2} md={2} xs={4} className="category-col">
        <div
          className="category-item"
          onClick={() => {
            handleCategory("kệ tivi");
          }}
        >
          <img
            className="category-img"
            src="http://res.cloudinary.com/dejusl2dv/image/upload/v1632397086/tgw00pwlgg5qxxw9wgiz.jpg"
            alt="Category"
          />
          <p className="category-text"> Kệ Tivi</p>
        </div>
      </Col>

      <Col lg={2} md={2} xs={4} className="category-col">
        <div
          className="category-item"
          onClick={() => {
            handleCategory("bàn ăn");
          }}
        >
          <img
            className="category-img"
            src="http://res.cloudinary.com/dejusl2dv/image/upload/v1632592095/ivvyp9anrt2kmudcfs6y.jpg"
            alt="Category"
          />
          <p className="category-text"> Bàn Ăn</p>
        </div>
      </Col>

      <Col lg={2} md={2} xs={4} className="category-col">
        <div
          className="category-item"
          onClick={() => {
            handleCategory("tủ áo");
          }}
        >
          <img
            className="category-img"
            src="http://res.cloudinary.com/dejusl2dv/image/upload/v1632643138/wv4dg2plzc63yrsizq4k.jpg"
            alt="Category"
          />
          <p className="category-text"> Tủ Áo</p>
        </div>
      </Col>
      <Col lg={2} md={2} xs={4} className="category-col">
        <div
          className="category-item"
          onClick={() => {
            handleCategory("tủ giày");
          }}
        >
          <img
            className="category-img"
            src="http://res.cloudinary.com/dejusl2dv/image/upload/v1632642025/uws816t7xem6ujwfrew9.jpg"
            alt="Category"
          />
          <p className="category-text"> Tủ Dép</p>
        </div>
      </Col>
    </Row>
  );
};

export default Category;
