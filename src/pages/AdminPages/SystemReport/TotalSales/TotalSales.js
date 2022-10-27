import React from "react";
import "./TotalSales.css";
import { BiUser } from "react-icons/bi";
import { BsFillPrinterFill } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
const TotalSales = () => {
    return (
        <div className="sales-history-report-totals">

            <div>
                <IoBagOutline color="5F27CD" size={25} />
                <div>
                    <p>Stock Products</p>
                    <h3>100+</h3>
                </div>
            </div>
            <div>
                <BiUser color="144967" size={25} />
                <div>
                    <p>Sales Products</p>
                    <h3>190+</h3>
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

export default TotalSales;
