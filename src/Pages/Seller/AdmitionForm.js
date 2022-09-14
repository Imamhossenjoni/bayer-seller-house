import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AdmitionForm = () => {
    const [user] = useAuthState(auth);
    const handleAdmit = event => {
        event.preventDefault();
        const name = event.target.name?.value;
        const email = event.target?.email?.value;
        const category = event?.target?.category?.value;
        const img = event?.target?.img?.value;
        const sellerInfo={name,email,category,img};
        console.log(sellerInfo);
        fetch(`http://localhost:5000/seller`,{
            method:'Post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(sellerInfo),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            event.target.reset();
        })
        
  
    }
    return (
        <div>
            <h2 className='text-primary text-3xl  text-center mt-6'>WelCome Mr/Ms. Hopefully this platform will be helpful and suitable for sell your products</h2>
            <h2 className='text-3xl font-bold text-info mt-3'>Your Selected Catagory is: Seller</h2>
            <div className='flex justify-center items-center h-screen'>
                <div class="card w-96 bg-base-100 shadow-2xl py-4">
                    <h2 className='text-3xl font-bold text-info my-4 '>Please Fill Up Form  </h2>
                    <form onSubmit={handleAdmit}>
                        <input type="text" placeholder="Enter Your Name" name='name' class="input input-bordered mt-4 w-full max-w-xs" required /><br />
                        <input type="email" placeholder="abc @gmail.com" name='email' value={user?.email} class="input input-bordered mt-4 w-full max-w-xs" required /><br />
                        <input type="text" placeholder="Select Your Catagory" value='seller' name='category' class="input mt-4 input-bordered w-full max-w-xs" required /><br />
                        <input type="text" placeholder="Enter Your img url" name='img'  class="input mt-4 input-bordered w-full max-w-xs" required /><br />
                        <input type="submit" value='Admission' placeholder="" class="input mt-4 input-bordered w-full max-w-xs btn-info text-white font-bold text-xl" /><br />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdmitionForm;