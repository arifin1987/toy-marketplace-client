import React from 'react';

const PoliceCar = ({pol}) => {
    const {toyImage,toyName,price,rating}=pol;
    return (
        <div>
            <img src={toyImage} alt="" />
            <h1 className='text-xl'>Name:{toyName}</h1>
            <p>Price:{price}</p>
            <p>rating:{rating}</p>
            <button className='btn btn-primary'>View Details</button>
            
        </div>
    );
};

export default PoliceCar;