import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../../components/ShopCard/ShopCard";
import "./shopall.css";

const ShopAll = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const authHeader = useAuthHeader()
    const auth = useAuthUser()


    useEffect(() => {

        axios.get("http://localhost:3030/v1/user/sales",{
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
        <div className="shop-list-grid">
            {data.map((item, index) => (
                <ShopCard key={index} />
            ))}
        </div>
    );
};

export default ShopAll;
