import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Isograms from "./katas/Isograms";
import Grades from './katas/Grades';
import LettersToNumbers from './katas/LettersToNumbers';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/isograms" component={Isograms} />
    <Route path = '/grades' component = {Grades} />
    <Route path = '/lettersToNumbers' component = {LettersToNumbers} />
  </Switch>
);
