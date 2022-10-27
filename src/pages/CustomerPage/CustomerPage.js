import React, { useState } from "react";
import ProudctCard from "../../components/ProductCard/ProductCard";
import ProductList from "./ProductList/ProductList";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoGridOutline } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";

const CustomerPage = () => {
  const [isRow, setIsRow] = useState(true);

  const isRowselect = {
    border: "2px solid #144967",
    height: 30,
    padding: 5,
    backgroundColor: "#D9D9D9",
  };
  return (
    <div style={{ width: "100%", padding: "1% 2%" }}>
      <div className="category-container">
        <div className="menu-container">
          <div
            style={isRow ? isRowselect : null}
            onClick={() => setIsRow(true)}>
            <IoGridOutline width={20} />
          </div>
          <div
            onClick={() => setIsRow(false)}
            style={isRow === false ? isRowselect : null}>
            <MdOutlineMenu size={20} />
          </div>
        </div>
      </div>
      <div>
        <select className="product-category" placeholder="category type">
          <option value="accessories" style={{color:"#656464"}}>Accessories</option>
          <option value="clothing" style={{color:"#656464"}}>Clothing</option>
          <option value="bakeryItems" style={{color:"#656464"}}>Bakery Items</option>
          <option value="cosmetics" style={{color:"#656464"}}>Cosmetic</option>
          <option value="giftBoxes" style={{color:"#656464"}}>Gift Boxes</option>
          <option value="other" style={{color:"#656464"}}>Others</option>
        </select>
      </div>
      <br/>
      <ProductList />
    </div>
  );
};

export default CustomerPage;
