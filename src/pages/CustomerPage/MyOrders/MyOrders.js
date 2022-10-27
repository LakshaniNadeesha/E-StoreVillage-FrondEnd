import React, { useState } from "react";
import "./myorders.css";
import Chain from "../../../assests/images/chain.png";
import Shop from "../../../assests/images/shop_02.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import { useEffect } from "react";
import axios from "axios";

const MyOrders = () => {
  const [data, setData] = useState([])
  const auth = useAuthUser()

  useEffect(() => {
    axios.get("http://localhost:3030/v1/order", {
      user: auth().id
    }, { withCredentials: true, })
      .then((res) => {
        console.log(res);
        setData(res.data.data)
      })
  }, [])

  const navigate = useNavigate();
  return (
    <div className="myorders-main-container">
      <table style={{ width: "100%", borderSpacing: 0 }}>
        <tbody>
          <tr className="orders-table-header ">
            <td
              style={{
                width: "28%",
                padding: "1.5% 2%",
                textAlign: "left",
                borderBottomLeftRadius: 31,
                borderTopLeftRadius: 31,
              }}
              className="order-table-header-txt">
              Order No
            </td>
            <td
              className="order-table-header-txt"
              style={{ width: "16%", textAlign: "center" }}>
              Description
            </td>
            <td
              className="order-table-header-txt"
              style={{ width: "10.8796%", textAlign: "center" }}>
              Quantity
            </td>
            <td
              className="order-table-header-txt"
              style={{ width: "10.1204%", textAlign: "center" }}>
              Amount
            </td>
            <td
              className="order-table-header-txt"
              style={{ width: "10%", textAlign: "center" }}>
              Status
            </td>
            <td
              style={{
                width: "22%",
                textAlign: "center",
                borderBottomRightRadius: 31,
                borderTopRightRadius: 31,
              }}
              className="order-table-header-txt">
              Shop
            </td>
          </tr>
          <div style={{ height: 10 }}></div>

          {data.map((item, indxe) => (
            <>
              <tr style={{ backgroundColor: "white" }}>
                <td
                  style={{
                    width: "28%",
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    padding: "2%",
                  }}>
                  <div className="order-no-row">
                    <span className="order-detail-txt">56384</span>

                    <button
                      className="order-add-review-btn"
                      onClick={() => navigate("/orders/addreview")}>
                      Add a Review
                    </button>
                  </div>
                </td>
                <td style={{ width: "16%", padding: "2%" }}>
                  <div className="order-item-column">
                    <img src={Chain} className="order-item-size" />
                    <p>Home made necklace</p>
                  </div>
                </td>
                <td style={{ width: "10.8796%", padding: "2%" }}>
                  <h3 className="order-detail-txt dark-green">01</h3>
                </td>
                <td style={{ width: "10.1204%", padding: "2%" }}>
                  <h3 className="order-detail-txt dark-green">LKR 400.00</h3>
                </td>
                <td style={{ width: "10%", padding: "2%" }}>
                  <h3 className="order-detail-txt light-green">Delivered</h3>
                </td>
                <td
                  style={{
                    width: "22%",
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    padding: "2%",
                  }}>
                  <div className="order-shop-name">
                    <img src={Shop} className="order-item-size" />
                    <p className="shop-name order-shop-name-txt">
                      Glamour House
                    </p>
                  </div>
                </td>
              </tr>
              <div style={{ height: 20 }}></div>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
