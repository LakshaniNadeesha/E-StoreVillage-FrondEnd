import React from "react";
import "./TotalTopProducts.css";
import Chain from "../../../../assests/images/chain.png";
import Rating from "react-rating";
import {IoStarOutline} from "react-icons/io5";
import {GrStar} from "react-icons/gr";

const TotalTopProducts = () => {
    return (
        <div className="total-history-top-products-row">
            <div className="total-history-top-products-sub-row">
                <img src={Chain} alt="" />
            </div>
            <div className="total-history-top-products-column">
                <p className="total-top-product-product-name">Handmade Necklace</p>
                <div className="product-rating-container">
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
                </div>
                <p className="total-top-product-product-price">LKR 350.00</p>

            </div>
        </div>
    );
};

export default TotalTopProducts;
