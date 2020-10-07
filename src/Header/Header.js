import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <section>
        <button type="button">Home</button>
        <button type="button">Add New Metric</button>
        <button type="button">Logout</button>
      </section>
    );
  }
}
