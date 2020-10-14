import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import AddMetricForm from './components/AddMetricForm/AddMetricForm';
import PublicOnlyRoute from './components/Utils/PublicOnlyRoute';
import PrivateRoute from './components/Utils/PrivateRoute';

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }
  render() {
    return (
      <section>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <PublicOnlyRoute exact path={'/'} component={LandingPage} />
            <PrivateRoute path={'/home'} component={Home} />
            <PublicOnlyRoute path={'/register'} component={Register} />
            <PrivateRoute path={'/metrics'} component={AddMetricForm} />
          </Switch>
        </main>
      </section>
    );
  }
}

export default App;
