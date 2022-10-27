import React from "react";
import "./EditShopProfile.css";
import {BiArrowBack} from "react-icons/bi";
import Shop from "../../../assests/images/shop_02.png";

import {useNavigate} from "react-router-dom";
const EditShopProfile = () => {
    const navigate = useNavigate();

    return (
        <div className="shop-profile-edit-main-container">
            <div className="shop-profile-edit-row-container">
                <div className="shop-edit-profile-img-container">
                    <BiArrowBack className="back-arrow" size={30} style={{marginRight:"80%"}} onClick={() => navigate("/shopProfile")}/>
                    <img src={Shop} alt="" className="shop-profile-img" />
                    <p className="change-shop-profile-picture" style={{fontSize:"15px"}}>Change Profile Picture</p>
                </div>

                <span className="shop-profile-vr"></span>
                <div className="edit-shop-profile-detail-container">

                    <span className="edit-shop-profile-span">Shop Name</span>
                    <input type="text" className="edit-shop-input-text" placeholder="Glamour House"/>

                    <span className="edit-shop-profile-span">No of Followers</span>
                    <input type="number" className="edit-shop-input-text" placeholder="2764"/>

                    <span className="edit-shop-profile-span">E-mail</span>
                    <input type="email" className="edit-shop-input-text" placeholder="glamourhouse@gmail.com"/>

                    <span className="edit-shop-profile-span">Address</span>
                    <input type="text" className="edit-shop-input-text" placeholder="No:04, Park Road,colombo"/>

                    <span className="edit-shop-profile-span">Contact No</span>
                    <input type="tel" className="edit-shop-input-text" placeholder="076-2563142"/>

                    <span className="edit-shop-profile-span">Description</span>
                    <input type="text" className="edit-shop-input-text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              accumsan ipsum vitae nisi sagittis venenatis. Praesent nec orci et
              urna ullamcorper sollicitudin ut in"/>



                    <button className="shop-profile-save-btn">Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default EditShopProfile;
