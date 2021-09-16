import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DBPagination from "./DBPagination";
import "./listProduct.css";

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
          <h1> LIST OF YOUR PRODUCT: {totalProducts}</h1>
          {products?.map((product) => (
            <Row className="row-padding, listProduct">
              <Col className="check-box">
                <input type="checkbox" name="checkBox" className="check-box" />{" "}
              </Col>
              <Col className="image-box">
                {" "}
                <img
                  src={product.imageUrl[0]}
                  alt="product img"
                  className="image-dashboard"
                />
              </Col>
              <Col className="productName-box">{product.name} </Col>
              <Col className="price-box">{product.price} </Col>
              <Col className="createdDay-box">{product.createdAt} </Col>
              <Col className="actions-box">
                <Row>
                  <Col>
                    <Link>
                      <i class="fas fa-trash"></i>
                    </Link>
                  </Col>
                  <Col>
                    <Link>
                      <i class="fas fa-edit"></i>
                    </Link>
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
