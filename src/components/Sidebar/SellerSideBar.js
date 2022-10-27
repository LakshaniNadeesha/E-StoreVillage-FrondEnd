import React from "react";
import "./Sidebar.css";
import { FiHome, FiTag, FiUpload } from "react-icons/fi";
import { VscSettingsGear, VscCalendar } from "react-icons/vsc";
import {
    AiOutlineShoppingCart,
    AiOutlineUser,
    AiFillShop, AiOutlineQuestionCircle,
} from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { Link, useParams, useRoutes, useLocation } from "react-router-dom";

const SellerSidebar = () => {
    const route = useLocation();

    const defaultTxtStyle = {
        color: "black",
        fontWeight: "normal",
        fontSize: 15,
    };

    const selectTxtStyle = { color: "#144967", fontWeight: "bold", fontSize: 20 };

    const iconDefaultColor = "black";
    const iconSelectColor = "#144967";

    return (
        <div>
            <section className="sidebar-container">

                <Link to="/myshop">
                    <div className="row-container">
                        <div className="icon-container">
                            <FiHome
                                size={25}
                                color={
                                    route.pathname === "/myshop"
                                        ? iconSelectColor
                                        : iconDefaultColor
                                }
                            />
                        </div>
                        <span
                            style={
                                route.pathname === "/myshop" ? selectTxtStyle : defaultTxtStyle
                            }>
              My Shop
            </span>
                    </div>
                </Link>

                <Link to="/seller_product">
                    <div className="row-container">
                        <div className="icon-container">
                            <FiTag
                                size={25}
                                color={
                                    route.pathname.match(/seller_product/) !== null
                                        ? iconSelectColor
                                        : iconDefaultColor
                                }
                            />
                        </div>
                        <span
                            style={
                                route.pathname.match(/seller_product/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              My Products
            </span>
                    </div>
                </Link>

                <Link to="/seller_orders">
                    <div className="row-container">
                        <FiUpload
                            size={25}
                            color={
                                route.pathname.match(/seller_orders/) !== null
                                    ? iconSelectColor
                                    : iconDefaultColor
                            }
                        />
                        <span
                            style={
                                route.pathname.match(/seller_orders/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              My Orders
            </span>
                    </div>
                </Link>

                <Link to="/seller_event">
                    <div className="row-container">
                        <VscCalendar
                            size={25}
                            color={
                                route.pathname.match(/seller_event/) !== null
                                    ? iconSelectColor
                                    : iconDefaultColor
                            }
                        />
                        <span
                            style={
                                route.pathname.match(/seller_event/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Events
            </span>
                    </div>
                </Link>
                <Link to="/discounts">
                    <div className="row-container">
                        <p
                            style={{
                                color:
                                    route.pathname.match(/discounts/) !== null
                                        ? iconSelectColor
                                        : iconDefaultColor,

                                fontWeight:
                                    route.pathname.match(/discounts/) !== null
                                        ? "bold"
                                        : "normal",
                                fontSize: 25,
                            }}>
                            %
                        </p>
                        <span
                            style={
                                route.pathname.match(/discounts/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Discounts
            </span>
                    </div>
                </Link>

                <Link to="/salesHistory">
                    <div className="row-container">
                        <BsPencilSquare
                            size={25}
                            color={
                                route.pathname.match(/salesHistory/) !== null
                                    ? iconSelectColor
                                    : iconDefaultColor
                            }
                        />
                        <span
                            style={
                                route.pathname.match(/salesHistory/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Sales History
            </span>
                    </div>
                </Link>
                <Link to="/shopProfile">
                    <div className="row-container">
                        <AiOutlineUser
                            size={25}
                            color={
                                route.pathname.match(/shopProfile/) !== null
                                    ? iconSelectColor
                                    : iconDefaultColor
                            }
                        />
                        <span
                            style={
                                route.pathname.match(/shopProfile/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Shop Profile
            </span>
                    </div>
                </Link>

                <Link to="/help">
                    <div className="row-container">
                        <AiOutlineQuestionCircle
                            size={25}
                            color={
                                route.pathname.match(/help/) !== null
                                    ? iconSelectColor
                                    : iconDefaultColor
                            }
                        />
                        <span
                            style={
                                route.pathname.match(/help/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Help
            </span>
                    </div>
                </Link>


            </section>
            <div style={{ width: "19vw" }}></div>
        </div>
    );
};

export default SellerSidebar;
