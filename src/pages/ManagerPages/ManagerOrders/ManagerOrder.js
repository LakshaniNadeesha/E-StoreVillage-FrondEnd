import React, { useEffect, useState } from "react";
import "./ManagerOrder.css";
import Chain from "../../../assests/images/chain.png";
import Shop from "../../../assests/images/shop_02.png";
import profile from "../../../assests/images/profile-img.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import axios from "axios";

const ManagerOrder = () => {
    const [data, setData] = useState([])
    const auth = useAuthUser()
  
    useEffect(() => {
      axios.get("http://localhost:3030/v1/order", { withCredentials: true, })
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
                            width: "11.11%",
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
                        style={{ width: "11.11%", textAlign: "center" }}>
                        Product
                    </td>
                    <td
                        className="order-table-header-txt"
                        style={{ width: "11.11%", textAlign: "center" }}>
                        Quantity
                    </td>
                    <td
                        className="order-table-header-txt"
                        style={{ width: "11.11%", textAlign: "center" }}>
                        Price
                    </td>
                    <td
                        className="order-table-header-txt"
                        style={{ width: "11.11%", textAlign: "center" }}>
                        Payment
                    </td>
                    <td
                        className="order-table-header-txt"
                        style={{ width: "11.11%", textAlign: "center" }}>
                        Date
                    </td>
                    <td
                        className="order-table-header-txt"
                        style={{ width: "11.11%", textAlign: "center" }}>
                        Status
                    </td>
                    <td
                        style={{
                            width: "11.11%",
                            textAlign: "center",
                        }}
                        className="order-table-header-txt">
                        Customer
                    </td>
                    <td
                        style={{
                            width: "11.11%",
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
                                    width: "11.11%",
                                    borderTopLeftRadius: 20,
                                    borderBottomLeftRadius: 20,
                                    padding: "2%",
                                }}>
                                <div className="order-no-row">
                                    <span className="order-detail-txt">56384</span>
                                </div>
                            </td>
                            <td style={{ width: "11.11%", padding: "2%" }}>
                                <div className="order-item-column">
                                    <img src={Chain} className="order-item-size" />
                                    <p>Home made necklace</p>
                                </div>
                            </td>
                            <td style={{ width: "11.11%", padding: "2%" }}>
                                <h3 className="order-detail-txt dark-green">01</h3>
                            </td>
                            <td style={{ width: "11.11%", padding: "2%" }}>
                                <h3 className="order-detail-txt dark-green">LKR 400.00</h3>
                            </td>
                            <td style={{ width: "11.11%", padding: "2%" }}>
                                <h3 className="order-detail-txt dark-green">Successful</h3>
                            </td>
                            <td style={{ width: "11.11%", padding: "2%" }}>
                                <h3 className="order-detail-txt dark-green">2022/08/20</h3>
                            </td>
                            <td style={{ width: "11.11%", padding: "2%" }}>
                                <h3 className="order-detail-txt light-green">Delivered</h3>
                            </td>
                            <td
                                style={{
                                    width: "11.11%",
                                    padding: "2%",
                                }}>
                                <div className="order-customer-name">
                                    <img src={profile} className="order-customer-item-size" />
                                    <p className="shop-name order-customer-name-txt">
                                        Sanduni Fernando
                                    </p>
                                </div>
                            </td>
                            <td
                                style={{
                                    width: "11.11%",
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                    padding: "2%",
                                }}>
                                <div className="order-manager-shop-name">
                                    <img src={Shop} className="order-shop-item-size" />
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

export default ManagerOrder;
