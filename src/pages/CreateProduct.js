import React from "react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { productActions } from "../redux/actions/product.action";
import "./style.css";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [getImage, setGetImage] = useState([]);
  console.log("uapload anh thanh cong", getImage);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Setup Data before send to dispatch Action:
  let passData = {
    category: formData.category,
    dimension: formData.dimension,
    imageUrl: getImage,
    description: formData.description,
    material: formData.material,
    name: formData.name,
    price: formData.price,
    status: formData.status,
    quantity: formData.quantity,
    shipping: formData.shipping,
  };

  console.log("hihi data before pass", passData);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(productActions.createProduct(passData));
    setFormData({});
    setGetImage([]);
    e.target.category.value = "";
    e.target.dimension.value = "";
    e.target.description.value = "";
    e.target.material.value = "";
    e.target.name.value = "";
    e.target.price.value = "";
    e.target.status.value = "";
    e.target.quantity.value = "";
    e.target.shipping.value = "";
  };

  //Upload Image functin
  var myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dejusl2dv",
      uploadPreset: "dogobac",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        let imageUrl = result.info.url;
        console.log("sigle image", imageUrl);
        setGetImage([...getImage, imageUrl]);
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
            as="textarea"
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

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Category"
            name="category"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Quantity"
            name="quantity"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Shipping"
            name="shipping"
            onChange={handleOnChange}
          />
        </Form.Group>

        {/* upload image below*/}
        <Row className="Url-image-row">
          <Col>
            <button
              type="button"
              id="upload_widget"
              class="cloudinary-button"
              onClick={myWidget.open}
              className="uploadImg-btn"
            >
              Upload Image
            </button>
          </Col>
        </Row>
        {/* upload image abow*/}

        <div className="login-btn">
          <Row>
            <Button
              variant=""
              type="submit"
              className="single-btn"
              onSubmit={handleSubmit}
            >
              Tạo Sản Phẩm
            </Button>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default CreateProduct;
