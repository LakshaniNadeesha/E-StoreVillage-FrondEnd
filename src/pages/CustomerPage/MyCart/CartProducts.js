import React from "react";
import "./CartProducts.css";
import chain from "../../../assests/images/chain.png";
import {useNavigate} from "react-router-dom";
import {RiShoppingBagLine} from "react-icons/ri";
import {MdRemoveShoppingCart} from "react-icons/md";
import Swal from "sweetalert2";
import { remove } from 'cart-localstorage' 
const CartProducts = (item) => {
    const navigate = useNavigate();
    const deleteItem = () =>  {
        Swal.fire({
            title: 'Do you want to remove this product?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                remove(item.item.id)
                Swal.fire('remove!', '', 'success')
                window.location.reload();
            }
        })
    }
    return (
        <div className="my-cart-product-row-container">
            <div className="cart-products-img-container">
                <img src={chain} className="cart-product-image-container" />
            </div>

            <div>
                <h3>{item.item.name}</h3>
                <p className="cart-product-quantity">Quantity: {item.item.quantity}</p>

                <div className="my-cart-product-btn-row-container">
                    <div className="cart-btn-row">
                        {/* <button
                            style={{ backgroundColor: "#FBBC05" }}
                            className="my-cart-product-btn" onClick={() => navigate("/buy_now")}>
                            <RiShoppingBagLine size={20} />
                            BuyNow
                        </button> */}
                        <button
                            style={{ backgroundColor: "#F4685D" }}
                            className="my-cart-product-btn" onClick={deleteItem}>
                            <MdRemoveShoppingCart size={20}/>
                            Remove
                        </button>
                    </div>

                    {/* <span className="cart-product-shop-name">Glamour House</span> */}
                </div>


            </div>
        </div>
    );
};

export default CartProducts;
