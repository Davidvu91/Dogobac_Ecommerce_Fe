import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../../redux/actions/order.actions";
import SideBar from "./SideBar";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
import { ClipLoader } from "react-spinners";

const ListOfOrder = () => {
  const [statusChange, setStatusChange] = useState("paid");
  const data = useSelector((state) => state.orderReducer.data);
  const loading = useSelector((state) => state.orderReducer.loading);
  console.log("loading:", loading);
  console.log("data in list of order:", data);
  const orders = data?.data?.data;
  console.log("order list:", orders);
  const totalOrder = data?.data?.totalOrder;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(orderActions.getAllOrder());
  }, [dispatch]);

  const handleUpdateOrder = (orderId) => {
    setStatusChange("paid");
    console.log("statusChange: ", statusChange);
    const passData = { status: statusChange };
    console.log("orderId: ", orderId);
    console.log("passDta:", passData);
    dispatch(orderActions.updateStatusOfOrder(orderId, passData));
  };

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : (
        <Container
          className="list-order-container mt-5"
          style={{ fontFamily: "Montserrat" }}
        >
          <Row className="row-padding">
            <Col lg={2} md={3}>
              {" "}
              <SideBar />
            </Col>
            <Col lg={10} md={9} xs={12}>
              <Row className="row-padding">
                <h3> LIST OF ORDERS: {totalOrder} </h3>
              </Row>
              {orders?.map((order) => (
                <Row
                  className="row-padding"
                  style={{
                    backgroundColor: "rgb(245,245,245)",
                    paddingTop: "30px",
                  }}
                >
                  <Col lg={10} md={10}>
                    <Row>
                      <Col>{order.owner.name}</Col>
                      <Col>{order.owner.address}</Col>
                      <Col style={{ color: "red" }}>
                        <NumberFormat
                          value={order.amount}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"VND "}
                        />
                      </Col>
                      <Col>{order.status}</Col>
                      <Col>
                        <Moment format="YYYY/MM/DD">{order.createdAt}</Moment>
                      </Col>
                    </Row>
                  </Col>

                  <Col lg={2} md={2}>
                    <Row>
                      <Col lg={3} md={3}>
                        <Button
                          variant=""
                          onClick={() => {
                            handleUpdateOrder(order._id);
                          }}
                        >
                          <i class="fas fa-edit"></i>
                        </Button>
                      </Col>
                      <Col lg={3} md={3}>
                        <Button variant="">
                          <i class="fas fa-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  </Col>
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
