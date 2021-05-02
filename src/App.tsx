import React from 'react';
import './App.css';
import StartPage from "./components/pages/startPage/StartPage";
import ProjectsPage from "./components/pages/ProjectsPage/ProjectsPage"
import ToggleMenu from "./components/ToggleMenu/ToggleMenu"
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
          <div>
            <Route path="/" exact render={() => <StartPage/>}/>
            <Route path="/projects" exact render={() => <ProjectsPage/>}/>
          </div>
        </div>
       </Switch>
     </Router>
    
  );
}

export default App;
