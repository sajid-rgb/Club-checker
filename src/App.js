import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import stadium from './Components/Images/Stadium.jpg'
import Team from './Components/Team/Team';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetail from './Components/TeamDetail/TeamDetail';
import { useEffect, useState } from 'react';

function App() {
  const [teams,setTeams] = useState([]);
    useEffect(()=>
    fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League")
    .then(res=>res.json())
    .then(data=>setTeams(data.teams))
    ,[])
    const [isChanged,setIsChanged] = useState(false)
    const buttonClick=()=>{
      setIsChanged(true)

    }
  return (
    <div className="App ">
       <Header isChanged={isChanged} setIsChanged={setIsChanged} ></Header>
       <div className="container">
       <Router>
         <Switch>
           <Route exact path="/"><Team teams={teams}></Team></Route>
           <Route path="/details/:idTeam">
             <TeamDetail></TeamDetail>

           </Route>
           <Route path='*'>
             <h4>Error</h4>
           </Route>
         </Switch>
       </Router>
       </div>
    </div>
  );
}

export default App;
