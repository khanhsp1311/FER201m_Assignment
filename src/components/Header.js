import React, { useContext, useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContent } from "../App";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";



const Header = () => {
  // const[check]
  const { setUser } = useContext(UserContent);
  // <Routes>
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/register" element={<Register />} />
  //     </Routes>
const navigate = useNavigate();
  function login(){
    navigate('/login');
  }
  function signUp(){
    navigate('/register');
  }
  return (

    <div>
      <header className="heading">
        <nav id="navbar">
          <ul className="menu">
            <li id="logo" title="Made by Johnny Stiwerson">
              <p>PHIM HAY</p>
            </li>
            <li
              id="trigram"
              tabindex="-1"
              title="CLICK ME!&#10I WORK WITHOUT JS :)"
            >
              <div>&#9776</div>
            </li>
            <span id="responsive-menu">
              <ul className="menu">
                <li className="menu-option">
                  <p><Link to="/" style={{ color: "white", textDecoration: "none" }}>Trang chủ</Link></p>
                </li>
                <li id="sign-in">
                  <button  onClick={login}>Đăng Nhập</button>
                  {/* <p> */}
                  {/* <Link to="/login">Đăng nhập</Link> */}
                  {/* </p> */}
                </li>
                <li id="sign-up">
                <button onClick={signUp}>Đăng Ký</button>

                  {/* <p>
                  <Link to="/register">Đăng kí</Link>
                  </p> */}
                </li>
              </ul>
            </span>
          </ul>
        </nav>
      </header>
      
    </div>

  );
};

export default Header;
