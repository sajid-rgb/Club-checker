import { faFlag, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';
import male from '../Images/male.png'
import female from '../Images/female.png'
import Footer from '../Footer/Footer';
import TeamDetailsHeader from '../../TeamDetailsHeader/TeamDetailsHeader';
import { faFutbol } from '@fortawesome/free-regular-svg-icons';
const TeamDetailsCard = (props) => {
    const { team } = props
    const { strTeam, intFormedYear, strSport, strStadiumThumb, strTeamBadge, strDescriptionEN, strDescriptionDE, strWebsite, strFacebook, strTwitter, strInstagram, strCountry, strGender, strYoutube,strTeamShort } = team;
    return (
        <div >
            <TeamDetailsHeader stadium={strStadiumThumb} logo={strTeamBadge}></TeamDetailsHeader>
            <div className='row  mt-3 container mx-auto  ' style={{ backgroundColor: 'revert' }}>
                <Card className="col-md-7 bg-success border-0" >
                    <Card.Body className='text-white'>
                        <Card.Title><h2>{strTeam} {
                            strTeamShort!==null && <span>({strTeamShort})</span>
                        }</h2></Card.Title>
                        <Card.Text className='' style={{ fontSize: '18px', fontWeight: 'bold' }}><p ><FontAwesomeIcon icon={faMapMarkerAlt} /><span className='ml-2'>Founded: {intFormedYear}</span></p>
                            <p className='pr-5'> <FontAwesomeIcon icon={faFlag} /><span className='ml-1'>Country: {strCountry} </span> </p>
                            <p><FontAwesomeIcon icon={faFutbol} /><span className='ml-1'>Sport Type: {strSport}</span></p>
                            <p><FontAwesomeIcon icon={faMars} /><span className='ml-1'>Gender: {strGender} </span></p>
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className="col-md-5 bg-success border-0  ">
                    {
                        strGender === "Male" ? <Card.Img src={male} className=' w-75 ml-5  mt-4 mb-2 mb-md-0'></Card.Img>
                            : <Card.Img src={female} className=' w-75 ml-5  mt-4 mb-2 mb-md-0'></Card.Img>
                    }
                </Card>

            </div>
            <div className="text-white container text-justify text-white container mt-3 p-3" >
                <p>{strDescriptionEN}</p>
                <p>{strDescriptionDE}</p>
            </div>
            <div className="">
                <Footer website={strWebsite} facebook={strFacebook} twitter={strTwitter} instagram={strInstagram} youtube={strYoutube}></Footer>
            </div>

        </div>
    );
};

export default TeamDetailsCard;