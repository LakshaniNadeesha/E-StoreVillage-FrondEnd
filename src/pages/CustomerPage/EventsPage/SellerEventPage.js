import React from "react";
import ProudctCard from "../../../components/ProductCard/ProductCard";
import "./eventpage.css";
import Giveaways from "./Giveaways/Giveaways";
import TopEvents from "./TopEvents/TopEvents";
import { RiArrowDropDownLine } from "react-icons/ri";
import SellerGiveaways from "./Giveaways/SellerGiveaways";
import {AiOutlinePlus} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

const SellerEventPage = () => {
    const navigate = useNavigate();
    const giveawaylist = [{}, {}];

    const topevents = [{}, {}];

    const offers = [{}, {}, {}];
    return (
        <div className="event-main-container">
            <div className="event-offer-container">
                <div className="category-container">
                    <div></div>
                </div>
                <div className="event-offer-sub-container">
                    <h3 className="event-title">Offers</h3>

                    <div className="event-offer-product-container">
                        {offers.map((item, index) => (
                            <ProudctCard key={index} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="event-sub-container">
                <div className="event-give-away-row-container">
                    <h3 className="event-title">Giveaways</h3>
                    <div className="add-give-away-btn">
                    <button onClick={() => navigate("/seller_event/add_giveaways")}><AiOutlinePlus size={22}/>
                        Add A Giveaway</button>
                    </div>
                </div>

                {giveawaylist.map((item, index) => (
                    <SellerGiveaways key={index} />
                ))}

                <h3 className="event-title" style={{ marginTop: "5%" }}>
                    Top Events
                </h3>
                {topevents.map((item, index) => (
                    <TopEvents key={index} />
                ))}
            </div>
        </div>
    );
};

export default SellerEventPage;
