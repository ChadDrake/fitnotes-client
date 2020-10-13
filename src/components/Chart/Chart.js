import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import Context from '../../Context/Context';

export default class Chart extends Component {
  static contextType = Context;
  // state = {
  //   labels: ['1', '2', '3'],
  //   datasets: [
  //     {
  //       label: this.props.metric.metric_name,
  //       data: [],
  //     },
  //   ],
  // };

  // fillGraph = () => {
  //   let progressPointValues;
  //   let progressPointTimes;
  //   progressPointTimes = this.props.progressPoints.map(
  //     (point) => point.updated_at
  //   );
  //   progressPointValues = this.props.progressPoints.map((point) =>
  //     parseInt(point.value)
  //   );
  //   this.setState({
  //     labels: progressPointTimes,
  //     datasets: [
  //       {
  //         label: this.props.metric.measurement_type,
  //         data: progressPointValues,
  //       },
  //     ],
  //   });
  // };

  // componentDidMount() {
  //   this.fillGraph();
  // }
  // componentDidUpdate(prevProps) {
  //   if (this.props.metric.id !== prevProps.metric.id) {
  //     this.fillGraph();
  //   }
  // }
  render() {
    return (
      <div>
        <h2> {this.props.metric.metric_name}</h2>
        <Line
          options={{
            responsive: true,
          }}
          data={this.context.data}
        />
      </div>
    );
  }
}
