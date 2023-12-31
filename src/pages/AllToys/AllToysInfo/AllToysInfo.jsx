import React from 'react';
import { Link } from 'react-router-dom';
import PrivateRoute from '../../../Routes/PrivateRoute';

const AllToysInfo = ({toy}) => {
    const{sellerName,toyImage,toyName,subcategoryName,price,availableQuantity,detailDescription, _id}=toy
    return (
        
        <tr >
            
            <th>
                
                
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {toyImage && <img src={toyImage}  />}
                    </div>
                </div>
            </td>
            
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subcategoryName}</td>
            <td>${price}</td>
            <td>{availableQuantity}</td>
            <td>{detailDescription}</td>
            
            <th>
                
                <Link to={`/all-toys/${_id}`}><button className='btn btn-primary'>View Details</button></Link>
                
            
            </th>
        </tr>
    );
};

export default AllToysInfo;