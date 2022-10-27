import React from "react";
import "./ShopProfile.css";
import Shop from "../../../assests/images/shop_02.png";
import Rating from "react-rating";
import { IoStarOutline, IoMdStar } from "react-icons/io5";
import { GrStar } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";

const ShopProfile = () => {
  const navigate = useNavigate();
  const auth = useAuthUser()
  return (
    <div className="shop-profile-main-container">
      <div className="shop-profile-sub-container">
        <div>
          <div className="give-away-logo-container">
            <img src={Shop} className="shop-profile-img-edit" />
            <p className="shop-name give-away" style={{ width: "137%" }}>
              Glamour House
            </p>
          </div>
        </div>
        <div>
          <div className="shop-profile-ratings-container">
            <p>Followers - 2764</p>
            <Rating
              readonly
              stop={5}
              initialRating={2}
              emptySymbol={<IoStarOutline size={27} />}
              fullSymbol={
                <GrStar
                  style={{ strokeWidth: "2", stroke: "black" }}
                  color="#FBBC05"
                  size={25}
                />
              }
            />
          </div>
          <div className="profile-detail-container" style={{ width: "100%" }}>
            <span className="profile-detail-txt">
              E-mail - {auth().email}
            </span>
            <span className="profile-detail-txt">
              Adddress -  {auth().address}
            </span>
            <span className="profile-detail-txt">
              Contact No - {auth().phoneNumber}
            </span>
            <p>
            {auth().bio}
            </p>

            <div className="myshop-edit-btn">
              <button style={{ bottom: "21%" }} className="shop-profile-edit-btn"
                onClick={() => navigate("/shopProfile/edit_shopProfile")}>
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProfile;
