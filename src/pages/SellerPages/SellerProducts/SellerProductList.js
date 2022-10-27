import React, { useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "./sellerproductlist.css";
import {AiOutlinePlus} from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import {RiShoppingBagLine} from "react-icons/ri";
import SellerProductCart from "../../../components/ProductCard/SellerProductCart";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import axios from 'axios';
const SellerProductList = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const authHeader = useAuthHeader()
    const auth = useAuthUser()


    useEffect(() => {

        axios.get("http://localhost:3030/v1/product", {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        })
            .then((res) => {
                console.log(res);
                setData(res.data.data)
            }).catch((err) => {
                console.log(err);
            });

    },[])

    return (
        
        <div>
            <select className="product-category" placeholder="category type">
                <option value="accessories" style={{color:"#656464"}}>Accessories</option>
                <option value="clothing" style={{color:"#656464"}}>Clothing</option>
                <option value="bakeryItems" style={{color:"#656464"}}>Bakery Items</option>
                <option value="cosmetics" style={{color:"#656464"}}>Cosmetic</option>
                <option value="giftBoxes" style={{color:"#656464"}}>Gift Boxes</option>
                <option value="other" style={{color:"#656464"}}>Others</option>
            </select>

            <div className="add-product-button">
                <button onClick={() => navigate("/add_new_product")}>
                    <AiOutlinePlus size={22}/>
                    Add New Product</button>
            </div>
        <div className="product-list1-grid">
            {data.map((item, index) => (
                <SellerProductCart key={index} />
            ))}

            {/*<div className="add-product-container">*/}
            {/*  <FiPlus size={"40%"} color="#778292" />*/}
            {/*</div>*/}
        </div>
        </div>
    );
};

export default SellerProductList;
