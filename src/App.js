import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import AddMetricForm from "./components/AddMetricForm/AddMetricForm";

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
