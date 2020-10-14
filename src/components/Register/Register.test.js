import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Register';
import { BrowserRouter, Route } from 'react-router-dom';
describe('Register', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path="/" component={Register} />
      </BrowserRouter>,
      div
    );
  });
});
