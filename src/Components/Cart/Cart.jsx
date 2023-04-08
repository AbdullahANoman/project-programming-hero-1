import React, { Children } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { TrashIcon } from '@heroicons/react/24/solid'
const Cart = ({ carts,removeCart,children }) => {
  // const cart = props.cart; // option 1
  // const {cart} = props; // option 2

  // console.log(cart);
  console.log(children)
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of carts) {
    // if(product.quantity === 0){
    //     product.quantity = 1;
    // }
    // product.quantity = product.quantity || 1;

    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (totalPrice * 7) / 100;

  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <>
      <div className="cart">
        <h4 className="order-name">Order Summary</h4>
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Shipping: ${totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>

        <button onClick={removeCart} className="clear-cart-btn"><span>Clear Cart </span> <TrashIcon className="icon1" />   </button>
        {children}
      </div>
    </>
  );
};

export default Cart;
