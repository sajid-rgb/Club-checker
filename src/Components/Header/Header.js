import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <div className='header d-flex align-self-end justify-content-center flex-column pt-md-5 pt-0 '>
            <a href="/home" style={{textDecoration:'none'}}><h1 className='pt-5'>Team Collection</h1>
            <p className="text-center pb-3 text-white" style={{ fontWeight: 'bold', fontSize: '20px' }}><small>Check your favorite team any time</small></p></a>
        </div>
    );
};

export default Header;