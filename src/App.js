import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamsCollection from './Components/Team/TeamsCollection';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetail from './Components/TeamDetail/TeamDetail';
import { useEffect, useState } from 'react';
import ErrorShow from './Components/ErrorShow/ErrorShow';

function App() {
  const [teams, setTeams] = useState([]);
  useEffect(() =>
    fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League")
      .then(res => res.json())
      .then(data => setTeams(data.teams))
    , [])
  return (
    <div className="App ">

      <div className="">
        <Router>
          <Switch>
          <Route path="/home"><TeamsCollection teams={teams}></TeamsCollection>
            </Route>
            <Route exact path="/"><TeamsCollection teams={teams}></TeamsCollection>
            </Route>
            <Route path="/details/:idTeam">
              <div className="">
                <TeamDetail></TeamDetail>
              </div>
            </Route>
            <Route path='*'>
              <div>
                <ErrorShow></ErrorShow>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
