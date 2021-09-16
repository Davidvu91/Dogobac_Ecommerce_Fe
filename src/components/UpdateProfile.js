import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/actions/user.actions";

const UpdateProfile = () => {
  const [formData, setFormData] = useState({});
  const [getImage, setGetImage] = useState("");

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        setGetImage(imageUrl);
      }
    }
  );

  // Config data before dispatch:
  let passData = {
    name: formData.name,
    email: formData.email,
    address: formData.address,
    phone: formData.phone,
    avataUrl: getImage,
  };
  console.log("data befor dispatch:", passData);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userActions.updateUserInfo(passData));
    setFormData({});
    setGetImage([]);
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.address.value = "";
    e.target.phone.value = "";
  };

  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <Form onSubmit={handleSubmit} className="loginForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Tên hiển thị"
            name="name"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Địa chỉ"
            name="address"
            as="textarea"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="number"
            placeholder="Số điện thoại"
            name="phone"
            onChange={handleOnChange}
          />
        </Form.Group>

        {/* upload avata below*/}
        <Row className="Url-image-row">
          <Col>
            <button
              type="button"
              id="upload_widget"
              class="cloudinary-button"
              onClick={myWidget.open}
              className="uploadImg-btn"
            >
              Change Avata
            </button>
          </Col>
        </Row>
        {/* upload avata abow*/}

        <div className="login-btn">
          <Row>
            <Button
              variant=""
              type="submit"
              className="single-btn"
              onSubmit={handleSubmit}
            >
              Confirm Change
            </Button>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default UpdateProfile;
