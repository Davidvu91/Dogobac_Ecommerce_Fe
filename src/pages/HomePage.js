import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CarouselPart from "../components/Carousel";
import MainPage from "../components/MainPage";
import PaginationBar from "../components/PaginationBar";
import SearchBox from "../components/SearchBox";
import Testimonial from "../components/Testimonial";
import { productActions } from "../redux/actions/product.action";
import "./style.css";

const HomePage = () => {
  const order = "asc";
  const sortBy = "price";
  const limit = 8;
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const loading = useSelector((state) => state.productReducer.loading);
  const data = useSelector((state) => state.productReducer.data);
  console.log("List data nhan tu product Reducer:", data);

  const products = data.data?.data?.products;
  console.log(products);

  const totalPage =
    data.data !== undefined &&
    data.data.data !== undefined &&
    data.data.data.totalPage;

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchInput);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productActions.getAllProducts(order, sortBy, limit, page, search));
  }, [dispatch, order, sortBy, limit, page, search]);

  return (
    <>
      <Row>
        <Col lg={12} md={12} xs={12}>
          <CarouselPart />
        </Col>
      </Row>

      <Container>
        <Row style={{ justifyContent: "center" }} className="row-padding">
          <Col lg={6} md={6} xs={12}>
            <SearchBox
              loading={loading}
              searchInput={searchInput}
              handleSearchChange={handleSearchInputChange}
              handleSubmit={handleSubmit}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} xs={12} className="row-padding">
            {products ? (
              <MainPage products={products} loading={loading} />
            ) : (
              <h1>Loading...</h1>
            )}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            <PaginationBar
              pageNum={page}
              setPageNum={setPage}
              totalPageNum={totalPage}
            />
          </Col>
        </Row>
        <hr />
        <Row className=" row-padding ">
          <Col>
            {" "}
            <Testimonial />{" "}
          </Col>
        </Row>
        <br /> <br />
      </Container>
    </>
  );
};

export default HomePage;
