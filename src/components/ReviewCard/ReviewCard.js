import React from "react";
import "./ReviewCard.css";
import Profile from "../../assests/images/profile-img.png";

const ReviewCard = () => {
  return (
    <div className="review-row-container">
      <div className="review-profile-container">
        <div style={{ width: "129px", height: "129px", objectFit: "contain" }}>
          <img src={Profile} alt="" className="review-profile-img" />
        </div>
        <h4>Sanduni Fernando</h4>
      </div>
      <p
        style={{
          fontFamily: "Poppins",
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan
        ipsum vitae nisi sagittis venenatis. Praesent nec orci et urna
        ullamcorper sollicitudin ut in dolor. Nunc tempus urna sit amet porta
        consequat. Nunc vitae lectus felis.
      </p>
    </div>
  );
};

export default ReviewCard;
