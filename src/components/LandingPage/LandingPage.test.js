import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import { BrowserRouter, Route } from 'react-router-dom';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Route path="/" component={LandingPage} />
    </BrowserRouter>,
    div
  );
});
