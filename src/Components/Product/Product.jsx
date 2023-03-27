import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img,name,price,ratings,seller} = props.product;
    
    return (
        <div className='product'>
            <img className='img-cut' src={img} alt="" />
            <div className='product-info'>
            <h3>{name}</h3>
            <h2>Price : ${price}</h2>

            <p>Manufacturer:{seller}</p>
            <p>Rating: {ratings}star</p>
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-add-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;