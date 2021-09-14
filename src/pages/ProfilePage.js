import React, { useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import UpdateProfile from "../components/UpdateProfile";
import { userActions } from "../redux/actions/user.actions";

import "./profile.css";

const ProfilePage = () => {
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);
  console.log("hahaha, user profile:", user);
  let profile = user.data?.data?.user;
  console.log(profile);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("hahhahahahaah");
    dispatch(userActions.getSingleUserInfo());
  }, [dispatch]);
  // MODALS:
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : (
        <>
          <Card className="profileStyle">
            <Card.Img variant="top" src={profile?.avataUrl} />
            <Card.Body className="profile-content">
              <Card.Title>{profile?.name}</Card.Title>
              <Card.Text>{profile?.email}</Card.Text>
              <Card.Text>{profile?.address}</Card.Text>
              <Button variant="" className="single-btn" onClick={handleShow}>
                Update Profile
              </Button>
            </Card.Body>
          </Card>
          {/* MODALS: */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update Your Profile</Modal.Title>
            </Modal.Header>

            <UpdateProfile />
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Close
              </Button>
              {/* <Button variant="dark" onClick={handleClose}>
                Save Changes
              </Button> */}
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

export default ProfilePage;
