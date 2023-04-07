import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import Review from "../ReviewPage/Review";
import './Order.css'
import { removeFromDb } from "../../utilities/fakedb";
const Orders = () => {
    const products = useLoaderData();
    const [cart,setCart] = useState(products)
    const handleDelete = id =>{
       const remaining = cart.filter(pd=> pd.id !== id);
       setCart(remaining);
       removeFromDb(id);
    }
    // console.log(products)
  return (
    <div className="shop-container">
      <div className="reviews-container">
        {
          cart.map(product=>(
            <Review key={product.id} product={product} handleDelete={handleDelete} ></Review>
          ))
        }
      </div>
      <div className="cart-container">
        <Cart carts={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
