import React from "react";
import { Card, Row } from "react-bootstrap";
import "./productDetail.css";

const Review = () => {
  return (
    <>
      <Card style={{ width: "100%" }} className="review-card">
        <Card.Header>Star</Card.Header>
        <Card.Body>
          <Card.Title>Customer Name</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "100%" }} className="review-card">
        <Card.Header>Star</Card.Header>
        <Card.Body>
          <Card.Title>Customer Name</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "100%" }} className="review-card">
        <Card.Header>Star</Card.Header>
        <Card.Body>
          <Card.Title>Customer Name</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Review;
