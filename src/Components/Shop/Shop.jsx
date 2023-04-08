import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

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
                savedProduct.push(addedProduct)
            }
        }
        setCart(savedProduct)

    },[products])

    const removeCart = () =>{
        deleteShoppingCart()
        setCart([])
      }
    const handleAddToCart = (product) => {
        // cart.push(product); '
        let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = carts.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart= [...carts, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = carts.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=>(<Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>))
                }
            </div>
            <div className='cart-container'>
                <Cart carts={carts} handleAddToCart={handleAddToCart} removeCart={removeCart} >
                <Link to='/orders'><button className="icon2">Review Order</button></Link>
                </Cart>
                
            </div>            
        </div>
    );
};

export default Shop;