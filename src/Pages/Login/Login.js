import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/Images/login.png';

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault();
    }
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col grid gap-8 md:grid-cols-2">
                <div className="text-center lg:text-left rounded">
                    <img className='w-3/4' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold mx-auto">Please Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Don't Have an account? Please signup </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value='Login' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;