import React from 'react';
import './navbar.css'
import { Search, UserRound } from 'lucide-react';
import Dropdown from 'react-bootstrap/Dropdown';

const navbar = () => {
    return (
        <div className="navbarStyle container d-flex align-items-center justify-content-between pt-3 gap-3 fixed-top">
            <h1>pti.</h1>

            <div className='d-flex align-items-center gap-2'>
                <div className='d-flex align-items-center nav-search gap-2'>
                    <Search color="#fea595" size={20} />
                    <input type="text" placeholder='Search Audiobook' />
                </div>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className='down-menu'>
                        MENU
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='mt-2 down-menu-items'>
                        <Dropdown.Item className='down-menu-item' href="#/action-1">Home</Dropdown.Item>
                        <Dropdown.Item className='down-menu-item' href="#/action-2">Details</Dropdown.Item>
                        <Dropdown.Item className='down-menu-item' href="#/action-3">Category</Dropdown.Item>
                        <Dropdown.Item className='down-menu-item' href="#/action-4">My Favorites</Dropdown.Item>
                        <Dropdown.Item className='down-menu-item' href="#/action-5">Profile</Dropdown.Item>
                        <Dropdown.Item className='down-menu-item' href="#/action-6">Log In/Sign Up</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

           <div className='user-icon2'>
                <UserRound className='user-icon'/>
           </div>
        </div>
    );
};

export default navbar;