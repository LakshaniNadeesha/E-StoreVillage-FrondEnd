import React, { useEffect, useState } from "react";
import "./productall.css";
import { FiPlus } from "react-icons/fi";
import ProductCard from "../../../components/ProductCard/ProductCard";
import axios from 'axios';

const ProductsAll = () => {
    const [data, setData] = useState([])
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
        <div className="product-list-grid">
            {data.map((item, index) => (
                <ProductCard key={index}  item={item}/>
            ))}


        </div>
    );
};

export default ProductsAll;
