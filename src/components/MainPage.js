import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./mainpage.css";

const MainPage = () => {
  return (
    <Row>
      <Col lg={3} md={6} xs={12} className="home-card">
        <Card
          as={Link}
          to="/auth/login"
          style={{
            textDecoration: "none",
            color: "black",
            textAlign: "center",
          }}
        >
          <Card.Img
            variant="top"
            src="https://image.prntscr.com/image/tUX8aaQ2SWK8Su64vMMNvQ.jpg"
          />
          <Card.Body>
            <Card.Title>Ten San Pham</Card.Title>
            <Card.Text>Kich thuoc</Card.Text>
            <Button variant="" className="single-btn">
              2.700.000đ
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={3} md={6} xs={12} className="home-card">
        <Card
          as={Link}
          to="/auth/login"
          style={{
            textDecoration: "none",
            color: "black",
            textAlign: "center",
          }}
        >
          <Card.Img
            variant="top"
            src="https://image.prntscr.com/image/tUX8aaQ2SWK8Su64vMMNvQ.jpg"
          />
          <Card.Body>
            <Card.Title>Ten San Pham</Card.Title>
            <Card.Text>Kich thuoc</Card.Text>
            <Button variant="" className="single-btn">
              2.700.000đ
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={3} md={6} xs={12} className="home-card">
        <Card
          as={Link}
          to="/auth/login"
          style={{
            textDecoration: "none",
            color: "black",
            textAlign: "center",
          }}
        >
          <Card.Img
            variant="top"
            src="https://image.prntscr.com/image/tUX8aaQ2SWK8Su64vMMNvQ.jpg"
          />
          <Card.Body>
            <Card.Title>Ten San Pham</Card.Title>
            <Card.Text>Kich thuoc</Card.Text>
            <Button variant="" className="single-btn">
              2.700.000đ
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={3} md={6} xs={12} className="home-card">
        <Card
          as={Link}
          to="/auth/login"
          style={{
            textDecoration: "none",
            color: "black",
            textAlign: "center",
          }}
        >
          <Card.Img
            variant="top"
            src="https://image.prntscr.com/image/tUX8aaQ2SWK8Su64vMMNvQ.jpg"
          />
          <Card.Body>
            <Card.Title>Ten San Pham</Card.Title>
            <Card.Text>Kich thuoc</Card.Text>
            <Button variant="" className="single-btn">
              2.700.000đ
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MainPage;
