import React from "react";
import "./App.css";

const TopRow = data => {
  function twoDigits(n) {
    return n < 10 ? "0" + n : n;
  }
  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">Lions</h2>
        <div className="home__score">{data.dat.homeScore}</div>
      </div>
      <div className="timer">
        {twoDigits(data.dat.minutes)}:{twoDigits(data.dat.seconds)}
      </div>
      <div className="away">
        <h2 className="away__name">Tigers</h2>
        <div className="away__score">{data.dat.awayScore}</div>
      </div>
    </div>
  );
};

export default TopRow;
