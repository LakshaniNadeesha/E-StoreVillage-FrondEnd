import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "./productlist.css";
import { FiPlus } from "react-icons/fi";
import axios from "axios";
const ProductList = () => {
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
    <div className="product-list1-grid">
      {data.map((item, index) => (
        <ProductCard key={index} item={item}/>
      ))}

      {/*<div className="add-product-container">*/}
      {/*  <FiPlus size={"40%"} color="#778292" />*/}
      {/*</div>*/}
    </div>
  );
};

export default ProductList;
