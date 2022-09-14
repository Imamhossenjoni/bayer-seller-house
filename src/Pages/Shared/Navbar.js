import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logOut=()=>{
        signOut(auth)
    }
    console.log(user?.displayName);
    const menuItems =
        <>
            <li><Link to='/home'> Home</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            {user && <li><Link to='/dashboard'>DashBoard</Link></li>}
            {!user ?<li><Link to='/login'>Login</Link></li>:<button onClick={logOut} >LogOut</button>}
        </>
    return (
        <div>
            <div class="navbar bg-base-100 ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case  text-xl">Buyer and Seller House</a>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0  text-xl px-12">
                       {menuItems}
                    </ul>
                </div>
                {/* <div class="navbar-end">
                    <a class="btn">Get started</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;