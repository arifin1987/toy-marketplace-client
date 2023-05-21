import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const UpdatedToy = () => {
    const {user}= useContext(AuthContext);
    const toys = useLoaderData()
    const { _id, photo, carName, sellerName, subCategory, price, rating, quantity, description } = toys
    const handleUpdateToy= (event)=>{
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const carName = form.carName.value;
        const sellerName = form.sellerName.value;
        const email = user?.email;
        const subCategory= form.subCategory.value;
        const price= form.price.value;
        const rating= form.rating.value;
        const quantity= form.quantity.value;
        const description= form.description.value;
        
        const updatedToys = {
          photo,carName,sellerName,email,subCategory,price,rating,quantity,description
        }
        console.log(updatedToys)
        fetch(`http://localhost:5000/myCollection/${_id}`,{
        method: 'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updatedToys)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
          Swal.fire('Toy updated successfully')
        }
      })
      }
    
    return (
        
        <div>
            <form onSubmit={handleUpdateToy}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Picture Url</span>
                </label>
                <input type="text" name="photo" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Car Name</span>
                </label>
                <input type="text" name = "carName" className="input input-bordered" />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input type="text" name="sellerName" defaultValue={user?.displayName} className="input input-bordered" />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub Category</span>
                </label>
                <input type="text" name="subCategory" className="input input-bordered" />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" name="price" className="input input-bordered" />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input type="text" name="rating" className="input input-bordered" />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input type="text" name="quantity" className="input input-bordered" />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Detail Description</span>
                </label>
                <input type="text" name="description" className="input input-bordered" />

              </div>
              <div className="form-control mt-6">
                <input className="bg-blue-400 rounded text-white p-4" type="submit" value="Update Toy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

        </div>
    );
};

export default UpdatedToy;