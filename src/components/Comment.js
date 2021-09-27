import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { commentActions } from "../redux/actions/comment.actions";
import "./Comment.css";

const Comment = ({ dispatch, productId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleOnChange = (e) => {
    setComment(e.target.value);
  };

  console.log("comment:", comment);

  const handleRating = (rate) => {
    console.log("rating:", rate);
    setRating(rate);
  };
  console.log("rating: ", rating);

  const passData = {
    content: comment,
    rating: rating,
  };
  console.log("pass data:", passData);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(commentActions.createComment(passData, productId));
    // setComment("");
    // setRating("");
  };

  return (
    <Form className="comment-container" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <div>
          <div>
            <h4 className="comment-title">Đánh Giá Của Bạn</h4>
          </div>
          <div>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size="20"
              transition="30"
            />
          </div>
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Nội Dung</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Đánh giá của bạn..."
          onChange={handleOnChange}
        />
      </Form.Group>
      <div className="comment-bnt-container">
        <Button
          onSubmit={handleSubmit}
          variant=""
          type="submit"
          className="single-btn comment-bnt"
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default Comment;
