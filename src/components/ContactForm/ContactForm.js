import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./contactForm.module.css";
import Toast from "../Message/Message";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { addContact } from "../../Phonebook/redux/actions";

class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
    haveError: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;

    if (name === "" || name === "") {
      this.showToast("Name or number can't be empty string");

      return;
    }

    if (this.props.contacts.find((item) => item.name === name)) {
      this.showToast(`${name} is already in contacts`);
      this.setState({ name: "", number: "" });
      return;
    }

    this.props.onAddContact(name, number);

    this.setState({ name: "", number: "" });
  };

  showToast = (message) => {
    this.setState((prev) => ({
      haveError: !prev.haveError,
      errorMessage: message,
    }));
    setTimeout(() => {
      this.setState((prev) => ({
        haveError: !prev.haveError,
      }));
    }, 1500);
  };

  render() {
    const { errorMessage, haveError } = this.state;

    return (
      <>
        <CSSTransition
          in={haveError}
          timeout={250}
          classNames="toast"
          unmountOnExit
        >
          <Toast message={errorMessage} />
        </CSSTransition>

        <form onSubmit={this.handleSubmit} className={s.form}>
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label className={s.label}>
            Number
            <input
              className={s.input}
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onAddContact: (name, phone) => dispatch(addContact(name, phone)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
