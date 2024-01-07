import React from 'react';
import './footer.css'
import { Facebook, Linkedin, MoveRight, Twitter } from 'lucide-react';

const footer = () => {
    return (
        <div className='footer mt-5'>
            <div className='container d-flex justify-content-between'>
                <div>
                    <div className='d-flex align-items-center subscribe-btn'>
                        <input type="text" placeholder="Enter Your Email" />
                        <button>Subscribe <MoveRight /></button>
                    </div>

                    <div className='d-flex align-items-center justify-content-between icon-logo'>
                    <div className='footer-info'>
                    <h3>pti<span>.</span></h3>
                    <p>Copyright@Tripp. All Right Reserved</p>
                    </div>

                    <div className='d-flex gap-2 social-link2'>
                    <div className='social-link'>
                    <Linkedin color='#fc6010'/>
                    </div>
                    <div className='social-link'>
                    <Twitter color='#fc6010'/>
                    </div>
                    <div className='social-link'>
                    <Facebook color='#fc6010'/>
                    </div>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="image2.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default footer;