import React from 'react';
import useSellerServices from '../../hooks/useSellerServices';
import Service from './Service';

const Services = () => {
    const [services,setServices]=useSellerServices();


    return (
        <div className='px-12'>
            <h2 className='my-6 font-bold text-4xl underline text-info'>Available Seller Services</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-4'>
                {
                    services.map(service=><Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;