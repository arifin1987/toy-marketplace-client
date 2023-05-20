import React from 'react';
import { Link } from 'react-router-dom';

const AllToysInfo = ({toy}) => {
    const{sellerName,toyName,subcategoryName,price,availableQuantity,detailDescription, _id}=toy
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>

                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                           
                            <td>{sellerName}</td>
                            <td>{toyName}</td>
                            <td>{subcategoryName}</td>
                            <td>{price}</td>
                            <td>{availableQuantity}</td>
                            <Link to={`/all-toys/${_id}`}><button className='btn btn-primary'>View Details</button></Link>
                            
                        </tr>
                       
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default AllToysInfo;