import React from "react";
import "./productcard.css";
import Chain from "../../assests/images/chain.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Rating from "react-rating";
import { IoStarOutline} from "react-icons/io5";
import { GrStar } from "react-icons/gr";
import {useNavigate} from "react-router-dom";

const ManagerProductCard = (item) => {
    const navigate = useNavigate();
    console.log(item.item);
    return (
        <div className="cart-container">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={Chain} className="image-container" />
            </div>
            <p className="description">{item.item.qty} in stocks</p>
            <h5 className="product-name">{item.item.name} </h5>
            <div className="price-container">
                <span className="price">LKR {item.item.price_sale}</span>
                {/* <span className="grand-total">LKR 1250.00</span> */}
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
                <button className="yellow-btn" onClick={() => navigate(`/manager_products/visit_shop?id=${item.item.id}`)}>
                    <AiOutlineShoppingCart size={20} />
                    Visit The Shop
                </button>
            </div>
        </div>
    );
};

export default ManagerProductCard;
