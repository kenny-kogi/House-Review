import React from "react";
import { Switch, Route } from "react-router-dom";
import Houses from "./Houses/Houses";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Houses} />
      {/* <Route exact path="/house/:slug" component={Airline} /> */}
    </Switch>
  );
};

export default App;
