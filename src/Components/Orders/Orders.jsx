import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
    const products = useLoaderData();
    console.log(products)
  return (
    <div className="shop-container">
      <div className="products-container">
        <h2>I am order page </h2>
      </div>
      <div className="cart-container">
        <Cart carts={[]}></Cart>
      </div>
    </div>
  );
};

export default Orders;
