import React from "react";
import "./RemoveCategory.css";
import {useNavigate} from "react-router-dom";

const RemoveCategory = () => {
    const navigate = useNavigate();

    return (
        <div className="remove-category-main-container">
            <div className="remove-category-row-container">
                <p className="remove-category-p">Are you sure you want to remove this category from the system?</p>
                <div className="remove-category-respond-option">
                    <button className="remove-category-btn">Remove</button>
                    <button className="remove-category-cancel-btn" onClick={() => navigate("/categories")}>Cancel</button>
                </div>

            </div>
        </div>
    );
};

export default RemoveCategory;
