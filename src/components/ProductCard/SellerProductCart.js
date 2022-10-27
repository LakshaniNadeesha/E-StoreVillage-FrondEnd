import React from "react";
import "./productcard.css";
import Chain from "../../assests/images/chain.png";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Rating from "react-rating";
import { IoStarOutline, IoMdStar } from "react-icons/io5";
import { GrStar } from "react-icons/gr";
import { VscStarEmpty } from "react-icons/vsc";
import {useNavigate} from "react-router-dom";

const ProductCard = () => {
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
            <div className="btn-row">
                <button className="yellow-btn" onClick={() => navigate("/seller_buy_now")}>
                    <RiShoppingBagLine size={20} />
                    Buy Now
                </button>
                <button className="yellow-btn" onClick={() => navigate("/seller_add_to_cart")}>
                    <AiOutlineShoppingCart size={20} />
                    Add To Cart
                </button>
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
                <button className="yellow-btn" onClick={() => navigate("/visit_shop")}>
                    <AiOutlineShoppingCart size={20} />
                    Visit The Shop
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
