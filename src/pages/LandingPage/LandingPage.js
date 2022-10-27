import React, { useEffect, useState } from "react";
import "./landingPage.css";
import SimpleImageSlider from "react-simple-image-slider"
import { Link, useNavigate } from "react-router-dom";

import img_01 from "../../assests/images/dashboard/top-categories/img_01.jpg";
import img_02 from "../../assests/images/dashboard/top-categories/img_02.png";
import img_03 from "../../assests/images/dashboard/top-categories/img_03.png";
import img_04 from "../../assests/images/dashboard/top-categories/img_04.png";
import img_05 from "../../assests/images/dashboard/top-categories/img_05.png";
import slide_01 from "../../assests/images/landingPage/slide_01.png";
import slide_02 from "../../assests/images/landingPage/slide_02.jpg";
import slide_03 from "../../assests/images/landingPage/slide_03.png";
import product_1 from "../../assests/images/dashboard/trending-products/product_1.png";
import product_2 from "../../assests/images/dashboard/trending-products/product_2.png";
import product_3 from "../../assests/images/dashboard/trending-products/product_3.png";
import product_4 from "../../assests/images/dashboard/trending-products/product_4.png";
import ecllipse_1 from "../../assests/images/dashboard/ecllipse_1.png";
import aboutus from "../../assests/images/dashboard/aboutus.png";
import ecllipse_2 from "../../assests/images/dashboard/ecllipse_2.png";
import playstore from "../../assests/images/googleplaystore.png";
import appstore from "../../assests/images/appstore.png";
import Logo from "../../assests/images/Logo.png";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { useAuthHeader } from "react-auth-kit";
import axios from 'axios';
const LandingPage = () => {
//   const images = [
//       "https://img.freepik.com/free-photo/group-stylish-women-going-shopping_329181-11904.jpg?w=2000",
//       "https://unsplash.com/s/photos/shopping",
//       "https://unsplash.com/s/photos/confident",
// "https://img.freepik.com/premium-photo/girlfriends-going-shopping-concept_53876-86016.jpg?w=2000",
//     "https://img.freepik.com/free-photo/woman-making-pretty-floral-arrangement_23-2148846538.jpg?w=2000",
//   ];

  const images = [slide_03,slide_02,slide_01];
  const [TopCateGories, setTopCateGories] = useState([])
  const authHeader = useAuthHeader()

  useEffect(() => {
      axios.get("http://localhost:3030/v1/product",{ withCredentials: true,})
          .then((res) => {
              console.log(res);
              setTopCateGories(res.data.data)
          })
  }, [])
  const slicedArray = TopCateGories.slice(0, 5);
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <SimpleImageSlider
          width={"100%"}
          height={800}
          images={images}
          showBullets={true}
          showNavs={true}
          style={{ objectFit: "contain" }}
          loop
          autoPlay
        />
      </div>

      <div className="sub-main-category">
        <div className="sub-main-top-category-header">
          <h3>Top Categories</h3>
          <p>
            <center>Here is the top product categories of our site.</center>
          </p>
        </div>
        <div className="landing-page-top-categories">
          {slicedArray.map((item, key) => (
            <div className="landing-page-column">
              <img src={item.image} key={key} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <div className="lading-page-btn-container">
          <button
            onClick={() => navigate("/productAll")}>
            See All
          </button>
        </div>
        <div className="sub-main-top-category-header">
          <h3>Trending Products</h3>
          <p>
            Here is our awesome products that have been trending for last 3 months.
          </p>
        </div>
        <div className="landing-page-top-categories1">
          <div className="landing-page-column" style={{ width: "141px" }}>
            <img src={product_1} />
          </div>
          <div className="landing-page-column" style={{ width: "141px" }}>
            <img src={product_2} />
          </div>
          <div className="landing-page-column" style={{ width: "141px" }}>
            <img src={product_3} />
          </div>
          <div className="landing-page-column" style={{ width: "141px" }}>
            <img src={product_4} />
          </div>
        </div>

        <div className="lading-page-btn-container">
          <button>Explore More</button>
        </div>

        <div className="landing-page-about-us-container">
          <div style={{ width: "30%" }}>
            <h3 className="about-us-txt">About US......</h3>
            <p className="about-us-txt-p-1">
              Web based system that acts as a proper online platform for social media based
              small businesses to connect with their customers and to carry out the business processes.
            </p>
            <p className="brand-new-p">Brand New Web Application To Blow Your Mind</p>
          </div>

          <img src={aboutus} />

          <div style={{ width: "24%" }}>
            <div className="about-us-services">
              <div className="eclipse-container">
                <img src={ecllipse_1} />
              </div>
              <div className="about-us-service-details">
                <p>Quick Payment</p>
                <span>100% Secure Payment</span>
              </div>
            </div>

            <div className="about-us-services">
              <div className="eclipse-container">
                <img src={ecllipse_2} />
              </div>
              <div className="about-us-service-details">
                <p>User Friendly</p>
                <span>Easy Access Platform</span>
              </div>
            </div>
            <div className="lading-page-shop-now-btn">
              <button
                  onClick={() => navigate("/productAll")}>
                Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <img src={Logo} className="footer-container-logo" />

        <div className="footer-column">
          <h3>Pages</h3>
          <span>Products</span>
          <span>Shops</span>
          <span>Events</span>
          <span>Profiles</span>
        </div>

        <div className="footer-column">
          <h3>Service</h3>
          <span>Different Products</span>
          <span>Easy Shopping</span>
          <span>Special Events</span>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <span>
            <BsTelephoneFill size={25} /> +(94) 77 414 5153
          </span>
          <span>
            <HiMail size={25} />
            estorevillage@gmail.com
          </span>
          <span>
            <IoLocationSharp size={25} />
            UCSC, Reid avenue, Colombo 7
          </span>
        </div>

        <div className="download-location-container">
          <p>Download the app by clicking the link below :</p>
          <img src={playstore} />

          <img src={appstore} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
