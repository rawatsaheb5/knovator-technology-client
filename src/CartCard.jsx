import React from 'react'
import './cartCard.css'
const CartCard = ({name, price, quantity}) => {
  return (
      <div className='cart-card-container'>
          <h2>name: {name}</h2>
          <h4>price: {price}</h4>
          <p>quantity: {quantity}</p>
          <h5>subPrice: { quantity*price}</h5>
    </div>
  )
}

export default CartCard