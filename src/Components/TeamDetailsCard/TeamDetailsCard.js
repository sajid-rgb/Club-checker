import { faFlag, faFootballBall, faMapMarker, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import male from '../Images/male.png'
import female from '../Images/female.png'
import Footer from '../Footer/Footer';
import TeamDetailsHeader from '../../TeamDetailsHeader/TeamDetailsHeader';
const TeamDetailsCard = (props) => {
    const {team}=props
    const {strTeam,intFormedYear,strSport,strStadiumThumb,strTeamBadge,strDescriptionEN,strDescriptionDE,strWebsite,strFacebook,strTwitter,strInstagram}=team;
    const [isClicked,setIsClicked] =useState(false)
    const femaleButtonClick=()=>{
        setIsClicked(true);
    }
    const maleButtonClick=()=>{
        setIsClicked(false);
    }
    return (
        <div >
            <TeamDetailsHeader stadium={strStadiumThumb} logo={strTeamBadge}></TeamDetailsHeader>
            <div className='row bg-danger mt-3 container mx-auto '> 
                <Card className="col-md-7 bg-danger border-0 w-75" >
                    <Card.Body className='text-white'>
                        <Card.Title><h2>{strTeam}</h2></Card.Title>
                        <Card.Text className='' style={{fontSize:'18px',fontWeight:'bold'}}><p ><FontAwesomeIcon icon={faMapMarkerAlt} /><span className ='ml-4'>Founded: {intFormedYear}</span></p>
                        <p> <FontAwesomeIcon icon={faFlag} /><span className ='ml-3'>Country: United Kingdom </span> </p>
                        <p><FontAwesomeIcon icon={faFootballBall} /><span className ='ml-3'>Sport Type: {strSport}</span></p>
                        <p><FontAwesomeIcon icon={faMars} /><span className ='ml-3'>Gender: <button onClick={femaleButtonClick} style={{border:'none',backgroundColor:'transparent',color:'white'}}>Female</button> 
                         <button onClick={maleButtonClick} style={{border:'none',backgroundColor:'transparent',color:'white'}}>Male</button></span></p>
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className="col-md-5 bg-danger border-0  ">
                    {
                        isClicked?<Card.Img src={female} className=' w-75 ml-5  mt-4 mb-2 mb-md-0'></Card.Img>:<Card.Img src={male} className=' w-75 ml-5  mt-4 mb-2 mb-md-0'></Card.Img>
                    }
                    </Card>

            </div>
            <div className="text-white container">
               <p>{strDescriptionEN}</p>
               <p>{strDescriptionDE}</p>
            </div>
            <div className="container">
            <Footer website={strWebsite} facebook={strFacebook} twitter ={strTwitter} instagram={strInstagram}></Footer>
            </div>
           
        </div>
    );
};

export default TeamDetailsCard;