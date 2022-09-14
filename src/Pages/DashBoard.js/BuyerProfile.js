import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useBuyer from '../../hooks/useBuyer';

const BuyerProfile = () => {
    const [buyers] = useBuyer();
    const [user] = useAuthState(auth);
    const buyer = buyers.filter(b => b?.email === user?.email);
    console.log(buyer);
    return (
        <div className='flex items-center justify-center h-screen mt-3'>
            <div class="card w-96 bg-base-300 shadow-2xl">
                <div class="avatar justify-center  items-center my-5 margin-auto">
                    <div class="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={buyer[0]?.img} alt='img' />
                    </div>
                </div>
                <div class="card-body items-center text-center ">
                    <h2 class="card-title  text-3xl font-bold"> {buyer[0]?.name}</h2>
                    <p className='text-xl  font-bold'>{buyer[0]?.email}</p>
                    <p className='text-xl   font-bold'>Category :<span className='ml-2'>{buyer[0]?.category}</span></p>
                </div>
            </div>
        </div>
    );
};

export default BuyerProfile;