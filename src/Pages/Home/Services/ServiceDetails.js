import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = ({service}) => {
    const {img, _id, title, description, price} = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='font-semibold text-yellow-600'>${price}</p>
                    <p>{description.slice(0,100)}...</p>
                    <div className="card-actions justify-end">
                        <Link to={`/perServiceDetails/${_id}`} className='btn btn-primary'>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;