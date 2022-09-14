import React from 'react';
import Contact from '../Contact/Contact';
import AllReviews from '../Review/AllReviews';
import Services from '../Services/Services';
import Banner from './Banner';
import Wanted from './Wanted';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='px-12'>
                <Wanted className='bg-red-500'></Wanted>
            </div>
            <Services></Services>
            <div className='px-12'>
                <Contact></Contact>
                <AllReviews></AllReviews>
            </div>
        </div>
    );
};

export default Home;