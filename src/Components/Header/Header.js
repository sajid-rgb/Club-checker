import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <div className='header '>
            <h1 className="pt-5">Team Collection</h1>
            <p className="text-center text-white" style={{ fontWeight: 'bold', fontSize: '20px' }}><small>Check your favorite team any time</small></p>
        </div>
    );
};

export default Header;