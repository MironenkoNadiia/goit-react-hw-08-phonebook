import React from "react";
import { connect } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import authSelectors  from "../../redux/Auth/auth-selectors";
import s from "./AppBar.module.css";

const AppBar = ({ isLogedIn }) => {
  return (
    <header className={s.header}>
      <Navigation />
      {isLogedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = (state) => ({
  isLogedIn: authSelectors.getIsLogedIn(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
