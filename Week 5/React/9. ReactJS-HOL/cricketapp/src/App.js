import React from "react";
import "./App.css";

import ListofPlayers from "./ListofPlayers";
import Scorebelow70 from "./Scorebelow70";
import ListofIndianPlayers from "./ListofIndianPlayers";
import { OddPlayers, EvenPlayers, IndianPlayers } from "./IndianPlayers";

function App() {

  const flag = true;

  const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "Ann", score: 61 },
    { name: "Elisabeth", score: 61 },
    { name: "Sachin", score: 95 },
    { name: "Dravid", score: 100 },
    { name: "Dhoni", score: 84 },
    { name: "Virat", score: 76 },
    { name: "Jadeja", score: 64 }
  ];

  return (
    <div className="App">

      {flag ? (
        <div>

          <h1>List of Players</h1>

          <ListofPlayers players={players} />

          <hr />

          <h1>List of Players having Scores Less than 70</h1>

          <Scorebelow70 players={players} />

        </div>
      ) : (
        <div>

          <h1>Indian Team</h1>

          <h3>Odd Players</h3>

          <OddPlayers IndianPlayers={IndianPlayers} />

          <hr />

          <h3>Even Players</h3>

          <EvenPlayers IndianPlayers={IndianPlayers} />

          <hr />

          <h3>List of Indian Players Merged:</h3>

          <ListofIndianPlayers IndianPlayers={IndianPlayers} />

        </div>
      )}

    </div>
  );
}

export default App;