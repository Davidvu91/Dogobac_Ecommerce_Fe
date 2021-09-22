import React from "react";
import { ListGroup, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userActions } from "../../redux/actions/user.actions";
import "./SideBar.css";

const SideBar = () => {
  const dispatch = useDispatch();
  const handleGetListUsers = (e) => {
    dispatch(userActions.getAllUsers());
  };

  return (
    <Navbar className="sidebar-card mt-5">
      <ListGroup variant="flush">
        <ListGroup.Item className="sidebar-icon">
          <Nav.Link
            as={Link}
            to="/admin/dashboard"
            className="dash-board-link dash-board-header"
          >
            <i class="fas fa-tasks"></i>
            <span> Dash Board </span>
          </Nav.Link>
        </ListGroup.Item>

        <ListGroup.Item className="sidebar-item">
          <Nav.Link as={Link} to="/admin/profile" className="dash-board-link">
            Admin Profile
          </Nav.Link>
        </ListGroup.Item>

        <ListGroup.Item className="sidebar-item">
          <Nav.Link
            as={Link}
            to="/auth/listUsers"
            className="dash-board-link"
            onClick={handleGetListUsers}
          >
            List Of Users
          </Nav.Link>
        </ListGroup.Item>

        <ListGroup.Item className="sidebar-item">
          <Nav.Link as={Link} to="/auth/listOrders" className="dash-board-link">
            List of Orders
          </Nav.Link>
        </ListGroup.Item>

        <ListGroup.Item className="sidebar-item">
          <Nav.Link as={Link} to="/auth/create" className="dash-board-link">
            Create Products
          </Nav.Link>
        </ListGroup.Item>
      </ListGroup>
    </Navbar>
  );
};

export default SideBar;
