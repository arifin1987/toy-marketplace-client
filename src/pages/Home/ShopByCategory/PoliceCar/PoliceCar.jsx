import React from 'react';
import { Link } from 'react-router-dom';

const PoliceCar = ({pol}) => {
    const {toyImage,toyName,price,rating,_id}=pol;
    return (
        <div>
            <img src={toyImage} alt="" />
            <h1 className='text-xl'>Name:{toyName}</h1>
            <p>Price:{price}</p>
            <p>rating:{rating}</p>
            <Link to={`/all-toys/${_id}`}><button className='btn btn-primary'>View Details</button></Link>
            
        </div>
    );
};

export default PoliceCar;