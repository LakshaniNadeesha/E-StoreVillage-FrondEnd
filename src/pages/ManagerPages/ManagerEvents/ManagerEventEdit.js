import React from "react";
import "./EventEditRemove.css";
import {useNavigate} from "react-router-dom";
import {MdFileUpload} from "react-icons/md";

const ManagerEventEdit = () => {
    const navigate = useNavigate();

    return (
        <div className="event-edit-main-container">
            <div className="event-edit-row-container">
                <form className="event-edit-form">
                    <div className="event-edit-p-full">
                        <div className="event-edit-p-left">
                            <label>Event Name</label>
                            <input type="text" className="manager-event-edit-input-text" placeholder="11.11 has returned"/>
                        </div>

                        <div className="event-edit-p-right">
                            <label>Registration Fee (LKR)</label>
                            <input type="text" className="manager-event-edit-input-text" placeholder="600.00"/>
                        </div>
                    </div>

                    <div className="event-edit-p-full">
                        <div className="event-edit-p-left">
                            <label>Date</label>
                            <input type="date" className="manager-event-edit-input-text1"/>
                        </div>

                        <div className="event-edit-p-right">
                            <label>Starts At</label>
                            <input type="time" className="manager-event-edit-input-text2"/>
                        </div>
                    </div>

                    <div className="event-edit-p-full">
                        <div className="event-edit-p-left">
                            <label>Event Description</label>
                            <input type="text" className="manager-event-edit-input-text3" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan ipsum vitae nisi sagittis venenatis. Praesent nec orci et urna ullamcorper sollicitudin ut in dolor. Nunc tempus urna sit amet porta consequat. Nunc vitae lectus felis."/>
                        </div>
                    </div>


                    <label>Upload Cover Image</label>
                    <div className="manager-event-edit-file-input">
                        <input type="file" id="event_submission" accept=".jpg, .png" hidden/>
                        <MdFileUpload size={25} style={{marginLeft:"35%"}}/>
                        <p>Browse File to Upload</p>

                    </div>

                    <div className="event-edit-remove-respond-option">
                    <button className="event-edit">Save</button>
                    <button className="event-edit-remove-cancel" onClick={() => navigate("/manager_events")}>Cancel</button>
                </div>
                </form>

            </div>
        </div>
    );
};

export default ManagerEventEdit;
