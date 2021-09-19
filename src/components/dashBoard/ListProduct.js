import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DBPagination from "./DBPagination";
import "./listProduct.css";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
import { productActions } from "../../redux/actions/product.action";
import PopupToDelete from "../PopupToDelete";
import { useHistory } from "react-router";

const ListProduct = () => {
  const order = "asc";
  const sortBy = "createdAt";
  const limit = 6;
  const [page, setPage] = useState(1);

  const loading = useSelector((state) => state.productReducer.loading);
  const data = useSelector((state) => state.productReducer.data);
  console.log("List data nhan tu product Reducer:", data);

  const products = data?.data?.data?.products;
  // console.log("list of product in dashboard", products);

  const totalPage =
    data.data !== undefined &&
    data.data.data !== undefined &&
    data.data.data.totalPage;

  const totalProducts = data?.data?.data?.totalProducts;
  // console.log("tong so san pham la:", totalProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productActions.getAllProducts(order, sortBy, limit, page));
  }, [dispatch, order, sortBy, limit, page]);

  //Modal:
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const history = useHistory();
  const handleUpdateProduct = (productId) => {
    dispatch(productActions.getSingleProductById(productId));
    history.push(`edit/${productId}`);
  };

  const handleDeleteProduct = (productId) => {
    console.log("poroductId receive on click to delete", productId);
  };

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
                    <Button
                      variant=""
                      onClick={() => {
                        handleUpdateProduct(product._id);
                      }}
                    >
                      <i class="fas fa-edit"></i>
                    </Button>
                  </Col>
                  <Col lg={4} md={4}>
                    <Button
                      variant=""
                      onClick={() => {
                        handleShow();
                        handleDeleteProduct(product._id);
                      }}
                    >
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
          {/* MODAL: */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Do You Want to Delete Your Product?</Modal.Title>
            </Modal.Header>
            <PopupToDelete />
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="danger" onClick={handleDeleteProduct}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      )}
    </>
  );
};

export default ListProduct;
