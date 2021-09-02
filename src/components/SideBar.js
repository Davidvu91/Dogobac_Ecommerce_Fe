import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./sidebar.css";

const SideBar = () => {
  return (
    <Card className="sidebar-card">
      <ListGroup variant="flush">
        <ListGroup.Item className="sidebar-item">
          Nội Thất Phòng Khách
        </ListGroup.Item>
        <ListGroup.Item className="sidebar-item">
          Nội Thất Phòng Ăn
        </ListGroup.Item>
        <ListGroup.Item className="sidebar-item">
          Nội Thất Phòng Ngủ
        </ListGroup.Item>
        <ListGroup.Item className="sidebar-item">
          Nội Thất Phòng Thờ
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default SideBar;
