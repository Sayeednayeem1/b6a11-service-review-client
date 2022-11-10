import React from 'react';

const AllServicesDetails = ({ user }) => {
    const { title, img, price, description } = user;
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
        </div>
    );
};

export default AllServicesDetails;