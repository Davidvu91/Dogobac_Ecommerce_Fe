import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import DBPagination from "./DBPagination";
import "./listProduct.css";
import Moment from "react-moment";
import NumberFormat from "react-number-format";

const ListProduct = () => {
  const [page, setPage] = useState(1);

  const data = useSelector((state) => state.productReducer.data);
  const totalPage =
    data.data !== undefined &&
    data.data.data !== undefined &&
    data.data.data.totalPage;
  const loading = useSelector((state) => state.productReducer.loading);

  console.log("List data nhan tu product Reducer:", data);

  const products = data.data?.data?.products;
  // console.log("list of product in dashboard", products);
  const totalProducts = data.data.data.totalProducts;
  // console.log("tong so san pham la:", totalProducts);

  return (
    <>
      {loading ? (
        <h1>...isloading</h1>
      ) : (
        <Container>
          <Row className="row-padding">
            <h3> LIST OF YOUR PRODUCTS: {totalProducts}</h3>
          </Row>
          {products?.map((product) => (
            <Row className="row-padding, listProduct">
              <Col lg={10} md={10}>
                <Row className="row-padding">
                  <Col lg={2} md={2} className="image-box">
                    {" "}
                    <img
                      src={product.imageUrl[0]}
                      alt="product img"
                      className="image-dashboard"
                    />
                  </Col>
                  <Col lg={6} md={6} className="productName-box">
                    {product.name}{" "}
                  </Col>
                  <Col lg={2} md={2} className="price-box">
                    <NumberFormat
                      value={product.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"VND"}
                    />
                  </Col>
                  <Col lg={2} md={2} className="createdDay-box">
                    <Moment format="YYYY/MM/DD">{product.createdAt}</Moment>
                  </Col>
                </Row>
              </Col>
              <Col lg={2} md={2} className="actions-box">
                <Row>
                  <Col lg={4} md={4}>
                    <Button variant="">
                      <i class="fas fa-edit"></i>
                    </Button>
                  </Col>
                  <Col lg={4} md={4}>
                    <Button variant="">
                      <i class="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}

          <Row>
            <DBPagination
              pageNum={page}
              setPageNum={setPage}
              totalPageNum={totalPage}
            />
          </Row>
        </Container>
      )}
    </>
  );
};

export default ListProduct;
