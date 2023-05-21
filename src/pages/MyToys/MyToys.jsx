import { useLoaderData } from "react-router-dom";
import MyToysInfo from "./MyToysInfo/MyToysInfo";
import Swal from 'sweetalert2'
import { useState } from "react";


const MyToys = () => {
    const mytoys = useLoaderData();
    const[myCollection,setMyCollection]= useState([])
    


    const handleDelete = id=>{
        const confirm = Swal.fire('Are you sure you want to delete?');
        if(confirm){
            fetch(`http://localhost:5000/myCollection/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount >0){
                    Swal.fire('Successfully deleted');
                    const remaining = myCollection.filter(collect=>collect._id !==id);
                    setMyCollection(remaining);
                }
            })
        }
    }
    return (
        <div>
            
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Toy Image</th>
                            <th>toyName</th>
                            <th>sellerName</th>
                            
                            <th>subcategoryName</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>availableQuantity</th>
                            <th>detailDescription</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mytoys.map(mytoy => <MyToysInfo
                            handleDelete={handleDelete}
                            mytoy={mytoy}

                            ></MyToysInfo> )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;