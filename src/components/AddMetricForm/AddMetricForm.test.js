import React from 'react';
import ReactDOM from 'react-dom';
import AddMetricForm from './AddMetricForm';
import { BrowserRouter, Route } from 'react-router-dom';
describe('AddMetricForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path="/" component={AddMetricForm} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
