import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../../redux/Auth/auth-operations";
import s from "./LoginPage.module.css";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target }) => {
    this.setState((prev) => ({
      [target.name]: target.value,
    }));
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className={s.container}>
        <h2>Log In</h2>
        <form className={s.form} onSubmit={this.handleFormSubmit}>
          <label className={s.formLabel}>
            Email
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              className={s.formInput}
            />
          </label>
          <label className={s.formLabel}>
            Password
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              className={s.formInput}
            />
          </label>
          <button type="submit" className={s.formButton}>
            Enter
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.loginUser,
};

export default connect(null, mapDispatchToProps)(LoginPage);
