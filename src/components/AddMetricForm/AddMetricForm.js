import React, { Component } from 'react';
import metricService from '../../services/metrics-service';
import './AddMetricForm.css';

export default class AddMetricForm extends Component {
  state = { error: null };
  submitMetricSuccess = () => {
    const { history } = this.props;
    history.push('/home');
  };

  handleSubmitMetric = (ev) => {
    ev.preventDefault();
    const { metricName, measurementType } = ev.target;
    metricService
      .postMetric({
        metric_name: metricName.value,
        measurement_type: measurementType.value,
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
    this.submitMetricSuccess();
  };

  render() {
    return (
      <section className="AddMetricForm">
        <div>
          <h2>New Metric</h2>
        </div>

        <p className="error">{this.state.error}</p>
        <form className="form" onSubmit={this.handleSubmitMetric}>
          <label htmlFor="metricName">Name of Metric</label>
          <input type="text" id="metricName" name="metricName" />
          <label htmlFor="measurementType">Measured in:</label>
          <input type="text" id="measurementType" name="measurementType" />
          <br />
          <input className={'submit'} type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}
