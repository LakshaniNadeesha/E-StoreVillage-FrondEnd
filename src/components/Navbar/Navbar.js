import React from "react";
import "./navbar.css";
import Logo from "../../assests/images/Logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthUser, useIsAuthenticated, useSignOut } from "react-auth-kit";
const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated()
  const signOut = useSignOut()
  
  const router = useLocation();
  const auth = useAuthUser()
  const myadmin = () => {
    if(auth().role==='SuperAdmin'){
      navigate('/categories');
    }else if(auth().role==='Seller'){
      navigate('/myshop');
    }else if(auth().role==='Manager'){
      navigate('/categories');
    }else{
      navigate('/product');
    }
  }

  let color = "white";

  if (
    router.pathname.match(/login/) ||
    router.pathname.match(/createAccount/) || router.pathname.match(/ProductsAll/)
  ) {
    color = "#DEE1EF";
  }

  return (
    <div>
      <nav style={{ backgroundColor: color }}>
        <div className="logo">
          <img src={Logo} />
        </div>
        <ul>
          <li>
            <Link to={"/"}>
              <a href="" className={`${router.pathname === "/" && "active"}`}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link to={"/productAll"}>
              <a
                href=""
                className={`${router.pathname.match(/ProductsAll/) !== null && "active"
                  }`}>
                Products
              </a>
            </Link>
          </li>
          <li>
            <Link to={"/shopAll"}>
              <a
                href=""
                className={`${router.pathname.match(/ShopAll/) !== null && "active"
                  }`}>
                Shops
              </a>
            </Link>
          </li>
          {!isAuthenticated() ?
            <><li>
              <Link to={"/login"}>
                <a
                  href=""
                  className={`${router.pathname.match(/login/) !== null && "active"}`} >
                  Login
                </a>
              </Link>
            </li><li>
                <Link to={"/createAccount"}>
                  <a
                    href=""
                    className={`${router.pathname.match(/createAccount/) !== null && "active"}`}>
                    Signup
                  </a>
                </Link>
              </li></>
            : <>

              <li>
               
                  <a onClick={myadmin}>
                    My Account
                  </a>
               
              </li>


              <li>
                <a
                  href=""
                  onClick={() => signOut()}
                >
                  Logout
                </a>
              </li></>
          }
        </ul>
      </nav>
      <div className="nav-space"></div>
    </div>
  );
};

export default Navbar;
