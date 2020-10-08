import React, { Component } from "react";
import progressPointService from "../services/progress-point-service";

export default class Home extends Component {
  state = {
    metric: "98b4ba58-08aa-11eb-adc1-0242ac120002",
  };

  handleSubmitProgressPoint = (ev) => {
    const { progressPoint } = ev.target;
    console.log(this.state.metric);
    progressPointService
      .postProgressPoint({
        metric_id: this.state.metric,
        value: progressPoint.value,
      })
      .then((res) => console.log(res));
  };
  render() {
    return (
      <section>
        <div>
          <p>
            Hello user who just logged in! Im being a bit verbose here because I
            dont know your name.
          </p>
          <br />
          <form>
            <label htmlFor="metric">Choose what progress metric to see</label>
            <select name="metric" id="metric">
              <option value="weight">Weight</option>
              <option value="body-fat">Body-Fat</option>
            </select>
          </form>
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
