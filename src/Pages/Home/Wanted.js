import React from 'react';
import { useNavigate } from 'react-router-dom';

const Wanted = () => {
    const navigate=useNavigate();
    return (
        <div className='my-5 bg-neutral py-7 grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1'>
            <p className='text-5xl text-info font-bold py-3'>What are You want to be?</p>
            <h2 className='py-2 text-3xl text-white '> <button className='btn btn-info text-xl text-white' onClick={() => navigate('/seller')}>Seller </button> or <button className='btn btn-info text-xl text-white' onClick={() => navigate('/buyer')}>Buyer</button>
            </h2>
        </div>
    );
};

export default Wanted;