import React from "react";
import "./profilepage.css";
import Profile from "../../assests/images/profile-img.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";


const ProfilePage = () => {
  const navigate = useNavigate();
  const auth = useAuthUser()
  console.log(auth());
  return (
    <div className="profile-main-container">
      <div className="profile-row-container">
        <div className="profile-img-container">
          <h3 className="profile-name">{auth().first_name +' '+ auth().last_name}</h3>
          <img src={Profile} alt="" className="profile-img" />
          <p className="profile-loyalty-score">Loyalty Points : 207</p>
        </div>

        <span className="profile-vr"></span>
        <div className="profile-detail-container">
          <span className="profile-detail-txt">Name - {auth().first_name +' '+ auth().last_name}</span>
          <span className="profile-detail-txt">
            E-mail - {auth().email}
          </span>
          <span className="profile-detail-txt">Adddress - {auth().address}</span>
          <span className="profile-detail-txt">Contact No - {auth().phoneNumber}</span>
          <button className="profile-edit-btn"
            onClick={() => navigate("/profile/editprofile")}>
            Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
