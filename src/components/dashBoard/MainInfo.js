import React from "react";
import { Container, Row } from "react-bootstrap";

import ListProduct from "./ListProduct";

const MainInfo = () => {
  return (
    <Container>
      <Row>
        <ListProduct />
      </Row>
    </Container>
  );
};

export default MainInfo;
