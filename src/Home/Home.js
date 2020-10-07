import React, { Component } from "react";

export default class Home extends Component {
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
          <form>
            <label htmlFor="progress-point">Progress Point</label>
            <input type="text" id="progress-point" name="progress-point" />
            <input type="submit" />
          </form>
        </div>
      </section>
    );
  }
}
