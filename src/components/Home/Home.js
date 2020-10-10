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

  updateProgressPoints = () => {
    progressPointService.getProgressPoints(this.state.metricId).then((res) => {
      this.setState({ progressPoints: res });
    });
  };

  defaultState = () => {
    this.setState({ metricId: this.state.metrics[0].id });
    this.updateSelectedMetric();
    this.updateProgressPoints();
  };
  updateSelectedMetric = () => {
    this.state.metrics.forEach((metric) => {
      if (metric.id === this.state.metricId) {
        this.setState({ selectedMetric: metric });
      }
    });
  };
  handleFormChange = (ev) => {
    ev.preventDefault();
    this.setState({ metricId: ev.target.value });
    this.updateSelectedMetric();
    this.updateProgressPoints();
  };
  getMetrics = () => {
    metricService
      .getUserMetrics()
      .then((res) => {
        this.setState({ metrics: res });
      })
      .then(() => {
        this.defaultState();
      });
  };
  handleSubmitProgressPoint = (ev) => {
    const { progressPoint } = ev.target;
    progressPointService.postProgressPoint({
      metric_id: this.state.metricId,
      value: progressPoint.value,
    });
  };
  componentDidMount() {
    this.getMetrics();
  }
  render() {
    if (this.state.progressPoints.length !== 0) {
      return (
        <section>
          <div>
            <p>
              Hello user who just logged in! Im being a bit verbose here because
              I dont know your name.
            </p>
            <br />
            <MetricListForm
              metrics={this.state.metrics}
              handleChange={this.handleFormChange}
            />
            <Chart
              metric={this.state.selectedMetric}
              progressPoints={this.state.progressPoints}
            />
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
    } else {
      return null;
    }
  }
}
