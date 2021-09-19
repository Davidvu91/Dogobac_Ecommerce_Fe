import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./productDetail.css";
import { RatingView } from "react-simple-star-rating";

const Review = ({ product }) => {
  console.log("product in review page:", product);
  const reviews = product.review;
  console.log("reviews of a single product:", reviews);

  return (
    <>
      <Row>
        {" "}
        <h4> REVIEW</h4>
      </Row>
      {reviews?.map((review) => (
        <Card style={{ width: "100%" }} className="review-card">
          <Card.Header style={{ backgroundColor: "rgb(33,37,41)" }}>
            <RatingView ratingValue={review.rating} />
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <Row>
                <Col lg={4} md={4}>
                  <Card.Img
                    src={review.owner.avataUrl}
                    style={{ width: "100%", borderRadius: "50%" }}
                  />
                </Col>
                <Col lg={8} md={8}>
                  {" "}
                  {review.owner.name}
                </Col>
              </Row>
            </Card.Title>
            <Card.Text>{review.content}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Review;
