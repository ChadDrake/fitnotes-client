import React from 'react';
import ReactDOM from 'react-dom';
import MetricListForm from './MetricListForm';
describe('MetricListForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MetricListForm
        metrics={[
          {
            id: 'd20aee44-0cce-11eb-adc1-0242ac120002',
            user_id: 'be80724c-0ccc-11eb-adc1-0242ac120002',
            metric_name: 'Weight',
            measurement_type: 'lbs',
          },
          {
            id: 'd20af22c-0cce-11eb-adc1-0242ac120002',
            user_id: 'be80724c-0ccc-11eb-adc1-0242ac120002',
            metric_name: 'Body-Fat',
            measurement_type: 'percent',
          },
        ]}
        handleChange={() => {}}
      />,
      div
    );
  });
});
