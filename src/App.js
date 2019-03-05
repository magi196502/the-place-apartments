import React, { Component } from "react";
import Landing from "./components/landing";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>App</h1>
          <Landing />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
