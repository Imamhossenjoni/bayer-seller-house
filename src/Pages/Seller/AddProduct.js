import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const handleAdd = event => {
        event.preventDefault();
        const product = event.target.product?.value;
        const sellPrice = event.target.price.value;
        const email = event.target.email.value;
        const name = event.target.name?.value;
        const img = event.target.img.value;
        const vat = parseInt(sellPrice * 0.15);
        const brand = event.target.brand?.value;
        const productInfo = { product, name, sellPrice, email, img, vat, brand };
        fetch('http://localhost:5000/sell', {
            method: 'Post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo),
        })
            .then(res => res.json())
            .then(data => {
                alert('Your Product added');
                console.log(data);
                event.target.reset();
            })

    }
    return (
        <div>
            <div className='flex items-center justify-center h-screen py-6'>
                <div class="card w-96 bg-base-100 shadow-2xl">
                    <h2 className='my-3 text-2xl font bold text-info'>Add Your Product</h2>
                    <form onSubmit={handleAdd}>
                        <input type="text" placeholder="Enter Product Name" name='name' class="input input-bordered mt-4 w-full max-w-xs" required /><br />
                        <input type="number" placeholder="Enter Product Price" name='price' class="input input-bordered mt-4 w-full max-w-xs" required /><br />
                        <input type="text" placeholder="Enter Your Name" name='name' class="input input-bordered mt-4 w-full max-w-xs" required /><br />
                        <input type="email" placeholder="" name='email' value={user?.email} class="input input-bordered mt-4 w-full max-w-xs" required /><br />
                        <input type="text" placeholder="Enter Your Photo url" name='img' class="input input-bordered mt-4 w-full max-w-xs" required /><br />
                        <input type="text" placeholder="Enter Your Brand Name" name='brand' class="input input-bordered mt-4 w-full max-w-xs" required /><br />
                        <input type="submit" value='Add Product' placeholder="Enter Your Name" class="input input-bordered btn-info text-white text-xl my-4 w-full max-w-xs" /><br />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddProduct;