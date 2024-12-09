import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Stat from "./components/Stat";

function App() {
  const [points, setPoints] = useState(27);
  const [str, setStr] = useState(8);
  const [dex, setDex] = useState(8);
  const [con, setCon] = useState(8);
  const [int, setInt] = useState(8);
  const [wis, setWis] = useState(8);
  const [cha, setCha] = useState(8);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>Points Available: {points}</p>
      </div>
      <div className="flex flex-col gap-4">
        <Stat
          statName="Strength"
          statValue={str}
          setStat={setStr}
          pointValue={points}
          setPoints={setPoints}
        />
        <Stat
          statName="Dexterity"
          statValue={dex}
          setStat={setDex}
          pointValue={points}
          setPoints={setPoints}
        />
        <Stat
          statName="Constitution"
          statValue={con}
          setStat={setCon}
          pointValue={points}
          setPoints={setPoints}
        />
        <Stat
          statName="Intellect"
          statValue={int}
          setStat={setInt}
          pointValue={points}
          setPoints={setPoints}
        />
        <Stat
          statName="Wisdom"
          statValue={wis}
          setStat={setWis}
          pointValue={points}
          setPoints={setPoints}
        />
        <Stat
          statName="Charisma"
          statValue={cha}
          setStat={setCha}
          pointValue={points}
          setPoints={setPoints}
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
