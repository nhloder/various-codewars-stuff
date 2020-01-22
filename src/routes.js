import React from "react";
import { Switch, Route } from "react-router-dom";
import Isograms from "./katas/Isograms";
import Home from './Home';
import Grades from './katas/Grades';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/isograms" component={Isograms} />
    <Route path = '/grades' component = {Grades} />
  </Switch>
);
