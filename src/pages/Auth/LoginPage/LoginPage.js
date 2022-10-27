import React from "react";
import "./LoginPage.css";
import Facebook from "../../../assests/images/auth/Facebook.png";
import Google from "../../../assests/images/auth/Google.png";
import LinkedIn from "../../../assests/images/auth/LinkedIn.png";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useSignIn, useIsAuthenticated } from 'react-auth-kit'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import Notiflix from 'notiflix';
YupPassword(Yup)

const LoginPage = () => {
  const navigatePage = useNavigate();


  const isAuthenticated = useIsAuthenticated()
  if (isAuthenticated()) {
    console.log()
    navigatePage('/');
  }



  function myFunction() {
    let x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


  const signIn = useSignIn()


  // login form validation rules 
  const validationSchemaLogin = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required')
  });
  const formOptionsLogin = { resolver: yupResolver(validationSchemaLogin) };

  // get login functions to build form with useForm() hook
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register: registerLoginFrom, handleSubmit: handleSubmitLoginFrom, reset: resetLoginFrom, formState: { errors: errorsLoginFrom } } = useForm(formOptionsLogin);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // login functions

  async function submitLogin(data) {

    await axios.post('http://localhost:3030/v1/auth/login', {
      email: data.email,
      password: data.password
    }, {
      withCredentials: true,

    }).then(async (res) => {
      signIn({
        token: res.data.access_token,
        expiresIn: 60,
        tokenType: "Bearer",
        authState: res.data.user,
      });


      if (res.data.role === 'SuperAdmin') {
        navigate('/categories');
      } else if (res.data.role === 'Seller') {
        navigate('/myshop');
      } else if (res.data.role === 'Manager') {
        navigate('/categories');
      } else {
        navigate('/product');
      }

      Notiflix.Notify.success('You have Login successfully!');
    }).catch((err) => {
      console.log(err);
      Notiflix.Notify.failure(err.response.data.message);
    });
  }

  const navigate = useNavigate();
  return (
    <div className="login-page-main-container">
      <div className="login-container">
        <div className="login-container-header">
          <p>Login to Your Account</p>
          <h3 className="sub-title-login">
            E-Store Village can make your life simpler.
          </h3>
        </div>
        <form onSubmit={handleSubmitLoginFrom(submitLogin)}>
          <div style={{ width: "100%", marginTop: 50 }}>
            <div className="auth-input-container">
              <span className="auth-input-label">Email</span>
              <input name="email" placeholder="youremail@gmail.com" required
                {...registerLoginFrom('email')} className={`auth-input form-control ${errorsLoginFrom.email ? 'is-invalid' : ''}`}
              />
            </div>

            <div style={{ marginTop: 40, width: "100%" }}>
              <div className="auth-input-container">
                <span className="auth-input-label">Password</span>
                <input name="password" id="myInput" type="password" placeholder="*****" required
                  {...registerLoginFrom('password')} className={`auth-input form-control ${errorsLoginFrom.password ? 'is-invalid' : ''}`}
                />
              </div>
            </div>

            <div className="remember-me-container">
              <span>
                <input type="checkbox" onClick={myFunction} />
                Remember Me
              </span>
              <Link><p>Forgot Password</p></Link>
            </div>

            <button className="login-btn" type="submit">
              Login
            </button>

            <div className="crate-account-login">
              <span>Not registered yet?</span>
              <p onClick={() => navigate("/createAccount")}>Create an account</p>
            </div>

            <div className="social-media-container-login">
              <img src={Facebook} />
              <img src={Google} />
              <img src={LinkedIn} />
            </div>
          </div>
        </form>
      </div>

      {/* <div style={{ backgroundColor: "white" }}>
        <img src={Welcome} className="welcome-png" />
      </div> */}
    </div>
  );
};

export default LoginPage;
