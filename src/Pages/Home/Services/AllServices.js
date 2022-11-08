import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServicesDetails from './AllServicesDetails';

const AllServices = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            {
                users.map(user => <AllServicesDetails
                
                    key={user._id}
                    user={user}
                
                ></AllServicesDetails>)
            }
        </div>
    );
};

export default AllServices;