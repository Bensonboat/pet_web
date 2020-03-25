import React from "react";
// import logo from './logo.svg';
import "./App.css";
import "./main.sass";

// import Component
import LogoRow from "./components/LogoRow";
import BottomMenuRow from "./components/BottomMenuRow";
import Home from "./components/pages/Home";
import CategorySelect from "./components/pages/AllCategory";
import DryFeed from "./components/pages/DryFeed";
import Toy from "./components/pages/Toy";

// import Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          {/* <LogoRow /> */}
          <Route path={`/Home`} component={Home} />
          <Route exact path="/CategorySelect" component={CategorySelect}/>
          <Route path="/CategorySelect/DryFeed" component={DryFeed}/>
          <Route path="/CategorySelect/Toy" component={Toy}/>

          {/* <Switch>
            <Home path="/Home" />
            <CategorySelect path='/CategorySelect'/>
          </Switch> */}
          <BottomMenuRow />
        </div>
      </div>
    </Router>
  );
}

export default App;
