import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import LandingPage from "./LandingPage/LandingPage";
import Home from "./Home/Home";

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
            {/* <Route path ={'/register'} component={RegisterForm}/>
            <Route path ={'/metrics'} component ={AddMetricForm}/> */}
          </Switch>
        </main>
      </section>
    );
  }
}

export default App;
