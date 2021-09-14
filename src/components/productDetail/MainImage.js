import React from "react";
import { Card } from "react-bootstrap";

const MainImage = ({ product }) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={product.imageUrl[0]} />
    </Card>
  );
};

export default MainImage;
