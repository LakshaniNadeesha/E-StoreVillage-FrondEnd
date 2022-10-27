import React, { useEffect, useState } from "react";
import "./BuyNow.css";
import Chain from "../../assests/images/chain.png";

import { useNavigate, useSearchParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import axios from 'axios';
import { add, total } from 'cart-localstorage' 
import Notiflix from "notiflix";
function addToCart(id) {
    alert();

}

const AddToCart = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id")
    const navigate = useNavigate();
    const [Items, setItems] = useState([]);
    const shoot = () => {
        add({id: Items.id, name: Items.name, price: Items.price_sale})
        Notiflix.Notify.success('Cart Added!');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        axios.get("http://localhost:3030/v1/product/" + id, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        })
            .then((res) => {
                console.log(res.data);
                setItems(res.data)
            }).catch((err) => {
                console.log(err);
            });

    }, [])



    return (
        <div className="buy-now-main-container">
            <div className="buy-now-row-container">
                <div className="left-column">
                    <BiArrowBack className="back-arrow" onClick={() => navigate("/product")} size={30} style={{ marginLeft: "8%", marginTop: "3%" }} />
                    <img data-image="black" src={Chain} />
                </div>
                <div className="right-column">

                    <div className="product-description">
                        <span></span>
                        <h1>{Items.name}</h1>
                        <p>{Items.description}</p>
                    </div>
                    <div className="product-configuration">
                        <div className="product-color">
                            <span>Colors</span>

                            <div className="color-choose">
                                <div>
                                    <input data-image="silver" type="radio" id="silver" name="color" value="silver" checked />
                                    <label htmlFor="silver"><span></span></label>
                                </div>
                                <div>
                                    <input data-image="gold" type="radio" id="gold" name="color" value="gold" />
                                    <label htmlFor="gold"><span></span></label>
                                </div>
                                <div>
                                    <input data-image="pink" type="radio" id="pink" name="color" value="pink" />
                                    <label htmlFor="pink"><span></span></label>
                                </div>
                            </div>

                            <div className="product-highlights">
                                <span>Highlights</span>

                                <div className="highlights-choose">
                                    <button>Universal</button>
                                    <button>Hand Painted</button>
                                    <button>Natural</button>
                                </div>
                                <div className="line"></div>
                            </div>

                        </div>

                    </div>
                    <div className="product-price">
                        <span>LKR 400.00</span>
                        <button className="add-to-cart-btn" onClick={shoot}>Add To Cart</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AddToCart;
