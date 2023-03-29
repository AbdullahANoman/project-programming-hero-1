import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {img,name,price,ratings,seller,quantity} = props.product;
    console.log(props)
    return (
        <div className='product'>
            <img className='img-cut' src={img} alt="" />
            <div className='product-info'>
            <h3>{name}</h3>
            <h2>Price : ${price}</h2>
            <p>Manufacturer:{seller}</p>
            <p>Rating: {ratings}star</p>
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-add-cart'>Add To Cart <FontAwesomeIcon icon={faCartShopping} />  </button>
        </div>
    );
};

export default Product;