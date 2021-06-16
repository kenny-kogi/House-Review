import React from "react";
import { Switch, Route } from "react-router-dom";
import Houses from "./Houses/Houses";
import House from "./House/House";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Houses} />
      <Route exact path="/house/:slug" component={House} />
    </Switch>
  );
};

export default App;
