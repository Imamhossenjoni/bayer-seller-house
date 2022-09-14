import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom'
import auth from '../../firebase.init';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [sellers] = useSeller();
    const seller = sellers.filter(s => s?.email === user?.email);
    console.log(seller);
    const [buyers] = useBuyer();
    const buyer = buyers.filter(b => b?.email === user?.email);
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col ">
                    <h2 className='text-4xl font-bold text-info'>Welcome to Your DashBoard</h2>
                    <Outlet></Outlet>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>Add Review</Link></li>
                        {buyer.length===1 && <li><Link to='/dashboard/order'>My OrderList</Link></li>}
                        {seller.length === 1 && <li><Link to='/dashboard/profile'>My Profile</Link></li>}
                        {buyer.length === 1 && <li><Link to='/dashboard/buyerProfile'>My Profile</Link></li>}
                        {seller.length === 1 && <li><Link to='/dashboard/addProduct'>Add Product</Link></li>}
                        {seller.length === 1 && <li><Link to='/dashboard/manage'>Manage</Link></li>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;