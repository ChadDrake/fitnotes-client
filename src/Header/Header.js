import React, { Component } from "react";
import { Link } from "react-router-dom";
import tokenService from "../services/token-service";

export default class Nav extends Component {
  render() {
    return (
      <section>
        <h1> FitNotes</h1>
        <Link to="/home">
          <button type="button">Home</button>
        </Link>
        <Link to="metrics">
          <button type="button">Add New Metric</button>
        </Link>
        <button onClick={tokenService.clearAuthToken} type="button">
          Logout
        </button>
      </section>
    );
  }
}
