import React from "react";
import "./CreateDiscount.css";
import {useNavigate} from "react-router-dom";

const UpdateDiscount = () => {
    const navigate = useNavigate();

    return (
        <div className="create-discount-main-container">
            <div className="create-discount-row-container">
                <div className="create-discount">
                    <form className="create-discount-form-box">

                        <div className="create-discount-full">
                            <div className="create-discount-left">
                                <label>Product Name</label>
                                <input type="text" className="create-discount-input-text" placeholder="Handmade Necklace" required/>
                            </div>
                            <div className="create-discount-right">
                                <label>Discount Rate (%)</label>
                                <input type="number" className="create-discount-input-text" placeholder="20" required/>
                            </div>

                        </div>

                        <div className="create-discount-full">
                            <div className="create-discount-left">
                                <label>Start Date</label>
                                <input type="date" className="create-discount-input-text1" required/>
                            </div>
                            <div className="create-discount-right">
                                <label>End Date</label>
                                <input type="date" className="create-discount-input-text1" required/>
                            </div>

                        </div>

                        <div className="create-discount-full">
                            <div className="create-discount-left">
                                <label>Description (If Any)</label>
                                <input type="text" className="create-discount-input-text2" placeholder="Delivered"/>
                            </div>

                        </div>

                        <div className="create-discount-button">
                            <button type="submit" className="update-discount-success-btn">Update</button>
                            <button className="create-discount-cancel-btn" onClick={() => navigate("/discounts")}>Cancel</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default UpdateDiscount;
