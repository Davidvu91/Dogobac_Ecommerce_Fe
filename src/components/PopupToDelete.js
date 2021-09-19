import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PopupToDelete = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p
            style={{
              color: "red",
              border: "none",
              marginBottom: "20",
              marginTop: "20",
              padding: "0",
            }}
          >
            {" "}
            <i>If you chose "Delete", data will be permanently deleted </i>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PopupToDelete;
