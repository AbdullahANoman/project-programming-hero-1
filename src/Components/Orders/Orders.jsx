import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import Review from "../ReviewPage/Review";
import './Order.css'
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
const Orders = () => {
    const products = useLoaderData();
    const [cart,setCart] = useState(products)
    const handleDelete = id =>{
       const remaining = cart.filter(pd=> pd.id !== id);
       setCart(remaining);
       removeFromDb(id);
    }
    const removeCart = (id) =>{
      deleteShoppingCart()
      setCart([])
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
        <Cart carts={cart} removeCart={removeCart}>
        <Link to='/checkOut'><button className="icon2">Proceed CheckOut</button></Link>
        </Cart>
        
      </div>
    </div>
  );
};

export default Orders;
