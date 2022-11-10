import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Review from './Review';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])


    return (
        <div className='container mx-auto mt-20 mb-20'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Your Order</th>
                            <th>Name</th>
                            <th>Ratings</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <Review
                            
                                key={order._id}
                                order={order}
                            
                            ></Review>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reviews;