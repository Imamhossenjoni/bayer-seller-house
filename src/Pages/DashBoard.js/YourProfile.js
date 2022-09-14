import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useSellerDetail from '../../hooks/useSellerDetail';

const YourProfile = () => {
    const [user] = useAuthState(auth);
    const [detail, setDetail] = useState({});
    const { id } = useParams()
    const [details] = useSellerDetail([]);
    console.log(details)
    if (user) {
        const info = details.filter(detail => detail?.email === user?.email);
    }
    const info=details.filter(detail=>detail?.email ===user?.email);
    console.log(info[0]?.name)
    // setDetail(info);
    // console.log(detail);
    return (
        <div className='flex items-center justify-center h-screen mt-3'>
            <div class="card w-96 bg-base-300 shadow-2xl">
                <div class="avatar justify-center  items-center my-5 margin-auto">
                    <div class="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={info[0]?.img} alt='img' />
                    </div>
                </div>
                <div class="card-body items-center text-center ">
                    <h2 class="card-title  text-3xl font-bold"> {info[0]?.name}</h2>
                    <p className='text-xl  font-bold'>{info[0]?.email}</p>
                    <p className='text-xl   font-bold'>Category :<span className='ml-2'>{info[0]?.category}</span></p>
                </div>
            </div>
        </div>
    );
};

export default YourProfile;