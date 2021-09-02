import React from "react";
import { useState } from "react";
import { Button, Col, Form, NavLink, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/actions/auth.actions";
import "./style.css";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [formData, setstatFormData] = useState("");

  const handleOnChange = (e) => {
    setstatFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Setup Data before send to dispatch Action:
  let passData = {
    category: formData.category,
    dimension: formData.dimension,
    imageUrl: [formData.imgUrl1, formData.imgUrl2, formData.imgUrl3],
    info: formData.info,
    material: formData.material,
    name: formData.name,
    price: formData.price,
    status: formData.status,
  };

  console.log("hihi data before pass", passData);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.createProduct(passData));
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Form onSubmit={handleSubmit} className="loginForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Tên sản phẩm..."
            name="name"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Kích thước"
            name="dimension"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Chất liệu"
            name="material"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Thông tin"
            name="info"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Giá"
            name="price"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Tình trạng"
            name="status"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Row className="Url-image-row">
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Image Url1"
                name="imgUrl1"
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Image Url2"
                name="imgUrl2"
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Image Url3"
                name="imgUrl3"
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Category"
            name="category"
            onChange={handleOnChange}
          />
        </Form.Group>

        <div className="login-btn">
          <Row>
            <Button variant="" type="submit" className="single-btn">
              Tạo Sản Phẩm
            </Button>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default CreateProduct;
