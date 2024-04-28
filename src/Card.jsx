import React from "react";
import { useCart } from "./CartContext";
import "./card.css";

const Card = ({ image, description, price, name,id }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    
    const product = {
      name,
      image,
      description,
      price,
      id
    };

    
    addToCart(product);
  };

  return (
    <div className="card-container">
      <div className="card-image">
        <img className="card-div-image" src={image} alt={name} />
      </div>
      <div className="content-div">
        <h4 className="item-name"> item: {name}</h4>
        <p className="item-desc">{description}</p>
        <p className="item-price">price: {price}</p>
      </div>
      <button className="add-btn" onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default Card;
