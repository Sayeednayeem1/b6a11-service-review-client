import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/Images/login.png';

const SignUp = () => {


    const handleSignUp = event => {
        event.preventDefault();
    }
    return (
        <div>
            <div className="hero my-20">
                <div className="hero-content flex-col grid gap-8 md:grid-cols-2">
                    <div className="text-center lg:text-left rounded">
                        <img className='w-3/4' src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full py-10 max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold mx-auto">Register</h1>
                        <form onSubmit={handleSignUp} className="card-body">
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
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value='Register' />
                            </div>
                        </form>
                        <p className='mx-auto'>Already have an account? Please<Link className='text-yellow-600' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;