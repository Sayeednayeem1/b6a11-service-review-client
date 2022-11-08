import React from 'react';

const AllServicesDetails = ({ user }) => {
    const { title } = user;
    return (
        <div>
            <h4>{title}</h4>
        </div>
    );
};

export default AllServicesDetails;