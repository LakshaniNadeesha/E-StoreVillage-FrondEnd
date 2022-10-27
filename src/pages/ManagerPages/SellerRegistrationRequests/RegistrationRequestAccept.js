import React, { useEffect, useState } from "react";
import "./RegistrationAcceptReject.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";

const RegistrationRequestAccept = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id")

    const [Data, setData] = useState([])


    useEffect(() => {

        axios.get("http://localhost:3030/v1/user/" + id, {
            withCredentials: true,
        })
            .then((res) => {
                console.log(res);
                setData(res.data)
            }).catch((err) => {
                console.log(err);
            });

    }, [])


    function onDeleteCat(id) {
        Swal.fire({
            title: 'Do you want to accept this user?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios.patch("http://localhost:3030/v1/user/" + id, {
                    status: 1
                }, {
                    withCredentials: true,

                })
                    .then((res) => {
                        Swal.fire('Accept!', '', 'success')
                        navigate("/registration_request")
                    })
               
            }
        })
    }

    return (
        <div className="reg-request-reject-main-container">
            <div className="reg-request-accept-row-container">
                <div className="reg-request-full">
                    <div className="reg-request-left">
                        Shop Name
                    </div>
                    <div className="reg-request-right">
                        : {Data.first_name}
                    </div>
                </div>
                <div className="reg-request-full">
                    <div className="reg-request-left">
                        Email
                    </div>
                    <div className="reg-request-right">
                        : {Data.email}
                    </div>
                </div>
                {/* <div className="reg-request-full">
                    <div className="reg-request-left">
                        No of followers
                    </div>
                    <div className="reg-request-right">
                        : 25k
                    </div>
                </div> */}
                <div className="reg-request-full">
                    <div className="reg-request-left">
                        Social media link
                    </div>
                    <div className="reg-request-right">
                        : {Data.socialLink}
                    </div>
                </div>
                <div className="reg-request-full">
                    <div className="reg-request-left">
                        Contact No
                    </div>
                    <div className="reg-request-right">
                        : {Data.phoneNumber}
                    </div>
                </div>


                <div className="reg-request-accept-respond-option">
                    <button className="reg-request-manager-accept" onClick={()=>onDeleteCat(Data.id)}>Accept</button>
                    <button className="reg-request-manager-accept-cancel" onClick={() => navigate("/registration_request")}>Cancel</button>
                </div>

            </div>
        </div>
    );
};

export default RegistrationRequestAccept;
