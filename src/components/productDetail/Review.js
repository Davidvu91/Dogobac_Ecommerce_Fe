import React from "react";
import { Card, Row } from "react-bootstrap";
import "./productDetail.css";

const Review = ({ product }) => {
  console.log("product in review page:", product);
  const reviews = product.review;
  console.log("reviews of a single product:", reviews);

  return (
    <>
      {reviews?.map((review) => (
        <Card style={{ width: "100%" }} className="review-card">
          <Card.Header>{review.rating}</Card.Header>
          <Card.Body>
            <Card.Title>{review.owner.name}</Card.Title>
            <Card.Text>{review.content}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Review;
