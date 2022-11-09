import { error } from 'daisyui/src/colors';
import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const PerServiceDetails = () => {
    const { title, img, price, description, _id } = useLoaderData()
    const { user } = useContext(AuthContext);

    const handleTicketOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const ratings = form.ratings.value;
        const comment = form.comment.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            comment,
            ratings
        };
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast("Ticket bought successfully");
                    form.reset();
                }

            })
            .catch(error => console.error(error));
    }

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
                <form onSubmit={handleTicketOrder}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 container mx-auto mb-10'>
                        <input name='firstName' type="text" placeholder="first name" className="input input-bordered w-full" />
                        <input name='lastName' type="text" placeholder="last name" className="input input-bordered w-full" />
                        <input name='ratings' type="text" placeholder="rate out of 10" className="input input-bordered w-full" />
                        <input name='email' type="text" placeholder="email" readOnly defaultValue={user?.email} className="input input-bordered w-full" />
                        <textarea name='comment' className="textarea textarea-primary" placeholder="your review"></textarea>
                        <br />
                        <input className='btn btn-outline btn-warning' type="submit" value='Buy Ticket' />
                    </div>
                    <ToastContainer className="toast toast-center mt-96"/>
                </form>
            </div>
        </div>
    );
};

export default PerServiceDetails;