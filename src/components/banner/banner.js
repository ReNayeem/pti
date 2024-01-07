import React from 'react';
import './banner.css'

const banner = () => {
    return (
        <div className='container'>
            <div className='d-flex banner align-items-center justify-content-between'>
            <div>
                <h1>Deliver Food To Your Door Step!</h1>
                <p>Authentic Food, Quick Service, Fast Delivery</p>
            </div>
            <div className='banner-img'>
                <img src="image1.png" alt="" />
            </div>
        </div>
        </div>
    );
};

export default banner;