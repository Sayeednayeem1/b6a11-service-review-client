import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login2 from '../../assets/Images/login.png';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const { login } = useContext(AuthContext);
    const location = useLocation();
    const Navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value; 

        login(email, password)
        .then( result =>{
            const user = result.user;
            console.log(user);
            Navigate(from, {replace: true});
        })
        .catch( error => console.error(error));

    }
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col grid gap-8 md:grid-cols-2">
                <div className="text-center lg:text-left rounded">
                    <img className='w-3/4' src={login2} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full py-10 max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold mx-auto">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <label className="label">
                                <a href="/"> forgot password? </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value='Login' />
                        </div>
                    </form>
                    <p className='mx-auto'>New to our website? Please <Link className='text-yellow-600' to='/signup'>SignUp</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;