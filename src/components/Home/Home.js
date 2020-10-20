import React, { Component } from 'react';
import progressPointService from '../../services/progress-point-service';
import metricService from '../../services/metrics-service';
import MetricListForm from '../MetricListForm/MetricListForm';
import Chart from '../Chart/Chart';
import './Home.css';

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
    metricService
      .getUserMetrics()
      .then((res) => {
        this.setState({ metrics: res, metricId: res[0].id });
        this.updateSelectedMetric(res[0].id);
        this.updateProgressPoints(res[0].id);
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };
  handleSubmitProgressPoint = (ev) => {
    ev.preventDefault();
    const { progressPoint } = ev.target;
    progressPointService
      .postProgressPoint({
        metric_id: this.state.metricId,
        value: progressPoint.value,
      })
      .then((res) =>
        this.setState({ progressPoints: [...this.state.progressPoints, res] })
      )
      .catch((res) => {
        this.setState({ error: res.error });
      });
    progressPoint.value = '';
  };
  componentDidMount() {
    this.getMetrics();
  }
  render() {
    const data = {
      labels: this.state.progressPoints.map((point) =>
        new Date(point.updated_at).toLocaleDateString()
      ),
      datasets: [
        {
          label: this.state.selectedMetric.measurement_type,
          data: this.state.progressPoints.map((point) => parseInt(point.value)),
        },
      ],
    };
    return (
      <section>
        <div className="home">
          <div>
            <p>
              Hello! Heres how you've been doing! Would you like to add a new
              metric or a progress point?
            </p>
          </div>

          <div>
            <p className="error">{this.state.error}</p>
            <MetricListForm
              metrics={this.state.metrics}
              handleChange={this.handleFormChange}
            />
          </div>

          <div>
            <Chart metric={this.state.selectedMetric} data={data} />
          </div>

          <form className="home-form" onSubmit={this.handleSubmitProgressPoint}>
            <label htmlFor="progressPoint">Progress Point</label>
            <input
              type="number"
              step="any"
              id="progressPoint"
              name="progressPoint"
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    );
  }
}
