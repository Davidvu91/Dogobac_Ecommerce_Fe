import React from "react";
import { useState } from "react";
import { Button, Col, Form, NavLink, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import { authActions } from "../redux/actions/auth.actions";
import { productActions } from "../redux/actions/product.action";
import "./style.css";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState("");
  const [getImage1, setGetImage1] = useState("");
  const [getImage2, setGetImage2] = useState("");
  const [getImage3, setGetImage3] = useState("");
  console.log("uapload anh thanh cong", getImage1);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Setup Data before send to dispatch Action:
  let passData = {
    category: formData.category,
    dimension: formData.dimension,
    imageUrl: [getImage1, getImage2, getImage3],
    description: formData.description,
    material: formData.material,
    name: formData.name,
    price: formData.price,
    status: formData.status,
  };

  console.log("hihi data before pass", passData);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(productActions.createProduct(passData));
  };

  //Upload Image1 functin
  var myWidget1 = window.cloudinary.createUploadWidget(
    {
      cloudName: "dejusl2dv",
      uploadPreset: "dogobac",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        let imageUrl1 = result.info.url;
        setGetImage1(imageUrl1);
      }
    }
  );

  //Upload Image2 functin
  var myWidget2 = window.cloudinary.createUploadWidget(
    {
      cloudName: "dejusl2dv",
      uploadPreset: "dogobac",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        let imageUrl1 = result.info.url;
        setGetImage2(imageUrl1);
      }
    }
  );

  //Upload Image3 functin
  var myWidget3 = window.cloudinary.createUploadWidget(
    {
      cloudName: "dejusl2dv",
      uploadPreset: "dogobac",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        let imageUrl1 = result.info.url;
        setGetImage3(imageUrl1);
      }
    }
  );

  return (
    <div style={{ width: "60%", margin: "auto" }}>
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
            name="description"
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

        {/* upload image below*/}
        <Row className="Url-image-row">
          <Col>
            <button
              id="upload_widget"
              class="cloudinary-button"
              onClick={myWidget1.open}
              className="uploadImg-btn"
            >
              Image 1
            </button>
          </Col>
          <Col>
            <button
              id="upload_widget"
              class="cloudinary-button"
              onClick={myWidget2.open}
              className="uploadImg-btn"
            >
              Image 2
            </button>
          </Col>
          <Col>
            <button
              id="upload_widget"
              class="cloudinary-button"
              onClick={myWidget3.open}
              className="uploadImg-btn"
            >
              Image 3
            </button>
          </Col>
        </Row>
        {/* upload image abow*/}

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
