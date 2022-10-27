import React from "react";
import "./BuyNow.css";
import Chain from "../../assests/images/chain.png";

import {useNavigate} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";

const BuyNow = () => {
    const navigate = useNavigate();

    return (
        <div className="buy-now-main-container">
            <div className="buy-now-row-container">
                <div className="left-column">
                    <BiArrowBack className="back-arrow" onClick={() => navigate("/product")} size={30} style={{marginLeft:"8%",marginTop:"3%"}}/>
                    <img data-image="black" src={Chain}/>
                </div>
                <div className="right-column">

                    <div className="product-description">
                        <span>Handmade Necklace</span>
                        <h1>Glamour House</h1>
                        <p>An elegant necklace will add that final touch to your outfit. The link chain will
                            make a worthy addition to your collection of designer accessories and will leave
                            you spellbound while pair this dazzling casual/sporty white gold necklace with a
                            nice pair of earrings to complete your look.</p>
                    </div>
                    <div className="product-configuration">
                        <div className="product-color">
                            <span>Colors</span>

                            <div className="color-choose">
                                <div>
                                    <input data-image="silver" type="radio" id="silver" name="color" value="silver" checked/>
                                        <label htmlFor="silver"><span></span></label>
                                </div>
                                <div>
                                    <input data-image="gold" type="radio" id="gold" name="color" value="gold"/>
                                        <label htmlFor="gold"><span></span></label>
                                </div>
                                <div>
                                    <input data-image="pink" type="radio" id="pink" name="color" value="pink"/>
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
                        <button className="buy-now-btn">Buy Now</button>
                    </div>

                    </div>

            </div>
        </div>
    );
};

export default BuyNow;
