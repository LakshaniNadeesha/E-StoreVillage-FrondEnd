import React from "react";
import "./SalesHistory.css";
import TopProducts from "./TopProducts/TopProducts";
import TotalCounts from "./TotalCounts/TotalCounts";
import {GrDocumentDownload} from "react-icons/gr";
import BarChart from "react-bar-chart";

const SalesHistory = () => {
  const topProduct = [{}, {}, {}];

  const REVENUE = [
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
    <div className="sales-history-main-container">
        <div className="report-generate-btn">
            <button><GrDocumentDownload size={20}/>Generate Report</button>
        </div>
        <br/>
      <div className="chart-container">
        <BarChart

          ylabel="No of Sales"
          xlabel="Months"
          width={1050}
          height={500}
          margin={margin}
          data={REVENUE}
        />
      </div>

      <TotalCounts/>

      <h3 className="sales-history-title">Top Products</h3>

      <div className="top-products-container ">
        {topProduct.map((item, index) => (
          <TopProducts key={index} />
        ))}
      </div>

      <h3 className="sales-history-title">Stat Overview</h3>

      <div className="sales-history-stat-container">
        <h3 style={{ marginBottom: "8%" }}>Information about store visits</h3>

        <div className="sales-history-progress-container">
          <h3>Handmade Necklace</h3>
          <div>
            <div
              style={{
                backgroundColor: "#FFC029",
                width: "63%",
              }}></div>
          </div>
          <h3 style={{ textAlign: "right", marginTop: "2%" }}>63%</h3>
        </div>

        <div className="sales-history-progress-container">
          <h3>Handmade Earrings </h3>
          <div>
            <div
              style={{
                backgroundColor: "#FF6B6B",
                width: "38%",
              }}></div>
          </div>
          <h3 style={{ textAlign: "right", marginTop: "2%" }}>38%</h3>
        </div>

        <div className="sales-history-progress-container">
          <h3>Handmade Necklace</h3>
          <div>
            <div
              style={{
                backgroundColor: "#5F27CD",
                width: "55%",
              }}></div>
          </div>
          <h3 style={{ textAlign: "right", marginTop: "2%" }}>55%</h3>
        </div>
      </div>
    </div>
  );
};

export default SalesHistory;
