import React, { useState } from "react";
import "./shopcard.css";
import Shop from "../../assests/images/shop_01.png";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineShoppingCart, AiFillShop } from "react-icons/ai";
import Rating from "react-rating";
import { IoStarOutline, IoMdStar } from "react-icons/io5";
import { GrStar } from "react-icons/gr";
import { VscStarEmpty } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const ShopCard = (item) => {
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={Shop} className="shop-image-container" />
      </div>

      <div className="shop-name">{item.item.first_name}</div>
      <p className="shop-description">
        {item.item.description}
      </p>

      <div className="rating-container">
        <Rating
          readonly
          stop={4}
          initialRating={1}
          emptySymbol={<IoStarOutline size={27} />}
          fullSymbol={
            <GrStar
              style={{ strokeWidth: "2", stroke: "black" }}
              color="#FBBC05"
              size={25}
            />
          }
        />
        <button className="yellow-btn" onClick={() => navigate(`/shop/visit_shop?id=${ item.item.id }`)}>
          <AiFillShop size={20} />
          Visit The Shop
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
