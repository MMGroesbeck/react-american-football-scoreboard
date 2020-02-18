//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";
import Buttons from "./Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [down, setDown] = useState(1);
  const [toGo, setToGo] = useState(10);
  const [ballOn, setBallOn] = useState(50);
  const [quarter, setQuarter] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(15);
  const bottomRowData = {
    down: down,
    toGo: toGo,
    ballOn: ballOn,
    quarter: quarter
  }
  const topRowData = {
    homeScore: homeScore,
    awayScore: awayScore,
    minutes: minutes,
    seconds: seconds
  }
  const buttonsData = {
    handler: handler,
    newGame: newGame,
    incQuarter: incQuarter
  }

function handler(team,points) {
    team === 'home' ? setHomeScore(homeScore + points) : setAwayScore(awayScore + points);
  }

  function newGame(){
    setHomeScore(0);
    setAwayScore(0);
    setDown(1);
    setToGo(10);
    setQuarter(1);
    setMinutes(15);
    setSeconds(0);
    setBallOn(50);
  }

  function incQuarter() {quarter < 4 ? setQuarter(quarter+1) : newGame();};

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow dat={topRowData} />
        <BottomRow dat={bottomRowData} />
      </section>
      <Buttons dat={buttonsData}/>
    </div>
  );
}

export default App;
