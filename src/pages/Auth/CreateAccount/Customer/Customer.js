import React from "react";
import "./Customer.css";
import CustomerLogo from "../../../../assests/images/auth/customersignup.png";
import Facebook from "../../../../assests/images/auth/Facebook.png";
import Google from "../../../../assests/images/auth/Google.png";
import LinkedIn from "../../../../assests/images/auth/LinkedIn.png";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useSignIn, useIsAuthenticated } from 'react-auth-kit'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import Notiflix from 'notiflix';
import { useHistory } from "react-router-dom";
YupPassword(Yup)
const Customer = (props) => {
  document.body.style.backgroundColor = "white";
  const navigate = useNavigate();


  // login form validation rules 
  const validationSchemaRegister = Yup.object().shape({
    fname: Yup.string()
      .required('Shop name is required'),
    lname: Yup.string()
      .required('Shop name is required'),
    email: Yup.string()
      .required('Email is required'),
    contact: Yup.string()
      .required('Contact is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .minUppercase(1, 'Password must be at lases 1 uppercase letter required')
      .minLowercase(1, 'Password must be at lases 1 lowercase letter required')
      .minNumbers(1, 'Password must be at least 1 number required')
      .minSymbols(1, 'Password must be at least 1 symbol required')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });
  const formOptionsRegister = { resolver: yupResolver(validationSchemaRegister) };

  // get login functions to build form with useForm() hook
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register: registerRegisterFrom, handleSubmit: handleSubmitRegisterFrom, reset: resetRegisterFrom, formState: { errors: errorsRegisterFrom } } = useForm(formOptionsRegister);


  // Register functions
  async function submitRegister(data) {
    axios.post('http://localhost:3030/v1/user', {
      first_name: data.fname,
      last_name: data.lname,
      email: data.email,
      phoneNumber: data.contact,
      role: "Customer",
      password: data.password,
      r_password: data.confirmPassword,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      console.log(res);
      navigate('/login');
      Notiflix.Notify.success('You have registration successfully!');
    }).catch((err) => {
      console.log(err);
      Notiflix.Notify.failure(err.response.data.message);
    });
  }

  return (
    <form name="user-register-form" onSubmit={handleSubmitRegisterFrom(submitRegister)} autoComplete="off">
      <div className="customer-create-account-main">
        <div className="customer-crate-section">
          <div className="customer-img-container">
            <img src={CustomerLogo} />
          </div>
          <div className="customer-input-container">
            <div className="tab-bar-create-account">
              <button onClick={() => props.onCustomer()}>Customer</button>
              <button onClick={() => props.onSeller()}>Seller</button>
            </div>
            <div style={{ width: "80%" }}>
              <p className="create-account-login">CREATE ACCOUNT </p>
              <div className="auth-input-container m-top">
                <input name="fname" {...registerRegisterFrom('fname')} className={`form-control auth-input ${errorsRegisterFrom.fname ? 'is-invalid' : ''}`} placeholder="First  Name" />
                <div className="invalid-feedback">{errorsRegisterFrom.fname?.message}</div>
              </div>
              <div className="auth-input-container m-top">
                <input {...registerRegisterFrom('lname')} className={`form-control auth-input ${errorsRegisterFrom.lname ? 'is-invalid' : ''}`}  placeholder="Last Name" name="lname"/>
                <div className="invalid-feedback">{errorsRegisterFrom.lname?.message}</div>
              </div>
              <div className="auth-input-container m-top">
                <input {...registerRegisterFrom('email')} className={`form-control auth-input ${errorsRegisterFrom.email ? 'is-invalid' : ''}`}  placeholder="E-mail" name="email" />
                <div className="invalid-feedback">{errorsRegisterFrom.email?.message}</div>
              </div>
              <div className="auth-input-container m-top">
                <input {...registerRegisterFrom('address')} className={`form-control auth-input ${errorsRegisterFrom.address ? 'is-invalid' : ''}`}  placeholder="Address" name="address"/>
              </div>
              <div className="auth-input-container m-top">
                <input {...registerRegisterFrom('contact')} className={`form-control auth-input ${errorsRegisterFrom.contact ? 'is-invalid' : ''}`}  placeholder="Contact No"  name="contact"/>
                <div className="invalid-feedback">{errorsRegisterFrom.contact?.message}</div>
              </div>
              <div className="auth-input-container m-top">
                <input type="password" {...registerRegisterFrom('password')} className={`form-control auth-input ${errorsRegisterFrom.password ? 'is-invalid' : ''}`}  placeholder="password" name="password"/>
                <div className="invalid-feedback">{errorsRegisterFrom.password?.message}</div>
              </div>
              <div className="auth-input-container m-top">
                <input {...registerRegisterFrom('confirmPassword')} className={`form-control auth-input ${errorsRegisterFrom.confirmPassword ? 'is-invalid' : ''}`}  type="password" placeholder="Confirm Password"  name="confirmPassword"/>
                <div className="invalid-feedback">{errorsRegisterFrom.confirmPassword?.message}</div>
              </div>
            </div>

            <div style={{ marginTop: 40 }}>
              <button className="create-account-yellow-btn"
               type="submit">

                Create Account
              </button>
              <div
                className="regiseter-to-login"
                style={{ marginTop: 40 }}
                onClick={() => navigate("/login")}>
                <span>Already registerd?</span>
                <p>Login</p>
              </div>

              <p className="or-login">OR</p>

              <div className="social-media-container-login">
                <img src={Facebook} />
                <img src={Google} />
                <img src={LinkedIn} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Customer;
