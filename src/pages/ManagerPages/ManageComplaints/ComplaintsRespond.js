import React, { useEffect, useState } from "react";
import "./ComplaintsRespond.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import Notiflix from 'notiflix';
import { useForm } from "react-hook-form";
const ComplaintsRespond = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id")
    const [Data, setData] = useState([])


    useEffect(() => {

        axios.get("http://localhost:3030/v1/complain/" + id, {
            withCredentials: true,
        })
            .then((res) => {
                console.log(res);
                setData(res.data)
            }).catch((err) => {
                console.log(err);
            });

    }, [])


    // login form validation rules 
    const validationSchemaComplain = Yup.object().shape({
        respons: Yup.string()
            .required('Response is required'),
    });
    const formOptionsComplain = { resolver: yupResolver(validationSchemaComplain) };

    // get login functions to build form with useForm() hook
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { register: registerComplainFrom, handleSubmit: handleSubmitComplainFrom, reset: resetComplainFrom, formState: { errors: errorsComplainFrom } } = useForm(formOptionsComplain);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // login functions

    async function submitComplain(data) {
      
        await axios.post('http://localhost:3030/v1/complain/reply', {
            user: data.user_email,
            complain_reply: data.respons
          }, {
            withCredentials: true,
      
          }).then(async (res) => {
            Notiflix.Notify.success('You have send replay successfully!');
          });
       
    }
    return (
        <div className="complaint-respond-main-container">
            <div className="complaint-respond-row-container">
                <form className="complaint-respond-form" onSubmit={handleSubmitComplainFrom(submitComplain)}>
                    <div className="complaint-respond-detail-container">
                        <span className="complaint-respond-span">Complaint No</span>
                        <p>{Data.id}</p>

                        <span className="complaint-respond-span">Complaint</span>
                        <p>{Data.complain}</p>
                        <input hidden value={Data.userComplain?.email}  name="user_email" {...registerComplainFrom('user_email')} className={`auth-input form-control ${errorsComplainFrom.user_email ? 'is-invalid' : ''}`} />
                        <span className="complaint-respond-span">Respond</span>
                        <input type="text" name="respons"  {...registerComplainFrom('respons')} className={`auth-input form-control ${errorsComplainFrom.respons ? 'is-invalid' : ''}`} placeholder="I'll looking to this problem as much as possible" />
                    </div>

                    <div className="complaint-respond-option">
                        <button className="complaint-sent-respond" type="submit">Send</button>
                        <button className="complaint-respond-cancel" onClick={() => navigate("/complaints")}>Cancel</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ComplaintsRespond;
