import React from 'react';
import img from '../../img/download.png'
import img2 from '../../img/download (2).jpg'
import { Link, useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate=useNavigate();
    return (
        // <div class="hero min-h-screen bg-base-200">
        //     <div class="hero-content flex-col lg:flex-row-reverse">
        //         <img src={img2} alt class="max-w-sm rounded-lg shadow-2xl" />
        //         <div>
        //             <h1 class="text-5xl font-bold">Box Office News!</h1>
        //             <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             <button class="btn btn-primary">Get Started</button>
        //         </div>
        //     </div>
        // </div>
        <div>
            <div class="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                <div class="hero-overlay bg-opacity"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <div className=''>
                            <h1 class="text-5xl font-bold text-white mt-5">Welcome to Buyer and Seller House</h1>
                            <p class="text-2xl text-white mt-5">You can buy and sell here .Hopefully it will be suitable for you.Stay with us</p>
                            <button class="btn btn-outline text-white text-xl mt-5"><Link to='/services'>Get Services</Link></button>
                            {/* <p className='text-5xl py-3'>What are You want to be?</p>
                            <h2 className='py-2 text-3xl '> <button className='btn ' onClick={()=>navigate('/seller')}>Seller </button> or <button className='btn' onClick={()=>navigate('/buyer')}>Buyer</button>
                            </h2> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;