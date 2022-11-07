import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-primary text-primary-content p-5">
            <a href='/' className="btn btn-ghost normal-case text-xl">daisyUI</a>
            <Link className='font-bold text-2xl mr-4' to='/home'>Home</Link>
            <Link className='font-bold text-2xl mr-4' to='/blog'>Blog</Link>
        </div>
    );
};

export default Header;