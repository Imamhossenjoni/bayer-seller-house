import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    //
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    //
    const [handleError, setHandleError] = useState('')
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const pass = event.target.password.value;
        const confirmPass = event.target.confirmPass.value;
        if (pass !== confirmPass) {
            setHandleError("Your Pass didn't match!");
            // console.log(pass, confirmPass, handleError)
            return;
        };
        createUserWithEmailAndPassword(email, confirmPass);
        event.target.reset();
    }
    const navigate=useNavigate();
    if(user || gUser){
        navigate('/home')
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-2xl py-8">
                <h2 className='text-3xl font-bold text-info my-4 '>Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Enter Your Name" name='name' class="input input-bordered mt-4 w-full max-w-xs" /><br />
                    <input type="email" placeholder="abc @gmail.com" name='email' class="input input-bordered mt-4 w-full max-w-xs" /><br />
                    <input type="password" placeholder="Enter Your Password" name='password' class="input mt-4 input-bordered w-full max-w-xs" /><br />
                    <input type="password" placeholder="Confirm Your Password" name='confirmPass' class="input mt-4 input-bordered w-full max-w-xs" /><br />
                    {handleError}
                    <input type="submit" value='Sign Up' placeholder="" class="input mt-4 input-bordered w-full max-w-xs btn-info text-white font-bold text-xl" /><br />
                </form>
                <div class="divider">OR</div>
                <span className='text-xl my-3'>Already have an account ? <Link className='text-info text-xl font-bold' to='/login'>Please Login</Link></span>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline px-4'>Continue to Google</button>
            </div>
        </div>
    );
};

export default Register;