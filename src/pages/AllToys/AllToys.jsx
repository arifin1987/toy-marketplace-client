import { useLoaderData } from "react-router-dom";
import AllToysInfo from "./AllToysInfo/AllToysInfo";


const AllToys = () => {
    const toys = useLoaderData();
    console.log(toys);
    return (
        <div>
            {
                toys.map(toy=> <AllToysInfo
                toy={toy}
                
                ></AllToysInfo>)
            }
        </div>
    );
};

export default AllToys;