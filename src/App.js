import React, { Component } from "react";
import Landing from "./components/landing";
import Navbar from "./components/navBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <h1>App</h1>
          <Landing />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
