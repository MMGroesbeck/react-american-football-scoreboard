import React from "react";
import "./App.css";

function Buttons(data) {
  return (
    <div>
      <section className="buttons">
        <div className="homeButtons">
          <button
            className="homeButtons__touchdown"
            onClick={() => data.dat.handler("home", 7)}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => data.dat.handler("home", 3)}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => data.dat.handler("away", 7)}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => data.dat.handler("away", 3)}
          >
            Away Field Goal
          </button>
        </div>
      </section>
      <section className="buttons">
        <div className="moreButtons">
          <button className="miscButton" onClick={() => data.dat.incQuarter()}>
            Next Quarter
          </button>
        </div>
        <div className="pauseButton">
          <button className="miscButton">Start/Stop Clock</button>
        </div>
        <div className="resetScoreButton">
          <button className="miscButton" onClick={() => data.dat.newGame()}>
            Reset Game
          </button>
        </div>
      </section>
    </div>
  );
}

export default Buttons;
