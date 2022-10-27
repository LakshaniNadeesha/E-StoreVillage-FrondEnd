import React from "react";
import "./sellerorder.css";
import Chain from "../../../assests/images/chain.png";
import Shop from "../../../assests/images/shop_02.png";
import Profile2 from "../../../assests/images/profile-img1.png";
import { Link, useNavigate } from "react-router-dom";

const SellerOrder = () => {
    const orders = [{}, {}, {}, {}];

    const navigate = useNavigate();
    return (
        <div className="myorders-main-container">
            <table style={{ width: "100%", borderSpacing: 0 }}>
                <tbody>
                <tr className="orders-table-header ">
                    <td
                        style={{
                            width: "14.28%",
                            paddingLeft:"12%",
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
                        style={{ width: "14.28%", textAlign: "center" }}>
                        Product
                    </td>
                    <td
                        className="order-table-header-txt"
                        style={{ width: "14.28%", textAlign: "center" }}>
                        Quantity
                    </td>
                    <td
                        className="order-table-header-txt"
                        style={{ width: "14.28%", textAlign: "center" }}>
                        Amount
                    </td>
                    <td
                        className="order-table-header-txt"
                        style={{ width: "14.28%", textAlign: "center" }}>
                        Status
                    </td>
                    <td
                        className="order-table-header-txt"
                        style={{ width: "14.28%", textAlign: "center" }}>
                        Customer
                    </td>

                    <td
                        style={{
                            width: "14.3%",
                            textAlign: "center",
                            borderBottomRightRadius: 31,
                            borderTopRightRadius: 31,
                        }}
                        className="order-table-header-txt">
                        Option
                    </td>
                </tr>
                <div style={{ height: 10 }}></div>

                {orders.map((item, index) => (
                    <>
                        <tr style={{ backgroundColor: "white" }}>
                            <td
                                style={{
                                    width: "14.28%",
                                    borderTopLeftRadius: 20,
                                    borderBottomLeftRadius: 20,
                                    paddingLeft:"12%",
                                    padding: "2%",
                                }}>
                                <div className="order-no-row">
                                    <span className="order-detail-txt">56384</span>
                                </div>
                            </td>
                            <td style={{ width: "14.28%", padding: "2%" }}>
                                <div className="seller-order-item-column">
                                    <img src={Chain} className="order-item-size" />
                                    <p>Homemade Necklace</p>
                                </div>
                            </td>
                            <td style={{ width: "14.28%", padding: "2%" }}>
                                <h3 className="order-detail-txt dark-green">01</h3>
                            </td>
                            <td style={{ width: "14.28%", padding: "2%" }}>
                                <h3 className="order-detail-txt dark-green">LKR 400.00</h3>
                            </td>
                            <td style={{ width: "14.28%", padding: "2%" }}>
                                <h3 className="order-detail-txt light-green">Delivered</h3>
                            </td>

                            <td style={{width: "14.28%", padding: "2%"}}>
                                <div className="seller-order-customer-name">
                                    <img src={Profile2} className="order-item-size" />
                                    <p className="shop-name order-customer-name-txt">
                                        Gayani Perera
                                    </p>
                                </div>
                            </td>
                            <td
                                style={{
                                    width: "14.3%",
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                    padding: "2%",
                                }}>
                                <div className="seller-order-respond-option">
                                    <button className="order-edit" onClick={() => navigate("/seller_order/edit_order")}>Edit</button>
                                    <br/>
                                    <button className="order-remove" onClick={() => navigate("/seller_order/remove_order")}>Remove</button>
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

export default SellerOrder;
