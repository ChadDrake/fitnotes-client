import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './Chart';
describe('Chart', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Chart
        metric={{
          id: 'd20aee44-0cce-11eb-adc1-0242ac120002',
          user_id: 'be80724c-0ccc-11eb-adc1-0242ac120002',
          metric_name: 'Weight',
          measurement_type: 'lbs',
        }}
        data={{
          labels: ['1', '2', '3'],
          datasets: [
            {
              label: 'testy',
              data: [1, 2, 3, 4, 5, 6, 7, 8],
            },
          ],
        }}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
