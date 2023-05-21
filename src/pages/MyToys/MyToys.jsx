import { useLoaderData } from "react-router-dom";
import MyToysInfo from "./MyToysInfo/MyToysInfo";


const MyToys = () => {
    const mytoys = useLoaderData();
    return (
        <div>
            {
                mytoys.map(mytoy=> <MyToysInfo
                
                mytoy ={mytoy}
                ></MyToysInfo>)
            }
        </div>
    );
};

export default MyToys;