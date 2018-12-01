import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
import Detail from "./pages/Detail";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Buttons from "./pages/Buttons";


const App = () => (
  <Router>
    <div>
      <Nav />
     
   
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/buttons" component={Buttons} />
        
       
    
      </Switch>
    </div>
  </Router>
);

export default App;
