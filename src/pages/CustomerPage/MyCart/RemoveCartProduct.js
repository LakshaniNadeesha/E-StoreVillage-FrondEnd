import React from "react";
import "./RemoveCartProduct.css";
import {useNavigate} from "react-router-dom";

const RemoveCartProduct = () => {
    const navigate = useNavigate();

    return (
        <div className="remove-cart-product-main-container">
            <div className="remove-cart-product-row-container">
                <p className="remove-cart-product-p">Are you sure you want to remove this product from cart?</p>
                <div className="remove-cart-product-respond-option">
                    <button className="cart-product-remove">Remove</button>
                    <button className="cart-product-remove-cancel" onClick={() => navigate("/cart")}>Cancel</button>
                </div>

            </div>
        </div>
    );
};

export default RemoveCartProduct;
