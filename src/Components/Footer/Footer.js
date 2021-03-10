import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faFacebook, faInstagramSquare, faInternetExplorer, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
    const { website, facebook, instagram, twitter, youtube } = props;
    return (
        <div className='text-center mt-5 bg-white'>
            <a href={'https://' + facebook} target="_" style={{ fontSize: '30px', color: '', marginLeft: '5px' }}><FontAwesomeIcon icon={faFacebook} /></a>
            <a href={'https://' + website} target="_" style={{ fontSize: '30px', marginLeft: '5px' }}><FontAwesomeIcon icon={faInternetExplorer}></FontAwesomeIcon></a>
            <a href={'https://' + twitter} target="_" style={{ fontSize: '30px', color: '', marginLeft: '5px' }}><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
            <a href={'https://' + instagram} target="_" style={{ fontSize: '30px', color: '#cd486b', marginLeft: '5px' }}><FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon></a>
            <a href={'https://' + youtube} target="_" style={{ fontSize: '30px', color: 'red', marginLeft: '5px' }}><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
        </div>
    );
};
export default Footer;