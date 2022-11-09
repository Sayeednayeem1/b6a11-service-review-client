import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const PerServiceDetails = () => {
    const { title, img, price, description, _id } = useLoaderData()
    const {user} = useContext(AuthContext);
    
    
    
    return (
        <div>
            <div className="hero bg-base-200 mx-auto container mt-10 mb-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className='font-bold text-orange-600 mt-5'>${price}</p>
                        <p className="py-6">{description}</p>
                    </div>
                </div>
            </div>
            <div>
                <form>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 container mx-auto mb-10'>
                        <input name='firstName' type="text" placeholder="first name" className="input input-bordered w-full" />
                        <input name='lastName' type="text" placeholder="last name" className="input input-bordered w-full" />
                        <input name='ratings' type="text" placeholder="rate out of 10" className="input input-bordered w-full" />
                        <input name='email' type="text" placeholder="email" readOnly defaultValue={user?.email} className="input input-bordered w-full" />
                        <textarea name='comment' className="textarea textarea-primary" placeholder="your review"></textarea>
                        <br/>
                        <input className='btn btn-outline btn-warning' type="submit" value='Buy Ticket' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PerServiceDetails;