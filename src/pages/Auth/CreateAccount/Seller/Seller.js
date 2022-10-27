import React from "react";
import SellerLogo from "../../../../assests/images/auth/sellersignup.png";
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

const Seller = (props) => {
  const navigate = useNavigate();

  // login form validation rules 
  const validationSchemaRegister = Yup.object().shape({
    fname: Yup.string()
      .required('Shop name is required'),
    email: Yup.string()
      .required('Email is required'),
    contact: Yup.string()
      .required('Contact is required'),
    bio: Yup.string()
      .required('Bio is required'),
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
      last_name: data.fname,
      email: data.email,
      phoneNumber: data.contact,
      role: "Seller",
      password: data.password,
      r_password: data.confirmPassword,
      numFriends: data?.friends_num,
      bio: data.bio,
      socialLink: data?.sm_link
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
        <div
          className="customer-crate-section"
          style={{ flexDirection: "row-reverse" }}>
          <div
            className="customer-img-container"
            style={{ backgroundColor: "#DEE1EF", borderLeft: "1px solid" }}>
            <img src={SellerLogo} />

            <div style={{ marginTop: 40 }}>
              <button className="create-account-yellow-btn" type="submit">
                Create Account
              </button>
              <div
                onClick={() => navigate("/login")}
                className="regiseter-to-login"
                style={{ marginTop: 40 }}>
                <span>Already registered?</span>
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
          <div className="customer-input-container">
            <div className="tab-bar-create-account">
              <button onClick={() => props.onSeller()}>Seller</button>
              <button onClick={() => props.onCustomer()}>Customer</button>
            </div>
            <div style={{ width: "80%" }}>
              <p className="create-account-login">CREATE ACCOUNT </p>
              <div className="auth-input-container m-top">
                <input {...registerRegisterFrom('fname')} className={`form-control auth-input ${errorsRegisterFrom.fname ? 'is-invalid' : ''}`} name="fname" placeholder="Shop name" />
                <div className="invalid-feedback login-feedback">{errorsRegisterFrom.fname?.message}</div>
              </div>
              <div className="auth-input-container m-top">
                <input {...registerRegisterFrom('email')} className={`form-control auth-input ${errorsRegisterFrom.email ? 'is-invalid' : ''}`} name="email" placeholder="E-mail" />
                <div className="invalid-feedback login-feedback">{errorsRegisterFrom.email?.message}</div>
              </div>
              <div className="auth-input-container m-top" >
                <input
                  className="auth-input"
                  name="friends_num"
                  placeholder="No of Followers/ Friends"
                />
              </div>

              <div className="auth-input-container m-top">
                <input
                  className="auth-input"
                  name="sm_link"
                  placeholder="Link to the Social Media Account"
                />
              </div>
              <div className="auth-input-container m-top">
                <input {...registerRegisterFrom('contact')} className={`form-control auth-input ${errorsRegisterFrom.contact ? 'is-invalid' : ''}`} placeholder="Contact No" name="contact" />
                <div className="invalid-feedback login-feedback">{errorsRegisterFrom.contact?.message}</div>
              </div>
              <div className="auth-input-container m-top">
                <textarea
                  rows={5}
                  placeholder="Add Bio..."
                  {...registerRegisterFrom('bio')} className={`form-control auth-input ${errorsRegisterFrom.bio ? 'is-invalid' : ''}`}
                  name="bio"
                />
                <div className="invalid-feedback login-feedback">{errorsRegisterFrom.bio?.message}</div>
              </div>
              <div className="auth-input-container m-top">
                <input {...registerRegisterFrom('password')} className={`form-control auth-input ${errorsRegisterFrom.password ? 'is-invalid' : ''}`} type="password" placeholder="Password" name="password" />
                <div className="invalid-feedback login-feedback">{errorsRegisterFrom.password?.message}</div>
              </div>
              <div className="auth-input-container m-top">
                <input {...registerRegisterFrom('confirmPassword')} className={`form-control auth-input ${errorsRegisterFrom.confirmPassword ? 'is-invalid' : ''}`} type="password" placeholder="Confirm Password" name="confirmPassword" />
                <div className="invalid-feedback login-feedback">{errorsRegisterFrom.confirmPassword?.message}</div>
              </div>
            </div>

          </div>
        </div>
      </div >
    </form>
  );
};

export default Seller;
