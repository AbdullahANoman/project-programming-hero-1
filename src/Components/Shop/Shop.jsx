import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    const [carts,setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])  
    const handleAddToCart = (props) =>{
        console.log(props)
        const newCart = [...carts,props];
        setCart(newCart)
        addToDb(props.id)
    } 
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=>(<Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>))
                }
            </div>
            <div className='cart-container'>
                <Cart carts={carts} handleAddToCart={handleAddToCart}></Cart>
            </div>            
        </div>
    );
};

export default Shop;