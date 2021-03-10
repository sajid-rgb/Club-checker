import React, { createContext } from 'react';
import { Card,Button } from 'react-bootstrap';
import { faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const TeamsCard = (props) => {
    const {team} = props;
    const {strTeam,strTeamBadge,strSport,idTeam} = team;

    return (
        <div className="col-md-6 col-lg-4 ">
            <Card className="w-100 mt-5">
                <Card.Img src={strTeamBadge} className='w-md-25 w-50 mx-auto mt-5'></Card.Img>
                <Card.Body className="text-center">
                    <Card.Title><h2>{strTeam}</h2></Card.Title>
                    <Card.Text className='text-muted'>Sports type: {strSport}</Card.Text>
                    <Link to={"/details/"+idTeam}><Button  variant="primary" >Explore <FontAwesomeIcon icon={faArrowRight} /></Button> 
                    </Link> 
                </Card.Body>
            </Card>
        </div>
    );
};

export default TeamsCard;