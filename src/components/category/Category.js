import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Category.css";

const Category = () => {
  return (
    <Row className="category-container">
      <Col lg={2} md={2} className="category-col">
        <div className="category-item">
          <img
            className="category-img"
            src="http://res.cloudinary.com/dejusl2dv/image/upload/v1631173883/jeuhj2arwfpgth46w5on.jpg"
            alt="Category"
          />
          <p className="category-text"> Sofa</p>
        </div>
      </Col>

      <Col lg={2} md={2} className="category-col">
        <div className="category-item">
          <img
            className="category-img"
            src="http://res.cloudinary.com/dejusl2dv/image/upload/v1632396431/xcgdwlfx4hcdrafeps31.jpg"
            alt="Category"
          />
          <p className="category-text"> Giường</p>
        </div>
      </Col>

      <Col lg={2} md={2} className="category-col">
        <div className="category-item">
          <img
            className="category-img"
            src="http://res.cloudinary.com/dejusl2dv/image/upload/v1632396879/g6rlrbzuymppxpo2qoup.jpg"
            alt="Category"
          />
          <p className="category-text"> Kệ Tivi</p>
        </div>
      </Col>

      <Col lg={2} md={2} className="category-col">
        <div className="category-item">
          <img
            className="category-img"
            src="http://res.cloudinary.com/dejusl2dv/image/upload/v1632592095/ivvyp9anrt2kmudcfs6y.jpg"
            alt="Category"
          />
          <p className="category-text"> Bàn Ăn</p>
        </div>
      </Col>

      <Col lg={2} md={2} className="category-col">
        <div className="category-item">
          <img
            className="category-img"
            src="https://2.bp.blogspot.com/-b-bRsj0l2QQ/XHY49iE98hI/AAAAAAAAEK4/UFWy-kv_fgg0mAgW020kNawxWyA7LVJyACLcBGAs/s1600/tu-quan-ao-go-soi-nga-dep-13.jpg"
            alt="Category"
          />
          <p className="category-text"> Tủ Áo</p>
        </div>
      </Col>
      <Col lg={2} md={2} className="category-col">
        <div className="category-item">
          <img
            className="category-img"
            src="http://res.cloudinary.com/dejusl2dv/image/upload/v1632400505/fus8qzmwfpu7ei3vtexd.jpg"
            alt="Category"
          />
          <p className="category-text"> Giường</p>
        </div>
      </Col>
    </Row>
  );
};

export default Category;
