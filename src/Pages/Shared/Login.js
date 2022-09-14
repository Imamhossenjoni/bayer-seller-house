import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleLogin = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const pass = event.target.password.value;
        // console.log(name,email,pass);
        signInWithEmailAndPassword(email, pass);
        event.target.reset();
    }
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user || gUser) {
        navigate(from, { replace: true });
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-2xl py-8">
                <h2 className='text-3xl font-bold text-info my-4 '>Please Login</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Enter Your Name" name='name' class="input input-bordered mt-4 w-full max-w-xs" /><br />
                    <input type="email" placeholder="abc @gmail.com" name='email' class="input input-bordered mt-4 w-full max-w-xs" /><br />
                    <input type="password" placeholder="Enter Your Password" name='password' class="input mt-4 input-bordered w-full max-w-xs" /><br />
                    <input type="submit" value='Sign Up' placeholder="" class="input mt-4 input-bordered w-full max-w-xs btn-info text-white font-bold text-xl" /><br />
                </form>
                <div class="divider">OR</div>
                <span className='text-xl'>New to Buyer and Seller House? <Link className='text-info text-xl font-bold' to='/register'>Go to Register</Link></span>
                <span className='text-xl my-2'>Forget Your Password? <button className='text-info font-bold'>Reset Now</button></span>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline mt-4 px-8'>Continue to Google</button>
            </div>
        </div>
    );
};

export default Login;