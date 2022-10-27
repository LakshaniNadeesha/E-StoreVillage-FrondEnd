import React, { useEffect, useState } from "react";
import './ManagerEvent.css'
import '../../CustomerPage/EventsPage/TopEvents/topevents.css'
import '../../CustomerPage/EventsPage/eventpage.css'
import { MdFileUpload } from "react-icons/md";
import ManageTopEvent from "../../CustomerPage/EventsPage/TopEvents/ManageTopEvent";
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import Notiflix from 'notiflix';
import { useForm } from "react-hook-form";
import axios from 'axios';
const ManagerEvent = () => {
    const topevents = [{}, {}, {}];
    let today = new Date();

    const navigate = useNavigate();

    // login form validation rules 
    const validationSchemaEvent = Yup.object().shape({
        name: Yup.string()
            .required('name is required'),
        date: Yup.string()
            .required('date is required'),
        description: Yup.string()
            .required('description is required'),
    });
    const formOptionsEvent = { resolver: yupResolver(validationSchemaEvent) };

    // get login functions to build form with useForm() hook
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { register: registerEventFrom, handleSubmit: handleSubmitEventFrom, reset: resetEventFrom, formState: { errors: errorsEventFrom } } = useForm(formOptionsEvent);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // login functions

    async function submitEvent(data) {
        await axios.post('http://localhost:3030/v1/event', {
            name: data.name,
            discription: data.description,
            date: data.date
        }, {
            withCredentials: true,

        }).then(async (res) => {
            Notiflix.Notify.success('You have successfully created new event!');
            navigate(`/manager_products`)
        });
    }


    const [Event, setEvent] = useState([])
    useEffect(() => {
  
      axios.get("http://localhost:3030/v1/event", {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
        .then((res) => {
          setEvent(res.data.data)
        }).catch((err) => {
          console.log(err);
        });
  
    }, [])
    return (
        <div className="event-main-container">
            <div className="event-sub-container">
                <h3 className="event-title" style={{ marginTop: "1%" }}>
                    Create New Event
                </h3>
                <div className="create-new-event">
                    <form className="form-box" onSubmit={handleSubmitEventFrom(submitEvent)}>
                        <div className="p-full">
                            <div className="p-left">
                                <label>Event Name</label>
                                <input type="text" name="name" {...registerEventFrom('name')} className={`manager-event-input-text ${errorsEventFrom.name ? 'is-invalid' : ''}`} placeholder="New Year Sale" />
                            </div>

                            {/* <div className="p-right">
                                    <label>Registration Fee (LKR)</label>
                                    <input type="text" className="manager-event-input-text" placeholder="600.00" />
                                </div> */}
                        </div>

                        <div className="p-full">
                            <div className="p-left">
                                <label>Date</label>
                                <input type="date" name="date" {...registerEventFrom('date')} className={`manager-event-input-text1 ${errorsEventFrom.date ? 'is-invalid' : ''}`} />
                            </div>

                            {/* <div className="p-right">
                                    <label>Starts At</label>
                                    <input type="time" className="manager-event-input-text2" />
                                </div> */}
                        </div>

                        <div className="p-full">
                            <div className="p-left">
                                <label>Event Description</label>
                                <input type="text" name="description" {...registerEventFrom('description')} className={`manager-event-input-text3 ${errorsEventFrom.description ? 'is-invalid' : ''}`} />
                            </div>
                        </div>


                        <label>Upload Cover Image</label>
                        <div className="manager-event-file-input">
                            <input type="file" id="event_submission" accept=".jpg, .png" hidden name="image" {...registerEventFrom('image')} className={`${errorsEventFrom.image ? 'is-invalid' : ''}`} />
                            <MdFileUpload size={25} style={{ marginLeft: "35%" }} />
                            <p>Browse File to Upload</p>

                        </div>

                        <div className="event-create">
                            <button type="submit">Create</button>
                        </div>


                    </form>
                </div>

                <h3 className="event-title" style={{ marginTop: "5%" }}>
                     Events
                </h3>
                {Event.map((item, index) => (
                    <ManageTopEvent key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ManagerEvent;
