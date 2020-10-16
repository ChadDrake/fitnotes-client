import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tokenService from '../../services/token-service';
import './Header.css';

export default class Nav extends Component {
  render() {
    if (tokenService.hasAuthToken()) {
      return (
        <section className="Header-container">
          <h1> FitNotes</h1>
          <div className="button-container">
            <Link to="/home">
              <button type="button">Home</button>
            </Link>
            <Link to="metrics">
              <button type="button">New Metric</button>
            </Link>
            <Link to="/">
              <button onClick={tokenService.clearAuthToken} type="button">
                Logout
              </button>
            </Link>
          </div>
        </section>
      );
    } else {
      return (
        <section className="Header-container">
          <h1>FitNotes</h1>
        </section>
      );
    }
  }
}
