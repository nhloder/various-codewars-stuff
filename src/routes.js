import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Isograms from "./components/katas/complete/Isograms";
import Grades from './components/katas/complete/Grades';
import LettersToNumbers from './components/katas/complete/LettersToNumbers';
import SquareDigits from './components/katas/complete/SquareDigits'
import Narcissism from './components/katas/complete/Narcissistic';
import WordSpinner from './components/katas/complete/WordSpinner';
import HighScore from './components/katas/incomplete/HighScore';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path = "/isograms" component = {Isograms} />
    <Route path = '/grades' component = {Grades} />
    <Route path = '/lettersToNumbers' component = {LettersToNumbers} />
    <Route path = '/squareDigits' component = {SquareDigits} />
    <Route path = '/narcissism' component = {Narcissism} /> 
    <Route path = '/wordSpinner' component = {WordSpinner} />
    <Route path = '/highScore' component = {HighScore} />
  </Switch>
);
