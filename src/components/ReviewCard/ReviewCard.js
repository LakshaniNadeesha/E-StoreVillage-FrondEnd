import React from "react";
import "./ReviewCard.css";
import Profile from "../../assests/images/profile-img.png";

const ReviewCard = (item) => {
  return (
    <div className="review-row-container">
      <div className="review-profile-container">
        <div style={{ width: "129px", height: "129px", objectFit: "contain" }}>
          <img src={Profile} alt="" className="review-profile-img" />
        </div>
        <h4>{item.name}</h4>
      </div>
      <p
        style={{
          fontFamily: "Poppins",
        }}>
      {item.name}
      </p>
    </div>
  );
};

export default ReviewCard;
