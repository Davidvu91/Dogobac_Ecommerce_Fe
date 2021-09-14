import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useDispatch } from "react-redux";

import "./mainpage.css";
import { productActions } from "../redux/actions/product.action";

const MainPage = ({ products, loading }) => {
  // const order = "asc";
  // const sortBy = "price";
  // const limit = 8;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickProduct = (productId) => {
    dispatch(productActions.getSingleProductById(productId));
    // dispatch(productActions.getRelatedProduct(productId, order, sortBy, limit));
    history.push(`product/${productId}`);
  };

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : (
        <Row>
          {products.map((product) => (
            <Col lg={3} md={6} xs={12} className="home-card">
              <Card
                style={{
                  textDecoration: "none",
                  color: "black",
                  textAlign: "center",
                }}
                key={product._id}
                onClick={() => handleClickProduct(product._id)}
              >
                <Card.Img variant="top" src={product.imageUrl[0]} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Kích Thước:{product.dimension}</Card.Text>
                  <Button variant="" className="single-btn">
                    {product.price}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default MainPage;
