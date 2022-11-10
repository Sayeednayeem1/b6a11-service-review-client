import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import login from '../../assets/Images/login.png';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {

    const { createUser, googleLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const location = useLocation();
    const Navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Navigate(from, { replace: true });
            })
            .catch(error => console.error(error));
    };

    const handleGoogleSignUp = () =>{
        googleLogin(googleProvider)
        .then( result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
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
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value='Register' />
                            </div>
                        </form>
                        <div className='text-center'>
                            <button onClick={handleGoogleSignUp} className="btn btn-primary mb-5 px-20"> <FaGoogle className='text-3xl mr-4'></FaGoogle> Google SignUp</button>
                        </div>
                        <p className='mx-auto'>Already have an account? Please<Link className='text-yellow-600' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;