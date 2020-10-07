import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";

class App extends Component {
  render() {
    return (
      <section>
        <header>
          <Header />
        </header>
      </section>
    );
  }
}

export default App;
