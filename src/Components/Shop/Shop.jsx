import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCheckCircle,faHouse } from '@fortawesome/free-solid-svg-icons'
const Shop = () => {
    const [products,setProducts] = useState([])
    const [carts,setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])  
    const handleAddToCart = (props) =>{
        const newCart = [...carts,props];
        setCart(newCart)
    } 
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=>(<Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>))
                }
            </div>
            <div className='cart-container'>
                <h1>Carts container : {carts.length}</h1>
            </div>            
        </div>
    );
};

export default Shop;