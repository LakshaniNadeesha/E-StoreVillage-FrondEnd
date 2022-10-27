import React from "react";
import "./AddGiveaways.css";
import {useNavigate} from "react-router-dom";

const AddGiveaways = () => {
    const navigate = useNavigate();

    return (
        <div className="add-giveaway-main-container">
            <div className="add-giveaway-row-container">
                <div className="add-giveaway">
                    <form className="add-giveaway-form-box">

                        <div className="add-giveaway-full">
                            <div className="add-giveaway-left">
                                <label>Product Name</label>
                                <input type="text" className="add-giveaway-input-text" placeholder="Handmade Necklace" required/>
                            </div>
                            <div className="add-giveaway-right">
                                <label>Shop Name</label>
                                <input type="text" className="add-giveaway-input-text" placeholder="Glamour House" required/>
                            </div>

                        </div>

                        <div className="add-giveaway-full">
                            <div className="add-giveaway-left">
                                <label>Start Date</label>
                                <input type="date" className="add-giveaway-input-text1" required/>
                            </div>
                            <div className="add-giveaway-right">
                                <label>End Date</label>
                                <input type="date" className="add-giveaway-input-text1" required/>
                            </div>

                        </div>

                        <div className="add-giveaway-full">
                            <div className="add-giveaway-left">
                                <label>Description</label>
                                <input type="text" className="add-giveaway-input-text2" placeholder="Delivered" required/>
                            </div>

                        </div>

                        <div className="seller-add-giveaway-btn">
                            <button type="submit" className="add-giveaway-success-btn">Add</button>
                            <button className="add-giveaway-cancel-btn" onClick={() => navigate("/seller_event")}>Cancel</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddGiveaways;
