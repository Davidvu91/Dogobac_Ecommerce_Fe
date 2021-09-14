import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DescriptionPart from "../components/productDetail/DescriptionPart";
import MainImage from "../components/productDetail/MainImage";
import PricePart from "../components/productDetail/PricePart";
import RelatedPorducts from "../components/productDetail/RelatedPorducts";
import Review from "../components/productDetail/Review";
import { productActions } from "../redux/actions/product.action";

const ProductDetailPage = () => {
  const params = useParams();
  const productId = params.id;
  console.log("productId chup dc la:", productId);
  const loading = useSelector((state) => state.productReducer.loading);
  const singleProduct = useSelector((state) => state.productReducer.data);
  console.log("singleProduct here:", singleProduct);
  const product = singleProduct.data?.data;
  console.log("thong tin chi tiet 1 san pham: ", product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.getSingleProductById(productId));
  }, [productId, dispatch]);

  return (
    <>
      {loading ? (
        <h1>...is loading</h1>
      ) : (
        <Container>
          {/* Part 1 - Main Image and Add to cart action */}
          <Row className="row-padding">
            <Col lg={4} md={4} xs={12}>
              {product ? <MainImage product={product} /> : <h1>Loading...</h1>}
            </Col>
            <Col lg={8} md={8} xs={12}>
              {product ? <PricePart product={product} /> : <h1>Loading...</h1>}
            </Col>
          </Row>
          {/* Part 2 - Detail infomation and reviews*/}
          <Row className="row-padding">
            <Col lg={8} md={8} xs={12}>
              {product ? (
                <DescriptionPart product={product} />
              ) : (
                <h1>Loading...</h1>
              )}
            </Col>
            <Col lg={4} md={4} xs={12}>
              {product ? <Review product={product} /> : <h1>Loading</h1>}
            </Col>
          </Row>
          {/* Part 3 - Related Products*/}
          <Row className="row-padding">
            <Col lg={12} md={12} xs={12}>
              {product ? (
                <RelatedPorducts product={product} loading={loading} />
              ) : (
                <h1>Loading...</h1>
              )}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProductDetailPage;
