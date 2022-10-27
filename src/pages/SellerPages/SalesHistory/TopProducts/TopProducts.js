import React from "react";
import "./TopProducts.css";
import Chain from "../../../../assests/images/chain.png";
const TopProducts = () => {
  return (
    <div className="sales-history-top-products-row">
      <div className="sales-history-top-products-sub-row">
        <img src={Chain} alt="" />
        <article>
          <p style={{ color: "#36393d",fontWeight:"bold" }}>Handmade Necklace </p>
          <p style={{ color: "#7B7878", marginTop: 5 }}>52 orders</p>
        </article>
      </div>
      <div className="sales-history-top-products-column">
        <p className="top-product-cart-title">Inventory</p>
        <h5>200</h5>
      </div>
      <div className="sales-history-top-products-column">
        <p className="top-product-cart-title">Sale</p>
        <h5>200</h5>
      </div>
      <div className="sales-history-top-products-column">
        <p className="top-product-cart-title">Price</p>
        <h5>200</h5>
      </div>
      <div className="sales-history-top-products-column">
        <p className="top-product-cart-title">Today</p>
        <h5>200</h5>
      </div>
    </div>
  );
};

export default TopProducts;
