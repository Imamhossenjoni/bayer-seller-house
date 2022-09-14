import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useSellerProductDetails from '../../hooks/useSellerProductDetails';

const ProductBuyForm = () => {
    const { id } = useParams();
    const [detail] = useSellerProductDetails(id);
    console.log(detail);
    const [user] = useAuthState(auth);
    const handleProductBuy = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const product = event.target.product?.value;
        const price = event.target.price.value;
        const vat = parseInt(price * 0.05);
        const mobile = event.target.mobile?.value;
        const address = event.target.address?.value;
        const orderInfo={name,email,product,price,vat,mobile,address}
        fetch(`http://localhost:5000/order`,{
            method:'Post',
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(orderInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(orderInfo,)

        })

    }
    return (
        <div>
            <div className='flex justify-center'>
                <div class="card w-96 bg-base-300 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={detail?.img} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body text-left text-xl">
                        <h2 class="card-title">{detail?.product}</h2>
                        <p>Price:{detail?.price}</p>
                        <p>Brand:{detail?.brand}</p>
                        <p>Seller Name:{detail?.name}</p>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <form onSubmit={handleProductBuy}>
                    <input type="text" name='name' placeholder="Enter Your Name..." className="input input-bordered input-lg w-full max-w-xs  my-2 " required /><br />
                    <input type="text" name='product' placeholder="Enter Your Prodcut" value={detail?.product} className="input input-bordered input-lg w-full max-w-xs my-2 " required /><br />
                    <input type="number" name='price' placeholder="Enter Your Name..." value={detail?.price} className="input input-bordered input-lg w-full max-w-xs my-2 " required /><br />
                    <input type="email" name='email' value={user?.email} placeholder="Enter Your Name..." className="input input-bordered input-lg w-full max-w-xs my-2  " required /><br />
                    <input type="text" name='vat' placeholder="" value={parseInt(detail?.price * .05)} className="input input-bordered input-lg w-full max-w-xs my-2 " required /><br />
                    <input type="number" name='mobile' placeholder="Enter Your Mobile Number..." className="input input-bordered input-lg w-full max-w-xs my-2 " required /><br />
                    <input type="text" name='address' placeholder="Enter Your Address" className="input input-bordered input-lg w-full max-w-xs my-2 " required /><br />
                    <input type="submit" value='Confirm' placeholder="Enter Your Name..." className="input input-bordered input-lg w-full max-w-xs  mt-2" required /><br />
                </form>
            </div>
        </div>

    );
};
export default ProductBuyForm;