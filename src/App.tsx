import React from 'react';
import './App.css';
import StartPage from "./components/startPage/StartPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage"
import ToggleMenu from "./components/general/ToggleMenu/ToggleMenu"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (

    <Router>
      <Switch>
      <div>
      <div>
        <ToggleMenu/>
      </div>
      <Route path="/" exact render={() => <StartPage/>}/>
      <Route path="/projects" exact render={() => <ProjectsPage/>}/>
      </div>
       </Switch>
     </Router>
    
  );
}

export default App;
