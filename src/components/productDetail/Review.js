import React from "react";
import { Card } from "react-bootstrap";
import { RatingView } from "react-simple-star-rating";
import "./Review.css";
import Moment from "react-moment";

const Review = ({ product }) => {
  console.log("product in review page:", product);
  const reviews = product.review;
  console.log("reviews of a single product:", reviews);

  return (
    <div className="review-container">
      <h4 className="review-main-title">Đánh Giá Của Khách Hàng</h4>
      {reviews?.map((review) => (
        <div className="review-card">
          <div className="review-img-box">
            <Card.Img src={review.owner.avataUrl} className="review-image" />
          </div>
          <div className="review-content-box">
            <div className="reivew-name">{review.owner.name}</div>
            <div>
              <div className="star-rating-name">
                <div className="reivew-star">
                  <RatingView ratingValue={review.rating} size="20" />
                </div>

                <div className="reivew-createdAt">
                  {" "}
                  <span>Ngày tạo: </span>
                  <Moment format="YYYY/MM/DD">{review.createdAt}</Moment>
                </div>
              </div>
            </div>
            <p className="review-content">{review.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
