import React from "react";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import AdminSideBar from "./AdminSideBar";
import SellerSidebar from './SellerSideBar';
import ManagerSidebar from './ManagerSideBar';

import { useNavigate } from 'react-router-dom';
import Sidebar from "./Sidebar";


const MyShopSideBar = () => {
    const auth = useAuthUser()
    const isAuthenticated = useIsAuthenticated()
    const navigate = useNavigate();


    if (!isAuthenticated()) {
        window.location.pathname = "/login"
    }


    if (auth()?.role === 'SuperAdmin') {
        return (
            <AdminSideBar />
        )
    } else if (auth().role === 'Seller') {
        return (<SellerSidebar />)
    }else if(auth().role === 'Manager'){
        return (<ManagerSidebar />)
    } else {
        return (<Sidebar />)
    }




}

export default MyShopSideBar;