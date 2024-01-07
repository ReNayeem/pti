import React from 'react';
import './products.css'

const products = (props) => {
    return (
        <div className='products'>
            <img src={props.image} alt="" />
            <h1>{props.name}</h1>
        </div>
    );
};

export default products;