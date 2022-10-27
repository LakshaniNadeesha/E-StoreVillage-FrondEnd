import React from "react";
import "./Sidebar.css";
import { FiHome, FiTag, FiUpload } from "react-icons/fi";
import { VscRequestChanges, VscCalendar } from "react-icons/vsc";
import {AiOutlineDislike} from "react-icons/ai";
import {
    AiOutlineShoppingCart,
    AiOutlineUser,
    AiFillShop,
} from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { Link, useParams, useRoutes, useLocation } from "react-router-dom";

const ManagerSidebar = () => {
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

                <Link to="/manager_products">
                    <div className="row-container">
                        <div className="icon-container">
                            <FiHome
                                size={25}
                                color={
                                    route.pathname === "/manager_products"
                                        ? iconSelectColor
                                        : iconDefaultColor
                                }
                            />
                        </div>
                        <span
                            style={
                                route.pathname === "/manager_products" ? selectTxtStyle : defaultTxtStyle
                            }>
              Public
            </span>
                    </div>
                </Link>

                <Link to="/shop">
                    <div className="row-container">
                        <div className="icon-container">
                            <AiFillShop
                                size={25}
                                color={
                                    route.pathname.match(/shop/) !== null
                                        ? iconSelectColor
                                        : iconDefaultColor
                                }
                            />
                        </div>
                        <span
                            style={
                                route.pathname.match(/shop/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Shops
            </span>
                    </div>
                </Link>

                <Link to="/manager_events">
                    <div className="row-container">
                        <VscCalendar
                            size={25}
                            color={
                                route.pathname.match(/manager_events/) !== null
                                    ? iconSelectColor
                                    : iconDefaultColor
                            }
                        />
                        <span
                            style={
                                route.pathname.match(/manager_events/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Events
            </span>
                    </div>
                </Link>

                <Link to="/manager_orders">
                    <div className="row-container">
                        <FiUpload
                            size={25}
                            color={
                                route.pathname.match(/manager_orders/) !== null
                                    ? iconSelectColor
                                    : iconDefaultColor
                            }
                        />
                        <span
                            style={
                                route.pathname.match(/manager_orders/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Orders
            </span>
                    </div>
                </Link>

                <Link to="/complaints">
                    <div className="row-container">
                        <AiOutlineDislike
                            size={25}
                            color={
                                route.pathname.match(/complaints/) !== null
                                    ? iconSelectColor
                                    : iconDefaultColor
                            }
                        />
                        <span
                            style={
                                route.pathname.match(/complaints/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Complaints
            </span>
                    </div>
                </Link>

                <Link to="/registration_request">
                    <div className="row-container">
                        <VscRequestChanges
                            size={25}
                            color={
                                route.pathname.match(/registration_request/) !== null
                                    ? iconSelectColor
                                    : iconDefaultColor
                            }
                        />
                        <span
                            style={
                                route.pathname.match(/registration_request/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Registration
            </span>
                    </div>
                </Link>


                <Link to="/managerProfile">
                    <div className="row-container">
                        <AiOutlineUser
                            size={25}
                            color={
                                route.pathname.match(/managerProfile/) !== null
                                    ? iconSelectColor
                                    : iconDefaultColor
                            }
                        />
                        <span
                            style={
                                route.pathname.match(/managerProfile/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Profile
            </span>
                    </div>
                </Link>

            </section>
            <div style={{ width: "19vw" }}></div>
        </div>
    );
};

export default ManagerSidebar;
