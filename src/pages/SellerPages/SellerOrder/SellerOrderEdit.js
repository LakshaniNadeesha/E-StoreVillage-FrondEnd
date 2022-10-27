import React from "react";
import "./SellerOrderEdit.css";
import {useNavigate} from "react-router-dom";
import {MdFileUpload} from "react-icons/md";

const SellerOrderEdit = () => {
    const navigate = useNavigate();

    return (
        <div className="edit-order-main-container">
            <div className="edit-order-row-container">
                <div className="edit-order">
                    <form className="edit-order-form-box">

                        <div className="edit-order-full">
                            <div className="edit-order-left">
                                <label>Order No</label>
                                <input type="text" className="edit-order-input-text" placeholder="56384"/>
                            </div>
                            <div className="edit-order-right">
                                <label>Product</label>
                                <input type="text" className="edit-order-input-text" placeholder="Homemade Necklace"/>
                            </div>

                        </div>

                        <div className="edit-order-full">
                            <div className="edit-order-left">
                                <label>Quantity</label>
                                <input type="number" className="edit-order-input-text" placeholder="01"/>
                            </div>
                            <div className="edit-order-right">
                                <label>Amount</label>
                                <input type="text" className="edit-order-input-text" placeholder="LKR 400.00"/>
                            </div>

                        </div>

                        <div className="edit-order-full">
                            <div className="edit-order-left">
                                <label>Status</label>
                                <select className="seller-order-status-input-text">
                                    <option value="pending" style={{color:"#656464"}}>Pending</option>
                                    <option value="delivered" style={{color:"#656464"}}>Delivered</option>
                                    <option value="canceled" style={{color:"#656464"}}>Canceled</option>
                                </select>

                            </div>
                            <div className="edit-order-right">
                                <label>Customer</label>
                                <input type="text" className="edit-order-input-text" placeholder="Gayani Perera"/>
                            </div>

                        </div>

                        <div className="seller-edit-order-btn">
                            <button type="submit" className="edit-order-success-btn">Update</button>
                            <button className="edit-order-cancel-btn" onClick={() => navigate("/seller_orders")}>Cancel</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default SellerOrderEdit;
