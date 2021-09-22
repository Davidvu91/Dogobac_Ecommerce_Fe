import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import NumberFormat from "react-number-format";

import "./mainpage.css";
import { productActions } from "../redux/actions/product.action";

const MainPage = ({ products, loading }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickProduct = (productId) => {
    dispatch(productActions.getSingleProductById(productId));
    history.push(`product/${productId}`);
  };

  return (
    <div className="mt-5">
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : (
        <Row>
          {products.map((product) => (
            <Col lg={3} md={6} xs={12} className="home-card">
              <Card
                key={product._id}
                onClick={() => handleClickProduct(product._id)}
                className="display-card"
              >
                <div className="display-card-group">
                  <div className="display-image">
                    <img alt="product" src={product.imageUrl[0]} />
                  </div>
                  {/* <div className="display-card-icon">
                    <i class="fas fa-shopping-cart"></i>
                  </div> */}
                </div>

                <div className="card-body">
                  <h5 className="card-name">{product.name}</h5>
                  <div className="card-content">
                    Kích Thước: {product.dimension}
                  </div>
                  <div className="card-content">
                    <NumberFormat
                      value={product.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"VND "}
                      style={{ color: "rgb(238,77,45)" }}
                    />
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default MainPage;
