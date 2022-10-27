import React from "react";
import "./ManagerEditProfile.css";
import { BiArrowBack } from "react-icons/bi";
import profile1 from "../../../assests/images/profile.png";
import { useNavigate } from "react-router-dom";
import { useAuthUser, useSignOut } from "react-auth-kit";

import * as Yup from 'yup';
import YupPassword from 'yup-password';
import Notiflix from 'notiflix';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
YupPassword(Yup)
const ManagerEditProfile = () => {
    const navigate = useNavigate();
    const auth = useAuthUser()
    const signOut = useSignOut()


    // login form validation rules 
    const validationSchemaProfile = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        address: Yup.string()
            .required('Address is required'),
        tel: Yup.string()
            .required('Tel Number is required')
    });
    const formOptionsProfile = { resolver: yupResolver(validationSchemaProfile) };

    // get login functions to build form with useForm() hook
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { register: registerProfileFrom, handleSubmit: handleSubmitProfileFrom, reset: resetProfileFrom, formState: { errors: errorsProfileFrom } } = useForm(formOptionsProfile);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // login functions

    async function submitProfile(data) {
        axios.patch("http://localhost:3030/v1/user/" + auth().id, {
            first_name: data.name,
            last_name: data.name,
            phoneNumber: data.tel,
            address: data.address
        }, {
            withCredentials: true,

        })
            .then((res) => {
                Swal.fire('Accept!', '', 'success')
                signOut()
            })
    }
    return (
        <div className="profile-main-container">
            <div className="profile-row-container">
                <div className="profile-img-container">
                    <BiArrowBack className="back-arrow" size={30} style={{ marginRight: "80%" }} onClick={() => navigate("/managerProfile")} />
                    <h3 className="profile-name">{auth().first_name} {auth().last_name}</h3>
                    <img src={profile1} alt="" className="profile-img" />
                    <p className="change-profile-picture" style={{ fontSize: "14px" }}>Change Profile Picture</p>
                </div>

                <span className="profile-vr"></span>
                <form className="edit-profile-detail-container" onSubmit={handleSubmitProfileFrom(submitProfile)}>
                    {/* <div > */}
                    <span className="edit-profile-span">Name</span>
                    <input type="text" name="name" {...registerProfileFrom('name')} className={`input-text ${errorsProfileFrom.name ? 'is-invalid' : ''}`} placeholder="Dilshan Fernando" />

                    {/* <span className="edit-profile-span">E-mail</span>
                        <input type="email" name="email" {...registerProfileFrom('email')} className={`input-text ${errorsProfileFrom.email ? 'is-invalid' : ''}`} placeholder="dilshanfernando@gmail.com" /> */}

                    <span className="edit-profile-span">Adddress</span>
                    <textarea name="address"  {...registerProfileFrom('address')} className={`input-text ${errorsProfileFrom.address ? 'is-invalid' : ''}`} placeholder="No:04, Park Road,colombo" />


                    <span className="edit-profile-span">Contact No</span>
                    <input type="tel" name="tel"  {...registerProfileFrom('tel')} className={`input-text ${errorsProfileFrom.tel ? 'is-invalid' : ''}`} placeholder="076-2563142" />


                    <button type="submit" className="profile-save-btn">Save Changes</button>
                    {/* </div> */}
                </form>
            </div>
        </div>
    );
};

export default ManagerEditProfile;
