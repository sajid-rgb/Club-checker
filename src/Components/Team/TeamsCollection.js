import React from 'react';
import Header from '../Header/Header';
import TeamsCard from '../TeamsCard/TeamsCard';

const TeamsCollection = ({ teams }) => {
    return (
        <div>
            <Header></Header>
            <div className='row container mx-auto'>
                {
                    teams.map(team => <TeamsCard team={team} key={teams.idTeam}></TeamsCard>)
                }
            </div>
        </div>
    );
};

export default TeamsCollection;