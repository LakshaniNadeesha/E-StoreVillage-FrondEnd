import React from "react";
import "./topevents.css";
import Banner from "../../../../assests/images/top-events.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const ManageTopEvent = (item) => {
    const navigate = useNavigate();
    function onDeleteCat(id) {
        Swal.fire({
            title: 'Do you want to delete this event?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios.delete("http://localhost:3030/v1/event/" + id,{
                    withCredentials: true,
                })
                    .then((res) => {
                        Swal.fire('Deleted!', '', 'success')
                        window.location.reload();
                    })

            }
        })
    }
    return (
        <div className="top-event-row-container">
            <img src={Banner} className="top-event-img-container" />
            <div>
                <h3>{item.item.name}</h3>
                <p className="top-event-para">
                    {item.item.name}
                </p>
                <button className="event-manage-update" onClick={() => navigate(`/manager_events/edit_event?id=${item.item.id}`)}>Edit</button>
                <button className="event-manage-remove" onClick={() => onDeleteCat(item.item.id)}>Remove</button>
            </div>
        </div>
    );
};

export default ManageTopEvent;
