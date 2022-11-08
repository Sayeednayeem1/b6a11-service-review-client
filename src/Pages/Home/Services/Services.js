import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('test.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div className='text-center'>
                <p className='text-1xl font-semibold text-orange-600'>Services</p>
                <h1 className='text-2xl font-semibold text-white'>Our Services</h1>
                <p>We provide various kinds of services.<br /> Details about our services are provided bellow.</p>
            </div>
            <div>
                {
                    services.map(service => <ServiceDetails

                        key={service._id}
                        service={service}
                    ></ServiceDetails>)
                }
            </div>
        </div>
    );
};

export default Services;