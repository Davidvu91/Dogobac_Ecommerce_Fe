import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../../redux/actions/order.actions";
import SideBar from "./SideBar";

const ListOfOrder = () => {
  const data = useSelector((state) => state.orderReducer.data);
  const loading = useSelector((state) => state.orderReducer.loading);
  console.log("loading:", loading);
  console.log("data in list of order:", data);
  const orders = data?.data?.data;
  console.log("order list:", orders);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(orderActions.getAllOrder());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h1>...loading</h1>
      ) : (
        <Container>
          <Row className="row-padding">
            <Col lg={2} md={3}>
              {" "}
              <SideBar />
            </Col>
            <Col lg={10} md={9} xs={12}>
              <Row className="row-padding">
                <h3> LIST OF ORDERS: </h3>
              </Row>
              {orders?.map((order) => (
                <Row className="row-padding">
                  <Col>Owner</Col>
                  <Col>{order.amount}</Col>
                  <Col>{order.status}</Col>
                  <Col>{order.createdAt}</Col>
                </Row>
              ))}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ListOfOrder;
