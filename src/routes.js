import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Isograms from "./components/katas/complete/Isograms";
import Grades from './components/katas/complete/Grades';
import LettersToNumbers from './components/katas/complete/LettersToNumbers';
import SquareDigits from './components/katas/complete/SquareDigits'
import Narcissism from './components/katas/complete/Narcissistic';
import WordSpinner from './components/katas/complete/WordSpinner';
import MiddleEarth from './components/katas/incomplete/good-vs-evil/GoodVEvil';
import MorseDecoder from './components/katas/incomplete/MorseCode';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path = "/isograms" component = {Isograms} />
    <Route path = '/grades' component = {Grades} />
    <Route path = '/lettersToNumbers' component = {LettersToNumbers} />
    <Route path = '/squareDigits' component = {SquareDigits} />
    <Route path = '/narcissism' component = {Narcissism} /> 
    <Route path = '/wordSpinner' component = {WordSpinner} />
    <Route path = '/MiddleEarth' component = {MiddleEarth} />
    <Route path = '/morse' component = {MorseDecoder} />
  </Switch>
);
