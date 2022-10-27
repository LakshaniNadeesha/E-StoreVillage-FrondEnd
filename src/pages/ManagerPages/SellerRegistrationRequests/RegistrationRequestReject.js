import React, { useEffect, useState } from "react";
import "./RegistrationAcceptReject.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";

const RegistrationRequestReject = () => {
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
                    status: 2
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
            <div className="reg-request-reject-row-container">
                <p className="reg-reject-verify-p">Are you sure you want to reject this seller registration request?</p>
                <div className="reg-request-respond-option">
                    <button className="reg-request-manager-reject" onClick={()=>onDeleteCat(Data.id)}>Reject</button>
                    <button className="reg-request-manager-cancel" onClick={() => navigate("/registration_request")}>Cancel</button>
                </div>

            </div>
        </div>
    );
};

export default RegistrationRequestReject;
