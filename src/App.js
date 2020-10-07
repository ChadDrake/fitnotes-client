import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import LandingPage from "./LandingPage/LandingPage";
import Home from "./Home/Home";
import Register from "./Register/Register";
import AddMetricForm from "./AddMetricForm/AddMetricForm";

class App extends Component {
  render() {
    return (
      <section>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            <Route path={"/home"} component={Home} />
            <Route path={"/register"} component={Register} />
            <Route path={"/metrics"} component={AddMetricForm} />
          </Switch>
        </main>
      </section>
    );
  }
}

export default App;
