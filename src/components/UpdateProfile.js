import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/actions/user.actions";
import { useHistory } from "react-router-dom";

const UpdateProfile = ({ handleClose, profile }) => {
  console.log("handleclose:", handleClose);
  console.log("profile befor update:", profile);
  const [formData, setFormData] = useState({
    name: profile && profile.name,
    email: profile && profile.email,
    address: profile && profile.address,
  });
  const [getImage, setGetImage] = useState(profile && profile.avataUrl);

  // Xử lý valid phone numbers:
  // 1.Lấy số phone mới từ form:
  const [phones, setPhones] = useState(profile && profile.phone);
  const handlePhoneChange = (e) => {
    setPhones(e.target.value);
  };
  console.log("so phone moi la: ", phones);
  // 2. validate phone numbers:
  let errorMess = {};

  function isVietnamesePhoneNumber(number) {
    let isTrue = /([+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/.test(
      number
    );
    if (!isTrue) {
      errorMess.message = "Số Đt không hợp lệ";
    } else console.log("good job");
  }

  isVietnamesePhoneNumber(phones);
  console.log("errormessage:", errorMess);
  console.log(Object.keys(errorMess).length === 0);

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
    phone: phones,
    avataUrl: getImage,
  };
  console.log("data befor dispatch:", passData);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((Object.keys(errorMess).length === 0) === false) {
      return;
    }
    dispatch(userActions.updateUserInfo(passData, history));
    setFormData({});
    setGetImage([]);
    handleClose();
  };

  return (
    <div style={{ width: "60%", margin: "auto", fontFamily: "Montserrat" }}>
      <Form onSubmit={handleSubmit} className="loginForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Tên hiển thị"
            name="name"
            value={formData.name}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Địa chỉ"
            name="address"
            value={formData.address}
            as="textarea"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Số điện thoại"
            name="phone"
            value={phones}
            onChange={handlePhoneChange}
          />
          <div style={{ color: "red", fontSize: "16" }}>
            {errorMess.message}
          </div>
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
