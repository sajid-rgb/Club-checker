import React, { useEffect, useState } from 'react';
import TeamsCard from '../TeamsCard/TeamsCard';

const Team = ({teams}) => {
    return (
        <div>
            <div className='row'>
            {
                teams.map(team=><TeamsCard team={team} key={teams.idTeam}></TeamsCard>)
            }
        </div>
        </div>
    );
};

export default Team;