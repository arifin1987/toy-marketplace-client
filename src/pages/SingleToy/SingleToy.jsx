import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const single = useLoaderData();
    console.log(single);
    return (
        <div className=' text-center'>
            <img className='mx-auto' src={single.toyImage} alt="" />
            <h1 className='text-2xl'>Toy Name:{single.toyName}</h1>
            <p className='text-xl'>Seller Name: {single.sellerName}</p>
            <p>Seller Email: {single.sellerEmail}</p>
            <p> Price: {single.price}</p>
            <p> Rating: {single.rating}</p>
            <p>Available Quantity : {single.availableQuantity}</p>
            <p>Detail Description: {single.detailDescription}</p>
            
            
            
            
        </div>
    );
};

export default SingleToy;