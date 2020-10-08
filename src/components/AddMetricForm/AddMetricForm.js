import React, { Component } from "react";
import metricService from "../../services/metrics-service";

export default class AddMetricForm extends Component {
  submitMetricSuccess = () => {
    const { history } = this.props;
    history.push("/home");
  };

  handleSubmitMetric = (ev) => {
    ev.preventDefault();
    const { metricName, measurementType } = ev.target;
    metricService
      .postMetric({
        metric_name: metricName.value,
        measurement_type: measurementType.value,
      })
      .then((res) => console.log(res));
    this.submitMetricSuccess();
  };

  render() {
    return (
      <section>
        <h2>New Metric</h2>
        <div>
          <form onSubmit={this.handleSubmitMetric}>
            <label htmlFor="metricName">Name of Metric</label>
            <input type="text" id="metricName" name="metricName" />
            <label htmlFor="measurementType">Measured in:</label>
            <input type="text" id="measurementType" name="measurementType" />
            <br />
            <input type="submit" />
          </form>
        </div>
      </section>
    );
  }
}
