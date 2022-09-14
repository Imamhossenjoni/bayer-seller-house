import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useManageProduct from '../../hooks/useManageProduct';

const ManageProducts = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();

    const [products, setProducts] = useManageProduct();
    const handleDelete = id => {
        const confirm = window.confirm('Are You Sure?');
        if (confirm) {
            fetch(`http://localhost:5000/sell/${id}`,
                {
                    method: 'Delete'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data?.deletedCount) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                        alert('Your Services deleted Succesfully')
                    }
                })
            console.log('confirm')
        }

    }
    return (
        <div>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>

                {/* // products.map(part => <div className='border mb-5 border-rounded items-center justify-center ' key={part._id}>
                    //     <img style={{ height: '120px' }} className='' src={part?.img} alt=''></img>
                    //     <h5>Name:{part?.name}</h5>
                    //     <p>Price (per unit):{part?.price}</p>
                    //     <p>Available Quantity:{part?.available}</p>
                    //     <p>Minimum Order:{part?.minimum}</p>
                    //     
                    // </div>) */}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-5'>

                    <div className=''>
                        {
                            products.map(product => <div class="card w-96 bg-base-300 shadow-xl my-4">
                                <figure class="px-10 pt-10">
                                    <img src={product?.img} style={{ height: '100px' }} alt="Shoes" class="rounded-xl" />
                                </figure>
                                <div class="card-body text-left text-xl">
                                    <h2 class="card-title">{product?.product}</h2>
                                    <p>Price : {product?.price}</p>
                                    <p>Brand : {product?.brand}</p>
                                    <p>Vat : {product?.vat}</p>
                                    <p>Seller Name : {product?.name}</p>
                                    <h5><button onClick={() => handleDelete(product?._id)} className='btn btn-info text-white hover:btn-info hover:text-white btn-sm my-3 '>Delete</button></h5>
                                </div>
                            </div>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManageProducts;