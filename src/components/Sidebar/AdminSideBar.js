import React from "react";
import "./Sidebar.css";
import {AiOutlineDislike} from "react-icons/ai";
import {MdOutlineDashboardCustomize} from "react-icons/md";
import {FiUsers, FiTag} from "react-icons/fi";
import {AiFillShop} from "react-icons/ai";
import {TbReportAnalytics} from "react-icons/tb";
import { Link, useParams, useRoutes, useLocation } from "react-router-dom";

const AdminSideBar = () => {
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


                <Link to="/categories">
                    <div className="row-container">
                        <div className="icon-container">
                            <MdOutlineDashboardCustomize
                                size={25}
                                color={
                                    route.pathname.match(/categories/) !== null
                                        ? iconSelectColor
                                        : iconDefaultColor
                                }
                            />
                        </div>
                        <span
                            style={
                                route.pathname.match(/categories/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Categories
            </span>
                    </div>
                </Link>

                <Link to="/manager_products">
                    <div className="row-container">
                        <div className="icon-container">
                            <FiTag
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
              Products
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

                <Link to="/manage_users">
                    <div className="row-container">
                        <FiUsers
                            size={25}
                            color={
                                route.pathname.match(/manage_users/) !== null
                                    ? iconSelectColor
                                    : iconDefaultColor
                            }
                        />
                        <span
                            style={
                                route.pathname.match(/manage_users/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Manage Users
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

                <Link to="/system_report">
                    <div className="row-container">
                        <TbReportAnalytics
                            size={25}
                            color={
                                route.pathname.match(/system_report/) !== null
                                    ? iconSelectColor
                                    : iconDefaultColor
                            }
                        />
                        <span
                            style={
                                route.pathname.match(/system_report/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Reports
            </span>
                    </div>
                </Link>



            </section>
            <div style={{ width: "19vw" }}></div>
        </div>
    );
};

export default AdminSideBar;
