import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DescriptionPart from "../components/productDetail/DescriptionPart";
import MainImage from "../components/productDetail/MainImage";
import PricePart from "../components/productDetail/PricePart";
import Review from "../components/productDetail/Review";
import { productActions } from "../redux/actions/product.action";

const ProductDetailPage = () => {
  const params = useParams();
  const productId = params.productId;
  // const product = useSelector((state) => state.productReducer.selectedProduct);
  const loading = useSelector((state) => state.productReducer.loading);

  const product = { name: "Tu ao", price: 10, dimension: 20, id: 1 };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productActions.getSingleProductById(productId));
  }, [dispatch, productId]);

  return (
    <>
      <Container>
        {/* Part 1 */}
        <Row className="row-padding">
          <Col lg={4} md={4} xs={12}>
            <MainImage product={product} loading={loading} />
          </Col>
          <Col lg={8} md={8} xs={12}>
            <PricePart product={product} loading={loading} />
          </Col>
        </Row>
        {/* Part 2 */}
        <Row className="row-padding">
          <Col lg={8} md={8} xs={12}>
            <DescriptionPart product={product} loading={loading} />
          </Col>
          <Col lg={4} md={4} xs={12}>
            <Review product={product} loading={loading} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetailPage;
