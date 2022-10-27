import React from "react";
import "./productcard.css";
import Chain from "../../assests/images/chain.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Rating from "react-rating";
import { IoStarOutline} from "react-icons/io5";
import { GrStar } from "react-icons/gr";
import {useNavigate} from "react-router-dom";

const ManagerProductCard = () => {
    const navigate = useNavigate();

    return (
        <div className="cart-container">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={Chain} className="image-container" />
            </div>
            <p className="description">24 in stocks for 3 variants </p>
            <h5 className="product-name">Handmade Necklace </h5>
            <div className="price-container">
                <span className="price">LKR 400.00</span>
                <span className="grand-total">LKR 1250.00</span>
            </div>

            <div className="rating-container">
                <Rating
                    readonly
                    stop={4}
                    initialRating={2}
                    emptySymbol={<IoStarOutline size={27} />}
                    fullSymbol={
                        <GrStar
                            style={{ strokeWidth: "2", stroke: "black" }}
                            color="#FBBC05"
                            size={25}
                        />
                    }
                />
                <button className="yellow-btn" onClick={() => navigate("/manager_products/visit_shop")}>
                    <AiOutlineShoppingCart size={20} />
                    Visit The Shop
                </button>
            </div>
        </div>
    );
};

export default ManagerProductCard;
