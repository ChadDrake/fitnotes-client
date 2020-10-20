import React, { Component } from 'react';
import authApiService from '../../services/auth-api-service';
import './Register.css';
export default class Register extends Component {
  state = { error: null };

  submitUserSuccess = () => {
    const { history } = this.props;
    history.push('/');
  };

  handleSubmitUser = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { userName, password, passwordConfirmation, email } = ev.target;
    if (password.value !== passwordConfirmation.value) {
      this.setState({ error: 'Passwords must match!' });
    } else {
      authApiService
        .postRegister({
          user_name: userName.value,
          password: password.value,
          user_email: email.value,
        })
        .then(this.submitUserSuccess)
        .catch((res) => {
          this.setState({ error: res.error });
        });
    }
  };
  render() {
    return (
      <section className="Register">
        <h2> Sign Up! </h2>
        <br />
        <p>
          Fitnotes is an app for tracking your fitness progress! You can save
          progress points for various metrics, and have them displayed to you as
          a graph. You start with "weight" and "body-fat" metrics as those are
          very common, but you also have the ability to create your own things!
          Do you want to know how many push-ups you can do? How far you can run?
          How about your bench press one rep max? You can track your
          imporvements for all of them here!
        </p>
        <p className="error">{this.state.error}</p>
        <form className="register-form" onSubmit={this.handleSubmitUser}>
          <label htmlFor="username">Username</label>
          <br />
          <input type="text" id="userName" name="username" />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" id="password" name="password" />
          <br />
          <label htmlFor="passwordConfirmation">Re-enter Password</label>
          <br />
          <input
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input type="text" id="email" name="email" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}
