import React, { useEffect, useState } from 'react';

const Review = ({order}) => {
    const {serviceName,_id, price, customer, email, comment, ratings} = order;
    const [orderService, setService] = useState({});

    // useEffect(() =>{
    //     fetch('http://localhost:5000/services/${service}')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [])



    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure you wanna delete? this Order?');
        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
    }
    
    
    return (
        <tr>
            
            <td>
                <div className="flex items-center space-x-3">
                    
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">${price}</div>
                    </div>
                </div>
            </td>
            <td>
                {customer}
                <br />
                <span className="badge badge-ghost badge-sm">{comment}</span>
            </td>
            <td>Ratings: {ratings}</td>
            <th>
                <button className="btn btn-ghost btn-xs">{email}</button>
            </th>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
        </tr>
    );
};

export default Review;