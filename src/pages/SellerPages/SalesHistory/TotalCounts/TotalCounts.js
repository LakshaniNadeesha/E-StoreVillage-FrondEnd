import React from "react";
import "./TotalCounts.css";
import { BiUser } from "react-icons/bi";
import { BsFillPrinterFill } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
const TotalCounts = () => {
  return (
    <div className="sales-history-totals">

      <div>
        <IoBagOutline color="5F27CD" size={25} />
        <div>
          <p>Total Sales</p>
          <h3>520</h3>
        </div>
      </div>
      <div>
        <BiUser color="144967" size={25} />
        <div>
          <p>Total Made</p>
          <h3>LKR 50,000</h3>
        </div>
      </div>
      <div>
        <BsFillPrinterFill color="FF6B6B" size={25} />
        <div>
          <p>Orders Completed</p>
          <h3>28</h3>
        </div>
      </div>
    </div>
  );
};

export default TotalCounts;
