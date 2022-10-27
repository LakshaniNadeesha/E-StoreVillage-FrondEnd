import React from "react";
import "./SellerOrderRemove.css";
import {useNavigate} from "react-router-dom";

const SellerOrderRemove = () => {
    const navigate = useNavigate();

    return (
        <div className="seller-order-remove-main-container">
            <div className="seller-order-remove-row-container">
                <p className="remove-order-p">Are you sure you want to remove this order?</p>
                <div className="seller-order-remove-respond-option">
                    <button className="seller-order-remove">Remove</button>
                    <button className="seller-order-remove-cancel" onClick={() => navigate("/seller_orders")}>Cancel</button>
                </div>

            </div>
        </div>
    );
};

export default SellerOrderRemove;
