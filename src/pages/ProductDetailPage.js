import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Comment from "../components/productDetail/Comment";
import DescriptionPart from "../components/productDetail/DescriptionPart";
import MainImage from "../components/productDetail/MainImage";
import PricePart from "../components/productDetail/PricePart";
import Review from "../components/productDetail/Review";

const ProductDetailPage = () => {
  return (
    <>
      <Container>
        {/* Part 1 */}
        <Row className="row-padding">
          <Col lg={4} md={4} xs={12}>
            <MainImage />
          </Col>
          <Col lg={8} md={8} xs={12}>
            <PricePart />
          </Col>
        </Row>
        {/* Part 2 */}
        <Row className="row-padding">
          <Col lg={8} md={8} xs={12}>
            <DescriptionPart />
          </Col>
          <Col lg={4} md={4} xs={12}>
            <Review />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetailPage;
