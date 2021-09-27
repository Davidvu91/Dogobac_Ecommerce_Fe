import React, { useEffect, useState } from "react";
import { Row, Button, Container, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import SideBar from "../components/dashBoard/SideBar";
import { productActions } from "../redux/actions/product.action";

const EditProduct = () => {
  const params = useParams();
  const productId = params.productId;
  console.log("productId to Edit:", productId);
  const dispatch = useDispatch();

  const singleProduct = useSelector((state) => state.productReducer.data);
  console.log("single product to update:", singleProduct);
  const product = singleProduct?.data?.data;
  console.log("single product info:", product);

  const [formData, setFormData] = useState({
    catagory: product && product.category,
    dimension: product && product.dimension,
    description: product && product.description,
    material: product && product.material,
    name: product && product.name,
    price: product && product.price,
    status: product && product.status,
    quantity: product && product.quantity,
    shipping: product && product.shipping,
  });
  const [getImage, setGetImage] = useState(product && product.imageUrl);

  useEffect(() => {
    if (product) {
      setFormData({
        catagory: product && product.category,
        dimension: product && product.dimension,
        description: product && product.description,
        material: product && product.material,
        name: product && product.name,
        price: product && product.price,
        status: product && product.status,
        quantity: product && product.quantity,
        shipping: product && product.shipping,
      });
    }
  }, [product]);

  useEffect(() => {
    dispatch(productActions.getSingleProductById(productId));
  }, [dispatch, productId]);

  console.log("init formData:", formData);
  // Get value of form
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
        setGetImage([...getImage, imageUrl]);
      }
    }
  );

  // Config Data before send to dispatch Action:

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

  console.log("update info before dispatch:", passData);

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(productActions.upadateSingleProduct(productId, passData, history));
    setFormData({});
    setGetImage([]);
  };

  return (
    <Container>
      <Row>
        <Col lg={2} md={3}>
          <SideBar />
        </Col>
        <Col lg={10} md={9}>
          <Form onSubmit={handleSubmit} className="loginForm">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Tên sản phẩm..."
                name="name"
                value={formData.name}
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Kích thước"
                name="dimension"
                value={formData.dimension}
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Chất liệu"
                name="material"
                value={formData.material}
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Thông tin"
                name="description"
                value={formData.description}
                as="textarea"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Giá"
                name="price"
                value={formData.price}
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Tình trạng"
                name="status"
                value={formData.status}
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Category"
                name="category"
                value={formData.category}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Shipping"
                name="shipping"
                value={formData.shipping}
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
                  Update Your Product
                </Button>
              </Row>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProduct;
