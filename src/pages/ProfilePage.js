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
            <div className="profile-content">
              <Card.Title className="profile-name">{profile?.name}</Card.Title>
              <Card.Text>{profile?.email}</Card.Text>
              <Card.Text>{profile?.phone}</Card.Text>
              <Card.Text>{profile?.address}</Card.Text>
              <Button variant="" className="single-btn" onClick={handleShow}>
                Update Profile
              </Button>
            </div>
          </Card>
          {/* MODALS: */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="modal-title">
                Update Your Profile
              </Modal.Title>
            </Modal.Header>

            <UpdateProfile handleClose={handleClose} profile={profile} />
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
