import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import "./Comment.css";

const Comment = () => {
  const [rating, setRating] = useState(1);

  const handleRating = (rate) => {
    console.log("rating:", rate);
    setRating(rate);
    // Some logic
  };
  return (
    <Form className="comment-container">
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
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <div className="comment-bnt-container">
        <Button variant="" type="submit" className="single-btn comment-bnt">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default Comment;
