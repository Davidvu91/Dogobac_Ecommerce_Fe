import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";
import "./Chart.css";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/actions/user.actions";
import { ClipLoader } from "react-spinners";

const ChartUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userReducer.chartData);
  const loading = useSelector((state) => state.userReducer.loading);

  console.log("data in chartpage: ", data);
  console.log("loading in chart page:", loading);

  const users = data?.data?.data;
  const formatedDates = data?.data?.formatedDates;
  console.log("amount array in chartpage:", users);
  console.log("date in chart page:", formatedDates);

  useEffect(() => {
    dispatch(userActions.getAmountUserOf7Day());
  }, [dispatch]);

  // //Get 7 latest days form now
  // const days = [...Array(7)].map((_, i) => {
  //   const d = new Date();
  //   d.setDate(d.getDate() - i);
  //   return d;
  // });
  // console.log("7 days ago:", days);
  // // Format dates before use:
  // let formatedDates = [];
  // for (let i = 0; i < days.length; i++) {
  //   formatedDates.push(days[i].toLocaleDateString("en-US"));
  // }
  // console.log("formated dates: ", formatedDates);

  // // Set up fake data for the chart
  // const users = [12, 35, 48, 55, 65, 78, 135];

  // Set up bars colors array:
  const colors = [
    "rgb(137,196,254)",
    "rgb(1,112,254)",
    "rgb(137,196,254)",
    "rgb(1,112,254)",
    "rgb(137,196,254)",
    "rgb(1,112,254)",
    "rgb(137,196,254)",
  ];

  return (
    <Container className="chart-user-container">
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : (
        <Row className="chart-user-row">
          <Col lg={2} md={3}>
            <SideBar />
          </Col>
          <Col lg={10} md={9}>
            <div className="chart-user-chart-content mt-5">
              <h3 className="chart-user-title">
                {" "}
                User Growth Rate in 7 latest dates
              </h3>
              <div className="chart-user-chart">
                <Bar
                  data={{
                    labels: [
                      formatedDates[6],
                      formatedDates[5],
                      formatedDates[4],
                      formatedDates[3],
                      formatedDates[2],
                      formatedDates[1],
                      formatedDates[0],
                    ],
                    datasets: [
                      {
                        label: "New Registers ",
                        backgroundColor: [
                          colors[0],
                          colors[1],
                          colors[2],
                          colors[3],
                          colors[4],
                          colors[5],
                          colors[6],
                        ],
                        data: [
                          users[0],
                          users[1],
                          users[2],
                          users[3],
                          users[4],
                          users[5],
                          users[6],
                        ],
                      },
                    ],
                  }}
                  options={{
                    legend: { display: false },
                    title: {
                      display: false,
                      text: "Register",
                    },
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ChartUser;
