import React from 'react';

const MyToysInfo = ({ mytoy,handleDelete }) => {
    const { _id, photo, carName, sellerName, subCategory, price, rating, quantity, description } = mytoy
    return (

        <tr >
            
            <th>
                
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {photo && <img src={photo}  />}
                    </div>
                </div>
            </td>
            <td>{carName}</td>
            <td>{sellerName}</td>
            <td>{subCategory}</td>
            <td>${price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <td>{description}</td>
            <th>
            <button onClick={() => handleUpdate(_id)} className="btn btn-primary">Update</button>
            </th>
        </tr>


    );
};

export default MyToysInfo;