import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const OrderList = () => {
    const [user] = useAuthState(auth);
    console.log(user.email)
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user?.email}`,{
                method:'GET',
            })
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])
    //handleDelete
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/order/${id}`, {
                method: 'Delete'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    alert('Delete Successfully');
                })
        }
    }

    return (
        <div>
            <h2 className='text-red-500 font-bold text-2xl py-3'>{orders.length > 0 ? `Your Total Order: ${orders.length}` : 'Sorry, You have no order item yet'}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Order/No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Order Item</th>
                            <th>Vat</th>
                            <th>Total Bill</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{order?.name}</td>
                            <td>{order?.email}</td>
                            <td>{order?.product}</td>
                            <td>{order?.vat}</td>
                            <td>{(order.price && !order?.paid) && <Link to={`/dashboard/payment/${order?._id}`}><button className='btn btn-xs'>Pay Now</button></Link>}
                                {(order?.total && order.paid) && <span className='text-success'>Paid</span>}
                            </td>
                            <td>{order?.mobile}</td>
                            <td>{order?.address}</td>
                            <td><button className='btn btn-sm' onClick={handleDelete(order?._id)}>Delete</button></td>

                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;