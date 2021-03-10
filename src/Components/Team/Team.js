import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TeamsCard from '../TeamsCard/TeamsCard';

const Team = ({teams}) => {
    return (
        <div>
            <Header></Header>
            <div className='row container mx-auto'>
            {
                teams.map(team=><TeamsCard team={team} key={teams.idTeam}></TeamsCard>)
            }
        </div>
        </div>
    );
};

export default Team;