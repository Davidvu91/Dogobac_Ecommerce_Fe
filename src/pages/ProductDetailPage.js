import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import DescriptionPart from "../components/productDetail/DescriptionPart";
import MainImage from "../components/productDetail/MainImage";
import PricePart from "../components/productDetail/PricePart";
import RelatedPorducts from "../components/productDetail/RelatedPorducts";
import Review from "../components/productDetail/Review";
import RunningPart from "../components/productDetail/RunningPart";
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
        <Container className="mt-5">
          <Row>
            <Col lg={9} md={9} xs={12}>
              <Row className="row-padding image-price-part">
                <Col lg={5} md={5} xs={12}>
                  {product ? (
                    <MainImage product={product} />
                  ) : (
                    <h1>Loading...</h1>
                  )}
                </Col>
                <Col lg={7} md={7} xs={12}>
                  {product ? (
                    <PricePart product={product} />
                  ) : (
                    <h1>Loading...</h1>
                  )}
                </Col>
              </Row>

              <Row className="row-padding">
                <Col lg={12} md={12} xs={12}>
                  {product ? (
                    <DescriptionPart product={product} />
                  ) : (
                    <h1>Loading...</h1>
                  )}
                </Col>
              </Row>

              <Row>
                <Col lg={12} md={12} xs={12}>
                  {product ? <Review product={product} /> : <h1>Loading</h1>}
                </Col>
              </Row>
              <Row>
                <Col lg={12} md={12} xs={12}>
                  <Comment dispatch={dispatch} />
                </Col>
              </Row>
            </Col>
            <Col lg={3} md={3} xs={12}>
              <RunningPart />
            </Col>
          </Row>

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
