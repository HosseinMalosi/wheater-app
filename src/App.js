import { Fragment } from "react";
import classes from "./App.module.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import CityWheater from "./pages/CityWheater";
import Navigation from "./Components/Web/Navigation";
import Card from "./UI/Card";

function App() {
  const currentData = useSelector((state) => state);

  return (
    <Card className={classes.root}>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path={`/home/:cityName`}>
            <CityWheater />
          </Route>
        </Switch>
      </main>
    </Card>
  );
}

export default App;
