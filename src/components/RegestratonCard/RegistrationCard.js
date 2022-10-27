import React from "react";
import "./RegistrationCard.css";
import Profile from "../../assests/images/shop_02.png";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const RegistrationCard = (item) => {

    const navigate = useNavigate();

    return (
        <div className="registration-card-container">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={Profile} className="registration-card-image-container" />
            </div>
            <h5 className="seller-reg-name">{item.item.first_name}</h5>
            <div className="reg-btn-row">
                {item.item.status === 1 ? '' : <button className="reg-accept-btn" onClick={() => navigate(`/registration_request/accept?id=${item.item.id}`)}>
                    <TiTick size={24} />
                    Accept
                </button>}
                {item.item.status === 2 ? '' :
                    <button className="reg-reject-btn" onClick={() => navigate(`/registration_request/reject?id=${item.item.id}`)}>
                        <ImCross size={14} />
                        Reject
                    </button>}
            </div>

            {/*<button className="reg-accept-btn">*/}
            {/*    <IoRemoveCircleOutline size={20} />*/}
            {/*    Accept*/}
            {/*</button>*/}
            {/*<button className="reg-accept-btn">*/}
            {/*    <IoRemoveCircleOutline size={20} />*/}
            {/*    Reject*/}
            {/*</button>*/}

        </div>
    );
};

export default RegistrationCard;
