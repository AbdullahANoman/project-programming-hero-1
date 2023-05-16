import React from 'react';
import './Review.css'
import { TrashIcon } from '@heroicons/react/24/solid'

const Review = ({product,handleDelete}) => {
    const {_id,img,name,price,quantity,shipping} = product;
    return (
        <div className='review'>
            <div className='review-item'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <p className='name'>{name}</p>
                    <p>Price : <span>${price}</span></p>
                    <p>Shipping Charge : <span>${shipping}</span></p>
                    <p>Quantity : <span>{quantity}</span></p>
                </div>
            </div>
            <div>
                <button onClick={()=>handleDelete(_id)} className='delete-btn'><TrashIcon className="icon" /></button>
            </div>
        </div>
    );
};

export default Review;