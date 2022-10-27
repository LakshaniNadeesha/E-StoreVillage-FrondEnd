import React from "react";
import "./ManagerProfile.css";
import profile1 from "../../../assests/images/profile.png";
import { Link, useNavigate } from "react-router-dom";

import { useAuthUser } from 'react-auth-kit'
const ManagerProfile = () => {
    const navigate = useNavigate();
    const auth = useAuthUser()
    return (
        <div className="profile-main-container">
            <div className="profile-row-container">
                <div className="profile-img-container">
                    <h3 className="profile-name">{auth().first_name} {auth().last_name}</h3>
                    <img src={profile1} alt="" className="profile-img" />
                </div>

                <span className="profile-vr"></span>
                <div className="profile-detail-container">
                    <span className="profile-detail-txt">Name -{auth().first_name} {auth().last_name}</span>
                    <span className="profile-detail-txt">
                        E-mail - {auth().email}
                    </span>
                    <span className="profile-detail-txt">Address - {auth().address}</span>
                    <span className="profile-detail-txt">Contact No - {auth().phoneNumber}</span>
                    <div className="profile-manager-edit-button">
                        <button onClick={() => navigate("/managerProfile/managereditprofile")}>
                            Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerProfile;
