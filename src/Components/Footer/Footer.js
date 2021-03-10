import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import {  } from '@fortawesome/free-regular-svg-icons';
import { fab, faFacebook, faFacebookF, faInstagram, faInternetExplorer, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
     const {website,facebook,instagram,twitter}=props;
    return (
        <div className='text-center mt-5'>
            <a href={'https://'+facebook} target="_" style={{fontSize:'30px',color:'blue',marginLeft:'5px'}}><FontAwesomeIcon icon={faFacebook} /></a>
            <a href={'https://'+website} target="_"style={{fontSize:'30px',marginLeft:'5px'}}><FontAwesomeIcon icon={faInternetExplorer}></FontAwesomeIcon></a>
            <a href={'https://'+twitter} target="_"style={{fontSize:'30px',color:'blue',marginLeft:'5px'}}><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
            <a href={'https://'+instagram} target="_"style={{fontSize:'30px',color:'red',marginLeft:'5px'}}><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
            <FontAwesomeIcon icon={fab} />
            
        </div>
    );
};
export default Footer;