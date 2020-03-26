import React from "react";
import "./App.css";
import "./main.sass";

// import Component
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
          <Route path={`/Home`} component={Home} />
          <Route exact path="/CategorySelect" component={CategorySelect}/>
          <Route path="/CategorySelect/DryFeed" component={DryFeed}/>
          <Route path="/CategorySelect/Toy" component={Toy}/>
          <BottomMenuRow />
        </div>
      </div>
    </Router>
  );
}

export default App;
