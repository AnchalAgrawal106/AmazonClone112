import React from "react";
import "./DealBar.css";

function DealBar() {
  return (
    <>
    <div className="stripe">
        <div className="index">
            <div>
                <div className="liner1"></div>
                <div className="liner1"></div>
                <div className="liner1"></div> 
            </div>
        All</div>
                <a href="#" className="deals">Amazon miniTV</a>
                <a href="#" className="deals">Sell</a>
                <a href="#" className="deals">Best Sellers</a>
                <a href="#" className="deals">Mobiles</a>
                <a href="#" className="deals">Today's Deals</a>
                <a href="#" className="deals">Electronics</a>
                <a href="#" className="deals">Customer Service</a>
                <a href="#" className="deals">New Releases</a>
                <a href="#" className="deals amazonPrime">Prime <span>&#9662;</span> 
                </a>
                <div className="dropdown1"> <div className="hang">&#9650;</div>
                  <a href="#"><img src="../Images/amazonPrime.jpg" alt="" /></a>
                </div>
                <a href="#" className="deals">Gift Ideas</a>
                <a href="#" className="shopidea">
                <img className="img" src="../Images/shopping.jpg" alt="" />
                
                </a>
    </div>
      
    </>
  )
}

export default DealBar;
