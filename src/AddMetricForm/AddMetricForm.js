import React, { Component } from "react";

export default class AddMetricForm extends Component {
  render() {
    return (
      <section>
        <h2>New Metric</h2>
        <div>
          <form>
            <label htmlFor="metric-name">Name of Metric</label>
            <input type="text" id="metric-name" name="metric-name" />
            <label htmlFor="metric-measure">Measured in:</label>
            <input type="text" id="metric-measure" name="metric-measure" />
            <br />
            <input type="submit" />
          </form>
        </div>
      </section>
    );
  }
}
