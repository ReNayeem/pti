import React from 'react';
import API from '../../hooks/API';
import Products from '../../products/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const recommended = () => {
    return (
        <div>
            <PopularAPI></PopularAPI>
        </div>
    );
};

function PopularAPI() {


    const [products] = API();
    console.log(products)
  
  
    return (
      <div>
        <div className='d-flex align-items-center justify-content-between container mt-4 px-3'>
            <p className='popular-title'>Recommended</p>
            <div className='d-flex align-items-center justify-content-center'>
                <p className='products-add-more'>Add more</p>
                <ChevronLeft className='products-arrow1'/>
                <ChevronRight className='products-arrow2'/>
            </div>
        </div>
        <div className='container d-flex align-items-center justify-content-between gap-3 popular-products'>
    {
            products.length === 0 ? (
              <p>No products</p>
              // aka loading
            ) : ""
          }
  
  
          {products.slice(2, 7).map((products) => (
            <Products name={products.Name} image={products.ImageUrl} key={products.Id} />
          ))}
        </div>
      </div>
    )
  }
  

export default recommended;