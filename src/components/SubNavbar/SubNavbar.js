import React from "react";
import Logo from "../../assests/images/Logo.png";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { BiHelpCircle, BiMessage } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { useSignOut } from 'react-auth-kit'

import "./SubNavbar.css";
import { useLocation, useNavigate, useParams, useRoutes } from "react-router-dom";

const SubNavbar = () => {
  const signOut = useSignOut()
  const router = useLocation();
  const navigate = useNavigate();
  const setHeader = () => {
    if (router.pathname.match(/manager_orders/)) {
      return "Orders";
    } else if (router.pathname.match(/removeCartProduct/)) {
      return "Remove Cart Product";
    } else if (router.pathname.match(/add_to_cart/)) {
      return "Add To Cart";
    } else if (router.pathname.match(/buy_now/)) {
      return "Buy Now";
    } else if (router.pathname.match(/add_new_product/)) {
      return "Add New Product";
    } else if (router.pathname.match(/help/)) {
      return "Help";
    } else if (router.pathname.match(/edit_giveaways/)) {
      return "Update Giveaway";
    } else if (router.pathname.match(/add_giveaways/)) {
      return "Add A Giveaway";
    } else if (router.pathname.match(/remove_giveaways/)) {
      return "Remove Giveaway";
    } else if (router.pathname.match(/visit_shop/)) {
      return "Visit Shop";
    } else if (router.pathname.match(/create_discount/)) {
      return "Create Discount";
    } else if (router.pathname.match(/update_discount/)) {
      return "Update Discount";
    } else if (router.pathname.match(/remove_discount/)) {
      return "Remove Discount";
    } else if (router.pathname.match(/add_category/)) {
      return "Add New Category";
    } else if (router.pathname.match(/update_category/)) {
      return "Update Category";
    } else if (router.pathname.match(/remove_category/)) {
      return "Remove Category";
    } else if (router.pathname.match(/categories/)) {
      return "Manage Categories";
    } else if (router.pathname.match(/manage_users/)) {
      return "Manage Users";
    } else if (router.pathname.match(/system_report/)) {
      return "System Report";
    } else if (router.pathname.match(/complaints/)) {
      return "Complaints";
    } else if (router.pathname.match(/managerProfile/)) {
      return "Profile";
    } else if (router.pathname.match(/registration_request/)) {
      return "Seller Registration Requests";
    } else if (router.pathname.match(/edit_order/)) {
      return "Edit Order Details";
    } else if (router.pathname.match(/remove_order/)) {
      return "Remove Order";
    } else if (router.pathname.match(/order/)) {
      return "My Orders";
    } else if (router.pathname === "/shop") {
      return "Shops";
    } else if (router.pathname.match(/event/)) {
      return "Events";
    } else if (router.pathname.match(/product/)) {
      return "Products";
    } else if (router.pathname.match(/cart/)) {
      return "My Cart";
    } else if (router.pathname.match(/profile/)) {
      return "My Profile";
    } else if (router.pathname.match(/shopProfile/)) {
      return "Shop Profile";
    } else if (router.pathname.match(/salesHistory/)) {
      return "Sales History";
    } else if (router.pathname === "/myshop") {
      return "My Shop";
    } else if (router.pathname === "/discounts") {
      return "Discounts";
    } else if (router.pathname === "/") {
      return "Product";
    }
  };

  return (
    <div>
      <div className="sub-navbar-container">
        <div>
          <img className="sub-nav-logo" src={Logo} />
        </div>

        <div className="sub-nav-input-row">
          <div className="sub-nav-input">
            <FiSearch />
            <input placeholder="search" />
          </div>

          <div className="sub-nav-icon-row">
            <BiHelpCircle size={22} className="help-icon" onClick={() => navigate("/help")} />
            <MdNotificationsNone size={25} className="notification-icon" />
            {/*<BiMessage size={22} />*/}
          </div>
          <div className="sub-nav-icon-row">
            <BiHelpCircle size={22} className="help-icon" onClick={() => signOut()} />
            {/*<BiMessage size={22} />*/}
          </div>
          
        </div>

        <div className="sub-nav-header-container">
          <span className="sub-nav-header-title">{setHeader()}</span>
          <p className="sub-nav-hr"></p>
        </div>
      </div>
      <div className="sub-nav-space"></div>
    </div>
  );
};

export default SubNavbar;
