import React from "react";
import "./RemoveGiveaways.css";
import {useNavigate} from "react-router-dom";

const RemoveGiveaways = () => {
    const navigate = useNavigate();

    return (
        <div className="seller-giveaway-remove-main-container">
            <div className="seller-giveaway-remove-row-container">
                <p className="remove-giveaway-p">Are you sure you want to remove this giveaway?</p>
                <div className="seller-giveaway-remove-respond-option">
                    <button className="seller-giveaway-remove">Remove</button>
                    <button className="seller-giveaway-remove-cancel" onClick={() => navigate("/seller_event")}>Cancel</button>
                </div>

            </div>
        </div>
    );
};

export default RemoveGiveaways;
