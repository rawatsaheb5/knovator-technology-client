import React, { useState } from "react";
import { useCart } from "./CartContext";
import axios from "axios";
import "./cart.css";
import CartCard from "./CartCard";

const Cart = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");

  const { cart, removeFromCart, clearCart, placeOrder } = useCart();

  //console.log("cart => ", cart);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.quantity; 
    });
    return totalPrice;
  };

  const handlePlaceOrder = async () => {
    try {
      const res = await axios.post("http://localhost:8000/place-order", {
        firstName,
        lastName,
        address,
        order: cart,
      });
      placeOrder();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-container-title">Cart Page</h2>
      <div className="cart-total-price">
        Total Price : {calculateTotalPrice()}
      </div>
      <ul className="cart-item-list">
        {cart.map((item) => (
          <li key={item.id}>
            <CartCard
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          </li>
        ))}
      </ul>
      <div className="form-div">
        <h2>User Form</h2>
        <form className="form-data">
          <div className="input-div">
            <label className="label" htmlFor="firstName">First Name:</label>
            <input className="input"
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-div">
            <label className="label" htmlFor="lastName">Last Name:</label>
            <input  className="input"
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-div">
            <label className="label" htmlFor="address">Address:</label>
            <textarea  className="input"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="cart-container-btn-group">
        <button onClick={handlePlaceOrder}>Place Order</button>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
