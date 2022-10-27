import React from "react";
import "./Giveaways.css";
import CompanyLogo from "../../../../assests/images/shop_02.png";
import GiveAway from "../../../../assests/images/giveaway.png";
import {useNavigate} from "react-router-dom";
const Giveaways = () => {
    const navigate = useNavigate();

    return (
        <div className="give-away-row-container">
            <div className="give-away-logo-container">
                <img src={CompanyLogo} className="give-away-image-container" />
                <p className="shop-name give-away">Glamour House</p>
            </div>

            <div>
                <h3>DIY Handmade set of earrings and necklaces</h3>
                <p className="give-away-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan
                    ipsum vitae nisi sagittis venenatis. Praesent nec orci et urna
                    ullamcorper sollicitudin ut in dolor. Nunc tempus urna sit amet porta
                    consequat. Nunc vitae lectus felis.
                </p>

                <div className="giveaway-update-row-container">
                    <div>
                        <button
                            style={{ backgroundColor: "#FBBC05" }}
                            className="give-away-btn" onClick={() => navigate("/seller_event/edit_giveaways")}>
                            Update
                        </button>
                        <button
                            style={{ backgroundColor: "#F4685D" }}
                            className="give-away-btn" onClick={() => navigate("/seller_event/remove_giveaways")}>
                            Remove
                        </button>
                    </div>

                    <span className="giveaway-end-date">Ends on - DD/MM/YYYY </span>
                </div>
            </div>

            <img src={GiveAway} alt="" className="giveaway-type" />
        </div>
    );
};

export default Giveaways;
