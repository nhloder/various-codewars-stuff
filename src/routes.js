import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Isograms from "./components/katas/Isograms";
import Grades from './components/katas/Grades';
import LettersToNumbers from './components/katas/LettersToNumbers';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/isograms" component={Isograms} />
    <Route path = '/grades' component = {Grades} />
    <Route path = '/lettersToNumbers' component = {LettersToNumbers} />
  </Switch>
);
