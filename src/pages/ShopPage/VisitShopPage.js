import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard"
import "./VisitShopPage.css";
import Shop from "../../assests/images/shop_02.png";
import SocialMediaGroup from "../../assests/images/socialmedia.png";
import Rating from "react-rating";
import { IoStarOutline } from "react-icons/io5";
import { GrStar } from "react-icons/gr";
import ReviewCard from "../../components/ReviewCard/ReviewCard"
import ShopTopProducts from "./ShopTopProducts";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const VisitShopPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id")

    const [Shop, setShop] = useState([])
    const [products, setProducts] = useState([])
    const [reviews, setReviews] = useState([])
    useEffect(() => {

        axios.get("http://localhost:3030/v1/product", {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        })
            .then((res) => {
                setReviews(res.data.data)
            }).catch((err) => {
                console.log(err);
            });

    }, [])

    useEffect(() => {

        axios.get("http://localhost:3030/v1/user/" + id, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        })
            .then((res) => {
                console.log(res);
                setShop(res.data)
            }).catch((err) => {
                console.log(err);
            });

    }, [])

    useEffect(() => {

        axios.get("http://localhost:3030/v1/item-review", {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        })
            .then((res) => {
                console.log(res);
                setReviews(res.data.data)
            }).catch((err) => {
                console.log(err);
            });

    }, [])

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
                            <img src="" className="my-sho-logo" />
                            <p className="shop-name give-away" style={{ width: "137%" }}>
                                {Shop.first_name}
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
                        {Shop.description}
                    </p>

                    <p style={{ textAlign: "center", marginTop: "8%" }}>
                        Contact No -{Shop.phoneNumber}
                    </p>
                    <div className="my-shop-socialmedia-container">
                        <img src={SocialMediaGroup} width="30%" />
                    </div>
                </div>
            </div>
            <p className="reviews-header-top-product">Top Reviews</p>
            {reviews.map((item, index) => (
                <ReviewCard key={index} item={item} />
            ))}
        </div>
    );
};

export default VisitShopPage;
