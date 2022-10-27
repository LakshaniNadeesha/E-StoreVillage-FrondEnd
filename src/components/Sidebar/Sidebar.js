import React from "react";
import "./Sidebar.css";
import { FiHome, FiTag, FiUpload } from "react-icons/fi";
import { VscSettingsGear, VscCalendar } from "react-icons/vsc";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiFillShop,AiOutlineQuestionCircle
} from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { Link, useParams, useRoutes, useLocation } from "react-router-dom";

const Sidebar = () => {
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

        <Link to="/product">
          <div className="row-container">
            <div className="icon-container">
              <FiTag
                size={25}
                color={
                  route.pathname.match(/product/) !== null
                    ? iconSelectColor
                    : iconDefaultColor
                }
              />
            </div>
            <span
              style={
                route.pathname.match(/product/) !== null
                  ? selectTxtStyle
                  : defaultTxtStyle
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
                  route.pathname === "/shop"
                    ? iconSelectColor
                    : iconDefaultColor
                }
              />
            </div>
            <span
              style={
                route.pathname === "/shop" ? selectTxtStyle : defaultTxtStyle
              }>
              Shops
            </span>
          </div>
        </Link>
        <Link to="/event">
          <div className="row-container">
            <VscCalendar
              size={25}
              color={
                route.pathname.match(/event/) !== null
                  ? iconSelectColor
                  : iconDefaultColor
              }
            />
            <span
              style={
                route.pathname.match(/event/) !== null
                  ? selectTxtStyle
                  : defaultTxtStyle
              }>
              Events
            </span>
          </div>
        </Link>



        <Link to="/profile">
          <div className="row-container">
            <AiOutlineUser
              size={25}
              color={
                route.pathname.match(/profile/) !== null
                  ? iconSelectColor
                  : iconDefaultColor
              }
            />
            <span
              style={
                route.pathname.match(/profile/) !== null
                  ? selectTxtStyle
                  : defaultTxtStyle
              }>
              My Profile
            </span>
          </div>
        </Link>
        <Link to="/cart">
          <div className="row-container">
            <AiOutlineShoppingCart
              size={25}
              color={
                route.pathname.match(/cart/) !== null
                  ? iconSelectColor
                  : iconDefaultColor
              }
            />
            <span
              style={
                route.pathname.match(/cart/) !== null
                  ? selectTxtStyle
                  : defaultTxtStyle
              }>
              My Cart
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="row-container">
            <FiUpload
              size={25}
              color={
                route.pathname.match(/orders/) !== null
                  ? iconSelectColor
                  : iconDefaultColor
              }
            />
            <span
              style={
                route.pathname.match(/orders/) !== null
                  ? selectTxtStyle
                  : defaultTxtStyle
              }>
              My Orders
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

export default Sidebar;
