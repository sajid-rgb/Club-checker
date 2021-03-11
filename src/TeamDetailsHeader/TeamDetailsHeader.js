import React from 'react';
import  './TeamDetailsHeader.css'

const TeamDetailsHeader = (props) => {
    const {stadium,logo} = props;
    return (
        <div style={{backgroundImage:`url(${stadium})`}} className="team-header d-flex align-items-center" >
            
            <img src={logo} alt="" className="mx-auto d-block   img-fluid  clubLogo" style={{opacity:'1'}}/>

        </div>
    );
};

export default TeamDetailsHeader;