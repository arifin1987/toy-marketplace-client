import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout=()=>{
        logOut()
        .then(result=>{})
        .catch(error=> console.log(error));
    }
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
                   
                    <Link className="btn btn-active btn-link  text-white  " to='/signup'>Sign Up</Link>


                    {
                        user ? <button onClick={handleLogout}>Logout</button> : <Link to='/login'><button>Login</button> </Link>
                    }

                    {
                        user && <div className="tooltip" data-tip={user.displayName}>
                            <img src={user.photoURL} className='rounded-full w-2/4' />
                        </div>
                    }
















                </div>
            </div>



        </div>
    );
};

export default NavBar;