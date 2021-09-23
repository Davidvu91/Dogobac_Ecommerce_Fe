import React from "react";
import "./productDetail.css";

const DescriptionPart = ({ product }) => {
  return (
    <>
      <div style={{ width: "100%" }} className="detail-description">
        <div>
          <h4 className="detail-title">Thông Tin Chi Tiết</h4>
        </div>
        <div>
          <p>{product.description}</p>
        </div>
        <p>Giao hàng miễn phí toàn thành phố Vũng Tàu, Bảo hành 5 năm</p>
      </div>
    </>
  );
};

export default DescriptionPart;
