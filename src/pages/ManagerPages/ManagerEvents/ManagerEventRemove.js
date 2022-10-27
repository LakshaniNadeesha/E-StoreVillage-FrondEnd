import React from "react";
import "./EventEditRemove.css";
import {useNavigate} from "react-router-dom";

const ManagerEventRemove = () => {
    const navigate = useNavigate();

    return (
        <div className="event-remove-main-container">
            <div className="event-remove-row-container">
                <p className="remove-p">Are you sure you want to remove the event?</p>
                <div className="event-edit-remove-respond-option">
                    <button className="event-remove">Remove</button>
                    <button className="event-edit-remove-cancel" onClick={() => navigate("/manager_events")}>Cancel</button>
                </div>

            </div>
        </div>
    );
};

export default ManagerEventRemove;
