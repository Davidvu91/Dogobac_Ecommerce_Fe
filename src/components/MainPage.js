import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import "./mainpage.css";

const MainPage = ({ products, loading }) => {
  const history = useHistory();

  const handleClickProduct = (productId) => {
    history.push(`product/${productId}`);
  };

  // console.log("Products nhan duoc o main page:", products);
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
                key={product.id}
                onClick={() => handleClickProduct(product.id)}
              >
                {/* <Card.Img variant="top" src={product.imageUrl[0]} /> */}
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.dimension}</Card.Text>
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
