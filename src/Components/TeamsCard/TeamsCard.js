import { Card, Button } from 'react-bootstrap';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Link
} from "react-router-dom";

const TeamsCard = (props) => {
    const { team } = props;
    const { strTeam, strTeamBadge, strSport, idTeam } = team;

    return (
        <div className="col-md-6 col-lg-4 ">
            <Card className="w-100 mt-5 bg-success mb-3 text-center" style={{backgroundColor:''}}>
                <Card.Img src={strTeamBadge} className='w-md-25 w-50 mx-auto mt-5'></Card.Img>
                <Card.Body className="text-center text-white">
                    <Card.Title><h2 className='text-dark'>{strTeam}</h2></Card.Title>
                    <Card.Text className='text-dark'>Sports type: {strSport}</Card.Text>
                </Card.Body>
                <Link to={"/details/" + idTeam}><Button variant="danger" className='mb-3'>Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Link>
            </Card>
        </div>
    );
};

export default TeamsCard;