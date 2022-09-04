import { Fragment } from "react";
import "./App.module.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CityWheater from "./pages/CityWheater";
import Navigation from "./Components/Web/Navigation";

function App() {
  return (
    <Fragment>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/home/:cityName">
            <CityWheater />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
