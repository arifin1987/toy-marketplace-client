import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>

            <div className="navbar bg-lime-400 text-primary-content md:flex justify-between">
                <div>
                    <a className=" btn btn-outline text-white text-xl">CAR <span className="text-4xl text-blue-500">P</span>LANET </a>

                </div>
                <div>
                    <h1 className="text-blue-600 text-xl font-style: italic">CAR PLANET</h1>
                </div>

                <div >

                    <Link className="btn btn-active btn-link  text-white  " to='/'>Home</Link>
                    <Link className="btn btn-active btn-link  text-white  " to='/all-toys'>All Toys</Link>
                    <Link className="btn btn-active btn-link  text-white  " to='/my-toys'>My Toys</Link>
                    <Link className="btn btn-active btn-link  text-white  " to='/add-a-toy'>Add a Toy</Link>
                    <Link className="btn btn-active btn-link  text-white  " to='/blogs'>Blogs</Link>
                    <Link className="btn btn-active btn-link  text-white  " to='/login'>Login</Link>
                    <Link className="btn btn-active btn-link  text-white  " to='/signup'>Sign Up</Link>






                    












                </div>
            </div>



        </div>
    );
};

export default NavBar;