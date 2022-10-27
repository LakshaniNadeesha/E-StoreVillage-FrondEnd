import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationCard from "../../../components/RegestratonCard/RegistrationCard";
import axios from 'axios';
const UserList = () => {
    const navigate = useNavigate();
    const [Seller, setSeller] = useState([])
    useEffect(() => {

        axios.get("http://localhost:3030/v1/user/sales", {
            withCredentials: true,
        })
            .then((res) => {
                setSeller(res.data.data)
            }).catch((err) => {
                console.log(err);
            });

    }, [])

    return (
        <div>
            <div className="product-list1-grid">
                {Seller.map((item, index) => (
                    <RegistrationCard key={index} item={item} />
                ))}

            </div>
        </div>
    );
};

export default UserList;
