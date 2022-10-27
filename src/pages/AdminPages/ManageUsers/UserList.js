import React from "react";
import ProfileCard from "../../../components/ProfileCard/ProfileCart";
import "./UserList.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import axios from "axios";
import { useEffect } from "react";
const UserList = () => {
    const [data, setData] = useState([])
    useEffect(() => {

        axios.get("http://localhost:3030/v1/user",{
            withCredentials: true,
          })
            .then((res) => {
                console.log(res.data.data);
                setData(res.data.data)
            }).catch((err) => {
                console.log(err);
            });

    },[])

    return (
        <div>
            <div data="product-list1-grid">
                {data.map((item, index) => (
                    <ProfileCard values={item} key={index} />
                ))}

            </div>
        </div>
    );
};

export default UserList;
