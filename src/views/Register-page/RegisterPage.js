import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../../redux/Auth/auth-operations";
import s from "./RegisterPage.module.css";

class RegisterPage extends Component {
  state = {
    name: "",
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

    this.props.onRegister(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <div className={s.container}>
        <h2>Registration</h2>
        <form className={s.form} onSubmit={this.handleFormSubmit}>
          <label className={s.formLabel}>
            Name
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              className={s.formInput}
            />
          </label>
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
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  onRegister: authOperations.registrationUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
