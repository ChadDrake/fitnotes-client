import React, { Component } from 'react';
import progressPointService from '../../services/progress-point-service';
import metricService from '../../services/metrics-service';
import MetricListForm from '../MetricListForm/MetricListForm';
import Chart from '../Chart/Chart';

export default class Home extends Component {
  state = {
    progressPoints: [],
    metrics: [],
    metricId: '',
    selectedMetric: {},
  };

  updateProgressPoints = (metricId) => {
    progressPointService.getProgressPoints(metricId).then((res) => {
      this.setState({ progressPoints: res });
    });
  };
  updateSelectedMetric = (metricId) => {
    this.state.metrics.forEach((metric) => {
      if (metric.id === metricId) {
        this.setState({ selectedMetric: metric });
      }
    });
  };
  handleFormChange = (ev) => {
    ev.preventDefault();
    this.setState({ metricId: ev.target.value });
    this.updateSelectedMetric(ev.target.value);
    this.updateProgressPoints(ev.target.value);
  };
  getMetrics = () => {
    metricService.getUserMetrics().then((res) => {
      this.setState({ metrics: res });
      this.updateSelectedMetric(res[0].id);
      this.updateProgressPoints(res[0].id);
    });
  };
  handleSubmitProgressPoint = (ev) => {
    ev.preventDefault();
    const { progressPoint } = ev.target;
    progressPointService.postProgressPoint({
      metric_id: this.state.metricId,
      value: progressPoint.value,
    });
    progressPoint.value = '';
  };
  componentDidMount() {
    this.getMetrics();
  }
  render() {
    const data = {
      labels: [this.state.progressPoints.map((point) => point.updated_at)],
      datasets: [
        {
          label: this.state.selectedMetric.measurement_type,
          data: this.state.progressPoints.map((point) => parseInt(point.value)),
        },
      ],
    };
    return (
      <section>
        <div>
          <p>
            Hello user who just logged in! Im being a bit verbose here because I
            dont know your name.
          </p>
          <br />
          <MetricListForm
            metrics={this.state.metrics}
            handleChange={this.handleFormChange}
          />

          <Chart metric={this.state.selectedMetric} data={data} />
          <form onSubmit={this.handleSubmitProgressPoint}>
            <label htmlFor="progressPoint">Progress Point</label>
            <input
              type="number"
              step="any"
              id="progressPoint"
              name="progressPoint"
            />
            <input type="submit" />
          </form>
        </div>
      </section>
    );
  }
}
