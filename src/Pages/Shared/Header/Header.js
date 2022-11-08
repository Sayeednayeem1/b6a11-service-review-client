import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-primary text-primary-content p-5">
            <Link to='/' className="font-bold text-2xl mr-6 btn btn-outline btn-accent border-none">Dr. Chowdhury Walid</Link>
            <Link className='font-semibold text-2xl mr-6 btn btn-outline btn-success border-none' to='/home'>Home</Link>
            <Link className='font-semibold text-2xl mr-6 btn btn-outline btn-success border-none' to='/blog'>Blog</Link>
            <Link className='font-semibold text-2xl mr-6 btn btn-outline btn-success border-none' to='/login'>login</Link>
            <Link className='font-semibold text-2xl mr-6 btn btn-outline btn-success border-none' to='/signup'>SignUp</Link>
        </div>
    );
};

export default Header;