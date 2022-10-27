import React from "react";
import YupPassword from "yup-password";
import "./HelpPage.css";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Notiflix from "notiflix";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";

YupPassword(Yup)
const HelpPage = () => {
    const auth = useAuthUser()
    // login form validation rules 
    const validationSchemaHelp = Yup.object().shape({
        title: Yup.string()
            .required('Complaint title is required'),
        complaint: Yup.string()
            .required('Complaint is required')
    });
    const formOptionsHelp = { resolver: yupResolver(validationSchemaHelp) };

    // get login functions to build form with useForm() hook
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { register: registerHelpFrom, handleSubmit: handleSubmitHelpFrom, reset: resetHelpFrom, formState: { errors: errorsHelpFrom } } = useForm(formOptionsHelp);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // login functions

    async function submitHelp(data) {
        await axios.post('http://localhost:3030/v1/complain', {
            name: data.title,
            complain: data.complaint,
            user: auth().id
        }, {
            withCredentials: true,

        }).then(async (res) => {

            Notiflix.Notify.success('You have successfully created!');
        }).catch((err) => {
            console.log(err);
            Notiflix.Notify.failure(err.response.data.message);
        });
    }
    return (
        <div className="help-page-main-container">
            <div className="help-page-row-container">
                <form className="help-form" onSubmit={handleSubmitHelpFrom(submitHelp)}>
                    <div className="help-p-full">
                        <div className="help-p-left">
                            <label>Complaint Title</label>
                            <input type="text" name="title"  {...registerHelpFrom('title')} className={`help-page-input-text ${errorsHelpFrom.title ? 'is-invalid' : ''}`} placeholder="Regarding Product Purchase" />
                        </div>
                    </div>


                    <div className="help-p-full">
                        <div className="help-p-left">
                            <label>Complaint</label>
                            <textarea  {...registerHelpFrom('complaint')} className={`help-page-input-text1 ${errorsHelpFrom.complaint ? 'is-invalid' : ''}`} name="complaint" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan ipsum vitae nisi sagittis venenatis. Praesent nec orci et urna ullamcorper sollicitudin ut in dolor. Nunc tempus urna sit amet porta consequat. Nunc vitae lectus felis." />
                        </div>
                    </div>

                    <div className="help-page-respond-option">
                        <button className="help-submit-success" type="submit">Submit</button>
                        <button className="help-submit-cancel" type="reset">Cancel</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default HelpPage;
