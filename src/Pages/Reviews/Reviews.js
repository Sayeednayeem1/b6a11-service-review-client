import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Review from './Review';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-server-ten.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure you wanna delete? this Order?');
        if(proceed){
            fetch(`https://assignment-server-ten.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrders(remaining);
                }
            })
        }
    };

    const handleUpdate = id =>{
        fetch(`https://assignment-server-ten.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'approved'})
        })
        .then( res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                const remaining = orders.filter(odr => odr._id !== id);
                const settling = orders.find(odr => odr._id === id);
                settling.status = "Approved"
                
                const newOrders = [settling, ...remaining];
                setOrders(newOrders);
            }

        })
    }
    


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
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <Review
                            
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            
                            ></Review>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reviews;