import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceDetails from './ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://assignment-server-ten.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div className='text-center mt-5 mb-6'>
                <p className='text-3xl font-semibold text-orange-600'>Services</p>
                <h1 className='text-2xl font-semibold text-white'>My Services</h1>
                <p>I provide various kinds of services.<br /> Details about my services are provided bellow.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto py-5'>
                {
                    services.slice(0, 3).map(service => <ServiceDetails

                        key={service._id}
                        service={service}
                    ></ServiceDetails>)
                }
            </div>
            <div className='text-center mt-10 mb-10'>
                <Link to='/allServices' className="btn btn-warning">See All</Link>
            </div>
        </div>
    );
};

export default Services;