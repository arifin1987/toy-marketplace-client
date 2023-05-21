import { useLoaderData } from "react-router-dom";
import AllToysInfo from "./AllToysInfo/AllToysInfo";


const AllToys = () => {
    const toys = useLoaderData();
    console.log(toys);
    return (
        <div>
            
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               
                            </th>
                            <th>Toy Image</th>
                            <th>sellerName</th>
                            <th>toyName</th>
                            <th>subcategoryName</th>
                            <th>Price</th>
                            <th>availableQuantity</th>
                            <th>detailDescription</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <AllToysInfo
                            toy={toy}
                            
                            ></AllToysInfo>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;