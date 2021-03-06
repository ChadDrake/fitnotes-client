import React, { Component } from 'react';
import authApiService from '../../services/auth-api-service';
import tokenService from '../../services/token-service';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default class LandingPage extends Component {
  state = { error: null };
  handleLoginSuccess = () => {
    const { history } = this.props;
    history.push('/home');
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { userName, password } = ev.target;
    authApiService
      .postLogin({
        user_name: userName.value,
        password: password.value,
      })
      .then((res) => {
        userName.value = '';
        password.value = '';
        tokenService.saveAuthToken(res.authToken);
      })
      .then(() => {
        this.handleLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };
  render() {
    return (
      <section className="LandingPage">
        <div>
          <p>
            {' '}
            Fitnotes is an app for tracking your fitness progress! You can save
            progress points for various metrics, and have them displayed to you
            as a graph. You start with "weight" and "body-fat" metrics as those
            are very common, but you also have the ability to create your own
            things! Do you want to know how many push-ups you can do? How far
            you can run? How about your bench press one rep max? You can track
            your imporvements for all of them here! To try the App out before
            signing up, simply login with the username "user2" and the password
            "password".
          </p>
        </div>
        <div>
          <p className="error">{this.state.error}</p>
          <form className="landing-page-form" onSubmit={this.handleSubmit}>
            <label htmlFor="userName">Username</label>
            <input type="text" id="userName" name="userName" />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <br />

            <input className="button" type="submit" value="Submit" />
          </form>
          <Link to={'/register'}>
            <button className="button">Sign Up!</button>
          </Link>
        </div>
      </section>
    );
  }
}
