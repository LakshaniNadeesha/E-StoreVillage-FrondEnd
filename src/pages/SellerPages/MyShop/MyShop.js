import React from "react";
import "./myshop.css";
import Shop from "../../../assests/images/shop_02.png";
import SocialMediaGroup from "../../../assests/images/socialmedia.png";
import Rating from "react-rating";
import { IoStarOutline, IoMdStar } from "react-icons/io5";
import { GrStar } from "react-icons/gr";
import ReviewCard from "../../../components/ReviewCard/ReviewCard";
import SubNavbar from "../../../components/SubNavbar/SubNavbar";
import ShopTopProducts from "../../ShopPage/ShopTopProducts";
import { useIsAuthenticated } from "react-auth-kit";
import { useLocation } from "react-router-dom";

const MyShop = () => {
  const products = [{}, {}, {}, {}];
  const reviews = [{}, {}, {}];
  // const router = useLocation();

  // const isAuthenticated = useIsAuthenticated()
  // if (isAuthenticated()) {
  //   router('/');
  // }

  return (

    <div className="my-shop-main-container">
      <div className="my-shop-main-row-container">
        <div className="my-shop-top-product-container">
          <p className="header-top-product">Top Products</p>

          <div className="top-product-container">
            {products.map((item, key) => (
              <ShopTopProducts key={key} />
            ))}
          </div>
          <button className="my-shop-see-all-btn">See All</button>
        </div>
        <div className="my-shop-top-product-container_2">
          <div className="my-shop-logo-container">
            <div className="give-away-logo-container">
              <img src={Shop} className="my-sho-logo" />
              <p className="shop-name give-away" style={{ width: "137%" }}>
                Glamour House
              </p>
            </div>
          </div>

          <div className="my-shop-followrs-container">
            <p>Followers - 2764</p>
            <Rating
              readonly
              stop={5}
              initialRating={2}
              emptySymbol={<IoStarOutline size={27} />}
              fullSymbol={
                <GrStar
                  style={{ strokeWidth: "2", stroke: "black" }}
                  color="#FBBC05"
                  size={25}
                />
              }
            />
          </div>
          <p className="my-shop-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            accumsan ipsum vitae nisi sagittis venenatis. Praesent nec orci et
            urna ullamcorper sollicitudin ut in dolor. Nunc tempus urna sit amet
            porta consequat. Nunc vitae lectus felis.
          </p>

          <p style={{ textAlign: "center", marginTop: "8%" }}>
            Contact No - 071 - XXXXXXX
          </p>
          <div className="my-shop-socialmedia-container">
            <img src={SocialMediaGroup} width="30%" />
          </div>
        </div>
      </div>
      <p className="reviews-header-top-product">Top Reviews</p>
      {reviews.map((item, index) => (
        <ReviewCard key={index} />
      ))}
    </div>
  );
};

export default MyShop;
