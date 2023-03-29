import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
    useEffect(()=>{
        const storedCart = getShoppingCart();
        // step-1 get id 
        const savedProduct = [];
        for(const id in storedCart){
            // console.log(id,storedCart)
            // step -2 : get the product using id 
        const addedProduct  = products.find(product=>(product.id === id ))
            if(addedProduct){
                // step-3 : get quantity of  the product
                // console.log(addedProduct)
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                console.log(addedProduct)
                savedProduct.push(addedProduct)
            }
        }
        setCart(savedProduct)

    },[products])
    const handleAddToCart = (props) =>{
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