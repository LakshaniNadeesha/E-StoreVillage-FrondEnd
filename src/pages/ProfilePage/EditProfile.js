import React from "react";
import "./editprofile.css";
import Profile from "../../assests/images/profile-img.png";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useAuthUser, useSignOut } from "react-auth-kit";
import Notiflix from "notiflix";
import axios from "axios";
import * as Yup from 'yup';
import YupPassword from "yup-password";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
YupPassword(Yup)
const EditProfile = () => {
    const navigate = useNavigate();
    const auth = useAuthUser()
    const signOut = useSignOut()
    // login form validation rules 
    const validationSchemaProfile = Yup.object().shape({
        fname: Yup.string()
            .required('First name is required'),
        lname: Yup.string()
            .required('Last name is required'),
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
        await axios.patch('http://localhost:3030/v1/user/' + auth().id, {
            first_name: data.fname,
            last_name: data.lname,
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
                    <BiArrowBack className="back-arrow" size={30} style={{ marginRight: "80%" }} onClick={() => navigate("/profile")} />
                    <h3 className="profile-name">{auth().first_name + ' ' + auth().last_name}</h3>
                    <img src={Profile} alt="" className="profile-img" />
                    <p className="change-profile-picture" style={{ fontSize: "14px" }}>Change Profile Picture</p>
                </div>

                <span className="profile-vr"></span>
                <form onSubmit={handleSubmitProfileFrom(submitProfile)} className="edit-profile-detail-container">
                    <span className="edit-profile-span">First Name</span>
                    <input type="text" placeholder="" name="fname"  {...registerProfileFrom('fname')} className={`input-text ${errorsProfileFrom.fname ? 'is-invalid' : ''}`} />

                    <span className="edit-profile-span">Last Name</span>
                    <input type="text" placeholder="" name="lname"  {...registerProfileFrom('lname')} className={`input-text  ${errorsProfileFrom.lname ? 'is-invalid' : ''}`} />

                    {/* <span className="edit-profile-span">E-mail</span>
                        <input type="email" name="email"  {...registerProfileFrom('email')} className={`input-text  ${errorsProfileFrom.email ? 'is-invalid' : ''}`} placeholder="" /> */}

                    <span className="edit-profile-span">Address</span>
                    <textarea name="address"  {...registerProfileFrom('address')} className={`input-text  ${errorsProfileFrom.address ? 'is-invalid' : ''}`} placeholder="" />


                    <span className="edit-profile-span">Contact No</span>
                    <input type="tel" name="tel"  {...registerProfileFrom('tel')} className={`input-text  ${errorsProfileFrom.let ? 'is-invalid' : ''}`} />


                    <button className="profile-save-btn" type="submit" >Save Changes</button>
                </form>
            </div>
        </div>

    );
};

export default EditProfile;
