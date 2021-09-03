import React from "react";
import { Button, Card } from "react-bootstrap";
import "./profile.css";

const ProfilePage = () => {
  return (
    <Card className="profileStyle">
      <Card.Img
        variant="top"
        src="https://thelifetank.com/wp-content/uploads/2018/08/avatar-default-icon.png"
      />
      <Card.Body className="profile-content">
        <Card.Title>Tan vo</Card.Title>
        <Card.Text>Email: tanvo123@gamil.com</Card.Text>
        <Card.Text>Address: Quan 7, Tp. HCm</Card.Text>
        <Button variant="" className="single-btn">
          Update Profile
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProfilePage;
