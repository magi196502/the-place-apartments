import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navBar";
import Landing from "./components/landing";
import FloorPlans from "./components/floorPlans";
import Residents from "./components/residents";
import Availability from "./components/availability";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <hr />
        <main className="container">
          <Switch>
            <Route path="/floorplans" component={FloorPlans} />
            <Route path="/availability" component={Availability} />
            <Route path="/residents" component={Residents} />
            <Route path="/home" component={Landing} />
            <Route path="/" component={Landing} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
