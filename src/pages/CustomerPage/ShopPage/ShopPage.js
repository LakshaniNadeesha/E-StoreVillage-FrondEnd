import React, { useState } from "react";
import ShopList from "./ShopList/ShopList";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoGridOutline } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";

const ShopPage = () => {
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
        {/*<button className="category-btn">*/}
        {/*  <p className="category-txt">Category</p>*/}
        {/*  <RiArrowDropDownLine size={30} />*/}
        {/*</button>*/}
      </div>
      <ShopList />
    </div>
  );
};

export default ShopPage;
