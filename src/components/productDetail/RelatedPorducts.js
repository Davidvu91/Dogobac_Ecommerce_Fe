import React, { useEffect } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import NumberFormat from "react-number-format";
// import { useSelector, useDispatch } from "react-redux";
// import { productActions } from "../../redux/actions/product.action";

const RelatedPorducts = ({ loading, product }) => {
  console.log("single Product data:", product);
  let products = product.relatedProduct;
  console.log("related products la:", products);
  // const loading = useSelector((state) => state.productReducer.loading);
  // const data = useSelector((state) => state.productReducer.relatedProducts);
  // const products = data.data?.data;

  // const productId = params.id;
  // // console.log("related products nhan duoc de render:", products);
  // const order = "asc";
  // const sortBy = "price";
  // const limit = 8;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   // dispatch(productActions.getSingleProductById(productId));
  //   dispatch(productActions.getRelatedProduct(productId, order, sortBy, limit));
  // }, []);

  const history = useHistory();
  const handleClickProduct = (productId) => {
    history.push(`/product/${productId}`);
  };

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : (
        <Row>
          {products?.map((product) => (
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
                    <NumberFormat
                      value={product.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"VND"}
                    />
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

export default RelatedPorducts;
