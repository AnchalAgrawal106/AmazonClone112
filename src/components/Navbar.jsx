import React from "react";
import './Navbar1.css';
// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="imagelogo1">
        <a href="https://www.amazon.in">
         <span> <img src="../Images/amazonLogo.png" alt="amazon logo"  className="imagelogo2"/></span>
          <span className="imagelogo3">
            <img src="../Images/dot.png" alt="dot" />
          </span>
          <span className="imagelogo4"><img className="imagelogo4" src="../Images/in logo1.jpg" alt="in logo"  /></span>
        </a></div>
        <div className="location2">
          <div>
            <img className="imagelogo5" src="../Images/gps logo1.jpg" alt="logo" />
          </div>
          <div>
          <span className="line3" >Delivering to Mumbai 400001</span>
          <div></div>
          <span className="line4">Update Location</span>
          </div>
        </div>
        <div className="searchItem3">
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <input type="text"
            className="searchBar"
            placeholder="Search Amazon.in"/>
          <div className="glassSearch">
          <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi searchI bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
          </div>
        </div>
        <div className="heading4">
          <div className="item1">
            <span className="line1">Hello,sign in</span>
            <div></div>
            <span className="line2">Account & Lists</span>
          </div>
          <div className="item2">Returns <div>& Orders</div></div>
          <div className="item3">
          <i className="cart fa fa-shopping-cart"></i>Cart</div>

        </div>
      </div>
    </>
  );
}

export default Navbar;
