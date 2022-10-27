import React from "react";
import "./ProfileCard.css";
import Profile from "../../assests/images/profile-img1.png";
import { IoRemoveCircleOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import axios from "axios";

const ProfileCard = (values) => {

    function onDelete(id, status, text) {

        Swal.fire({
            title: text,
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios.patch("http://localhost:3030/v1/user/" + id, {
                    status: status
                })
                    .then((res) => {
                        window.location.reload();
                    })
                Swal.fire('Deleted!', '', 'success')
            }
        })
    }
    return (
        <div className="profile-card-container">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={Profile} className="profile-image-container" />
            </div>
            <h6>{values.values.first_name} {values.values.first_name}</h6>
            <p>{values.values.email}</p>
            {
                values.values.status === 1 ?
                    <button onClick={() => onDelete(values.values.id, 0, 'Do you want to deactivate this user?')} className="user-active-btn">
                        <IoRemoveCircleOutline size={20} />
                        Deactivate
                    </button>
                    :
                    <button onClick={() => onDelete(values.values.id, 1, 'Do you want to active this user?')} className="user-active-btn">
                        <IoRemoveCircleOutline size={20} />
                        Active
                    </button>
            }

        </div >
    );
};

export default ProfileCard;
