import "./App.css";
import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import { CSSTransition } from "react-transition-group";
import "./App.css";

export default function App(props) {
  return (
    <div className="App">
      <div className="Container">
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="title"
          unmountOnExit
        >
          <h1>Phonebook</h1>
        </CSSTransition>

        <ContactForm />

        <h1>Contacts</h1>

        <Filter />

        <ContactList />
      </div>
    </div>
  );
}
