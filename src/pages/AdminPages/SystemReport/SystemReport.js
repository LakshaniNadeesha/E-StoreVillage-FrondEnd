import React from "react";
import "./SystemReport.css";
import TotalSales from "./TotalSales/TotalSales";
import BarChart from "react-bar-chart";
import { PieChart } from 'react-minimal-pie-chart';
import TotalTopProducts from "./TotalTopProducts/TotalTopProducts";

const SystemReport = () => {
    const topSellingProduct = [{}, {},{}];

    const Label = ["cat","dog","bird"];

    const TotalRevenue = [
        { text: "Jan", value: 200 },
        { text: "Feb", value: 400 },
        { text: "Mar", value: 500 },
        { text: "Apr", value: 300 },
        { text: "May", value: 700 },
        { text: "Jun", value: 800 },
        { text: "Jul", value: 1000 },
        { text: "Aug", value: 400 },
        { text: "Sep", value: 350 },
        { text: "Oct", value: 600 },
        { text: "Nov", value: 400 },
        { text: "Dec", value: 350 },
    ];
    const margin = { top: 20, right: 20, bottom: 30, left: 70 };
    return (
        <div className="admin-total-sales-main-container">

            <TotalSales/>
            <br/>

           <br/>
            <div className="total-sale-chart-container">
                <h3 className="total-sales-chart-title">Report</h3>

                <BarChart
                    ylabel="No of Sales"
                    xlabel="Months"
                    width={1050}
                    height={500}
                    margin={margin}
                    data={TotalRevenue}
                />
            </div>

            <div className="admin-total-sales-second-container">
            <div className="top-products-total-container">
                <h3 className="total-sales-top-product-title">Top Selling Products</h3>
                {topSellingProduct.map((item, index) => (
                    <TotalTopProducts key={index} />
                ))}
            </div>
                <div className="total-sales-analytics">
                    <h3 className="total-sales-analytic-title">Analytics</h3>
                    <PieChart
                        style={{
                            height: "280px",
                            marginTop:"8%"
                        }}
                        data={[
                            { title: 'one',label:"yes", value: 10, color: '#E38627' },
                            { title: 'Two', label:"no", value: 15, color: '#C13C37' },
                            { title: 'Three', label:"yes-no", value: 20, color: '#6A2135' },
                        ]}
                        labelPosition={50}
                        lengthAngle={360}
                        lineWidth={35}
                        paddingAngle={0}
                        radius={50}
                        startAngle={0}
                        viewBoxSize={[100, 100]}
                    />;
                </div>
            </div>



        </div>
    );
};

export default SystemReport;
