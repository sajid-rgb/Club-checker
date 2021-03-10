import { faFlag, faFootballBall, faMapMarker, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import male from '../Images/male.png'
import female from '../Images/female.png'
const TeamDetailsCard = (props) => {
    const {team}=props
    const {strTeam,intFormedYear,strSport,strStadiumThumb}=team;
    const [isClicked,setIsClicked] =useState(false)
    const femaleButtonClick=()=>{
        setIsClicked(true);
    }
    const maleButtonClick=()=>{
        setIsClicked(false);
    }
    return (
        <div>
            <div className='row bg-danger mt-3 '> 
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
            <div className="text-white">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur a perspiciatis mollitia blanditiis asperiores. Cupiditate minima voluptas dolor velit hic quaerat facilis? Voluptatibus unde molestias laboriosam eius aliquam reiciendis et, vero voluptas possimus tenetur aperiam numquam quisquam eum. Dolorem assumenda, libero nemo sequi pariatur iste, provident natus quia, repellendus ducimus vitae. Vero accusantium vitae debitis sapiente veniam magni quis sequi dolorum illum voluptatem, quia, id nulla suscipit nemo sit optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur a perspiciatis mollitia blanditiis asperiores. Cupiditate minima voluptas dolor velit hic quaerat facilis? Voluptatibus unde molestias laboriosam eius aliquam reiciendis et, vero voluptas possimus tenetur aperiam numquam quisquam eum. Dolorem assumenda, libero nemo sequi pariatur iste, provident natus quia, repellendus ducimus vitae. Vero accusantium vitae debitis sapiente veniam magni quis sequi dolorum illum voluptatem, quia, id nulla suscipit nemo sit optio.</p>
            </div>
        </div>
    );
};

export default TeamDetailsCard;