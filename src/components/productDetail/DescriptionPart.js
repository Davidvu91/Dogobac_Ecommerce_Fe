import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import Comment from "./Comment";

const DescriptionPart = () => {
  return (
    <>
      <Card style={{ width: "100%" }} className="review-card">
        <Card.Header>THÔNG TIN SẢN PHẨM CHI TIẾT</Card.Header>
        <Card.Body>
          <Card.Text>
            My Comment heere: Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </Card.Text>
          <Card.Text>
            My Comment heere: Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </Card.Text>
          <Card.Text>
            My Comment heere: Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </Card.Text>
          <Card.Text>
            My Comment heere: Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </Card.Text>
          <Card.Text>
            My Comment heere: Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Comment />
    </>
  );
};

export default DescriptionPart;
