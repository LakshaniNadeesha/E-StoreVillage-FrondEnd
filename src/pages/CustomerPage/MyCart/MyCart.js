import React from "react";
import "./mycart.css";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import ProductCard from "../../../components/ProductCard/ProductCard";
import Chain from "../../../assests/images/chain.png";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Rating from "react-rating";
import { IoStarOutline } from "react-icons/io5";
import { GrStar } from "react-icons/gr";
import Giveaways from "../EventsPage/Giveaways/Giveaways";
import CartProducts from "./CartProducts";
import { add, total, list, destroy } from 'cart-localstorage'
import axios from "axios";
import Swal from "sweetalert2"
import { useAuthUser } from "react-auth-kit";

const MyCart = () => {
  const productList = list()
  const auth = useAuthUser()

  const itmesArray = [];
  const qutyArrya = [];

  async function checkout() {
    list().forEach(item => {
      itmesArray.push(item.id)
      qutyArrya.push(item.quantity)
    });
    await axios.post('http://localhost:3030/v1/order', {
      items: list(),
      subtotal: total(),
      paid: total(),
      user: auth().id
    }, {
      withCredentials: true,

    })
      .then((res) => {
        destroy()
        Swal.fire('Oder Added!', '', 'success')
        window.location.reload();
      })
  }
  return (
    <div className="my-cart-main-container">
      <div className="my-cart-row">
        <input type="checkbox" className="cart-checkbox" />
        <span className="my-cart-total-amount">Select All</span>
        <span className="my-cart-total-amount">
          Total Amount - <h3 className="total-price"> Rs.{total()}</h3>
        </span>

        <button className="my-cart-checkout-btn" onClick={() => checkout()}>Checkout</button>
      </div>
      <div className="cart-products-row-container">
        <h3 className="my-cart-products-title">Products</h3>
      </div>

      {productList.map((item, index) => (
        <CartProducts key={index} item={item} />
      ))}

    </div>
  );
};

export default MyCart;
