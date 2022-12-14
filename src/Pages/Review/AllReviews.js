import React from 'react';
import useReviews from '../../hooks/useReviews';
import SingleReviews from './SingleReviews';

const AllReviews = () => {
    const [reviews]=useReviews();
    return (
        <div className='my-4'>
            <h2 className='text-center text-info font-bold text-5xl py-5 underline'>Our Customer Reviews</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-6'>
                {
                    reviews.map(singleReview => <SingleReviews key={singleReview?._id} singleReview={singleReview}></SingleReviews>)
                }
            </div>
        </div>
    );
};

export default AllReviews;