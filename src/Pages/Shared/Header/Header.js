import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () =>{
        logOut()
        .then()
        .catch( error => console.error(error));
    }

    const navbarItems = <>
        <li><Link className='font-semibold text-2xl mr-6 ' to='/home'>Home</Link></li>
        <li><Link className='font-semibold text-2xl mr-6 ' to='/blog'>Blog</Link></li>
        
        {
            user?.email ?
                <>
                    <li><Link className='font-semibold text-2xl mr-6 btn btn-outline btn-success border-none' to='/reviews'>Reviews</Link></li>
                    <li>
                        <button onClick={handleLogout} className='border-none btn-outline btn-ghost'>Logout</button>
                    </li>
                </>
                
                :
                <>
                    <li><Link className='font-semibold text-2xl mr-6 ' to='/login'>login</Link></li>
                    <li><Link className='font-semibold text-2xl mr-6 ' to='/signup'>SignUp</Link></li>
                </>
        }
    </>
    return (
        <div className="navbar container mx-auto py-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Dr. Walid</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navbarItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;
