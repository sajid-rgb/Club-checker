import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamDetailsCard from '../TeamDetailsCard/TeamDetailsCard';

const TeamDetail = () => {
    const { idTeam } = useParams()
    const [team, setTeam] = useState([])
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    })
    return (
        <div>
            <div className=''>
                {
                    team.map(tm => <TeamDetailsCard team={tm} key={tm.idTeam}></TeamDetailsCard>)
                }

            </div>
        </div>
    );
};

export default TeamDetail;