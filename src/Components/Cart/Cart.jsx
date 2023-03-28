import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const carts = props.carts;
    // console.log(carts)
    let totalValue = 0;
    for(let i=0; i<carts.length; i++){
        totalValue = totalValue + carts[i].price;
    }
    let shippingTotalValue = 0;
    for(const cart of carts){
        shippingTotalValue+=cart.shipping;
    }
    let totalTax = ((totalValue+shippingTotalValue)*7/100);
    parseFloat(totalTax.innerText)
    parseInt(totalValue.innerText)
    parseInt(shippingTotalValue.innerText)
    let totalPrice = totalValue+shippingTotalValue+totalTax;
    // console.log(totalPrice)
    return (
        <>
            <h3 className='order-name'>Order Summary</h3>
            <h3>Selected Items : {carts.length}</h3>
            <h4>Total Price : ${totalValue}</h4>
            <h4>Total Shipping Charge: ${shippingTotalValue}</h4>
            <h4>Tax: ${totalTax.toFixed(2)}</h4>
            <h3>Grand Total : ${totalPrice}</h3>
        </>
    );
};

export default Cart;