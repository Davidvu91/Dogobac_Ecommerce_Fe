import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { ClipLoader } from "react-spinners";
import MainPage from "../components/MainPage";
import PaginationBar from "../components/PaginationBar";
import SearchBox from "../components/SearchBox";
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
  // const data = useSelector((state) => state.productReducer.data);
  // console.log("List data nhan tu product Reducer:", data);
  // const products = data.data.data.products;
  const products = [
    { name: "Tu ao", price: 10, dimension: 20, id: 1 },
    { name: "giuong", price: 10, dimension: 20, id: 2 },
    { name: "giuong", price: 10, dimension: 20, id: 3 },
    { name: "giuong", price: 10, dimension: 20, id: 4 },
    { name: "giuong", price: 10, dimension: 20, id: 5 },
    { name: "giuong", price: 10, dimension: 20, id: 6 },
    { name: "giuong", price: 10, dimension: 20, id: 7 },
    { name: "giuong", price: 10, dimension: 20, id: 8 },
  ];
  // console.log("Danh sach san pham nhan dc:", products);
  // const totalPage = data.data.data.totalPage;
  const totalPage = 10;
  // console.log("Tong so trang la:", totalPage);
  // const totalProducts = data.data.data.totalProducts;
  // console.log("Tong so san pham la: ", totalProducts);

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
            <MainPage products={products} loading={loading} />
          </Col>
        </Row>
        <hr />

        <Row className="justify-content-center">
          <Col md={6}>
            <PaginationBar
              pageNum={page}
              setPageNum={setPage}
              totalPageNum={totalPage}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
