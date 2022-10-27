import React from "react";
import "./RemoveDiscount.css";
import {useNavigate} from "react-router-dom";

const RemoveDiscount = () => {
    const navigate = useNavigate();

    return (
        <div className="seller-discount-remove-main-container">
            <div className="seller-discount-remove-row-container">
                <p className="remove-discount-p">Are you sure you want to remove this discount?</p>
                <div className="seller-discount-remove-respond-option">
                    <button className="seller-discount-remove">Remove</button>
                    <button className="seller-discount-remove-cancel" onClick={() => navigate("/discounts")}>Cancel</button>
                </div>

            </div>
        </div>
    );
};

export default RemoveDiscount;
