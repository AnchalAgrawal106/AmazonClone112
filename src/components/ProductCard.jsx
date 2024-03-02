import React from "react";
import "./ProductCard1.css";
import { Link } from "react-router-dom";

function ProductCard({ images, msg, floorMsg }) {
  return (
    <>
      <div className="cardHead">
        <div className="card">
          <div className="adHead">{msg}</div>
          {images.map((image, index) => (
            
            <div key={index} className="inlineCard">
              <a href="#">
              {/* <Link key = {image.id} to={`/product/${image.id}`}></Link> */}
                <img
                  className="inlineImg"
                  src={image.imageUrl}
                  alt={`Image ${index}`}
                />
                <p className="adText">{image.text}</p>
                {/* <Link/> */}
                </a>
            </div>
            
          ))}
          <span className="floorMsg">
            <a href="#">{floorMsg}</a>
          </span>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
