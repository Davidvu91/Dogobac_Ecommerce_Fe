import React from "react";
import { Card } from "react-bootstrap";

const Comment = () => {
  return (
    <Card style={{ width: "100%" }} className="review-card">
      <Card.Header>ĐÁNH GIÁ SẢN PHẨM</Card.Header>
      <Card.Body>
        <Card.Text>
          My Comment heere: Some quick example text to build on the card title
          and make up the bulk of the card's content. My Comment heere: Some
          quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Comment;
