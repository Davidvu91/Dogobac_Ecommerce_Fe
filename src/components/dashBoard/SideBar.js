import React from "react";
import { ListGroup, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userActions } from "../../redux/actions/user.actions";

const SideBar = () => {
  const dispatch = useDispatch();
  const handleGetListUsers = (e) => {
    dispatch(userActions.getAllUsers());
  };

  return (
    <Navbar className="sidebar-card">
      <ListGroup variant="flush">
        <ListGroup.Item className="sidebar-item">
          <Nav.Link as={Link} to="/" className="dash-board-link">
            <i class="fas fa-tachometer-alt fa-3x"></i>
          </Nav.Link>
        </ListGroup.Item>

        <ListGroup.Item className="sidebar-item">
          <Nav.Link as={Link} to="/auth/profile" className="dash-board-link">
            Admin Profile
          </Nav.Link>
        </ListGroup.Item>

        <ListGroup.Item className="sidebar-item">
          <Nav.Link as={Link} to="/auth/create" className="dash-board-link">
            Create Products
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
          <Nav.Link as={Link} to="/" className="dash-board-link">
            List of Orders
          </Nav.Link>
        </ListGroup.Item>
      </ListGroup>
    </Navbar>
  );
};

export default SideBar;
