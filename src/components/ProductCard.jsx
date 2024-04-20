import React from "react";
import "./ProductCard1.css";
import { Link } from "react-router-dom";
import "./BoatProductDetail";
// import BoatProductDetail from "./BoatProductDetail";

function ProductCard({ images, msg, floorMsg }) {
  return (
    <>
      <div className="cardHead">
        <div className="card">
          <div className="adHead">{msg}</div>
          {images.map((image, index) => (
            <div key={index} className="inlineCard">
              <Link key={image.id} to={`/component/${image.id}`}>
              <img
                className="inlineImg"
                src={image.imageUrl}
                alt={`Image ${index}`}
              />
              <p className="adText">{image.text}</p></Link>
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
