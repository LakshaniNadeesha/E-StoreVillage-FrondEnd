import React from "react";
import "./DiscountPage.css";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import {AiOutlinePlus} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

const DiscountPage = () => {
    const navigate = useNavigate();
    const discounts = [{}, {}, {}, {}];

  return (
    <div className="discount-main-container">
      <div className="discount-header-row-container">
          <h3 className="discount-title">All Discounts</h3>
          <div className="create-discount-btn">
              <button onClick={() => navigate("/discounts/create_discount")}><AiOutlinePlus size={17}/>
                  Create Discount</button>
          </div>

      </div>

      {discounts.map((item, key) => (
        <div className="discount-main-row" key={key}>
          <div className="discount-sub-row">
              <input type="checkbox" className="discount-checkbox"/>
            <div>
              <p className="dis-name">20% off from all your products</p>
              <p>22 Oct 2022 - 22 Jan 2021</p>
            </div>
          </div>
          <div className="highlight-discount">20%Off</div>
            <div className="discount-buttons">
                <button className="discount-update" onClick={() => navigate("/discounts/update_discount")}>Update</button>
                <button className="discount-remove" onClick={() => navigate("/discounts/remove_discount")}>Remove</button>
            </div>
        </div>
      ))}
    </div>
  );
};

export default DiscountPage;
