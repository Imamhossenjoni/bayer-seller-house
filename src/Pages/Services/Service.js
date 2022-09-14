import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const navigate = useNavigate()
    const { img, name, product, vat, price, _id } = service;
    return (
        <div class="card w-96 bg-base-300 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} style={{height:'150px'}} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body text-left text-xl">
                <h2 class="card-title">{product}</h2>
                <p>Price:{price}</p>
                <p>Seller Name:{name}</p>
                <div class="card-actions">
                    <button class="btn text-white btn-sm btn-info " onClick={() => navigate(`/services/${_id}`)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;