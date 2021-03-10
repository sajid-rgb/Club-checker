import React from 'react';
import  './TeamDetailsHeader.css'

const TeamDetailsHeader = (props) => {
    const {stadium,logo} = props;
    return (
        <div style={{backgroundImage:`url(${stadium})`,height:'350px',padding:'50px',opacity:'.5',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',margin:'0',width:'100%'}} >
            
            <img src={logo} alt="" className="mx-auto d-block   img-fluid  clubLogo" style={{opacity:'1'}}/>

        </div>
    );
};

export default TeamDetailsHeader;