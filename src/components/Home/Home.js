import React, { Component } from "react";
import progressPointService from "../../services/progress-point-service";
import metricService from "../../services/metrics-service";
import MetricListForm from "../MetricListForm/MetricListForm";

export default class Home extends Component {
  state = {
    progressPoints: [],
    metrics: [],
    metricId: "98b4ba58-08aa-11eb-adc1-0242ac120002",
  };

  handleFormChange = (ev) => {
    ev.preventDefault();
    this.setState({ metricId: ev.target.value });
    progressPointService.getProgressPoints(this.state.metricId).then((res) => {
      this.setState({ progressPoints: res });
    });
  };
  getMetrics = () => {
    metricService
      .getUserMetrics()
      .then((res) => this.setState({ metrics: res }));
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
          <p>Graph goes here. Implementing later</p>
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
