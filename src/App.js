import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Redirect, Switch } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import { authOperations } from "./redux/Auth";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loader/Loader";

const HomePage = lazy(() => import("./views/Home-page/HomePage"));
const LoginPage = lazy(() => import("./views/Login-page/LoginPage"));
const Phonebook = lazy(() => import("./views/Phonebook-page/PhonebookPage.js"));
const RegisterPage = lazy(() =>
  import("./views/Register-page/RegisterPage.js")
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div>
        <AppBar />
        <Suspense fallback={<Loading />}>
          <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/phonebook"
              component={LoginPage}
            />
            <PublicRoute
              path="/registration"
              restricted
              redirectTo="/phonebook"
              component={RegisterPage}
            />
            <PrivateRoute
              path="/phonebook"
              redirectTo="/login"
              component={Phonebook}
            />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
