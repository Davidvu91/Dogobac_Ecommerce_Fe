import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

import "./profile.css";

const ProfilePage = () => {
  const loading = useSelector((state) => state.authReducer.loading);
  const user = useSelector((state) => state.authReducer.user);
  console.log("hahaha, user profile:", user);
  let profile = user.user;
  console.log(profile);

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : (
        <Card className="profileStyle">
          <Card.Img variant="top" src={profile.avataUrl} />
          <Card.Body className="profile-content">
            <Card.Title>{profile.name}</Card.Title>
            <Card.Text>{profile.email}</Card.Text>
            <Card.Text>{profile.address}</Card.Text>
            <Button variant="" className="single-btn">
              Update Profile
            </Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default ProfilePage;
