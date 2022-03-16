import logo from "./logo.svg";
import "./App.css";
import { getDevelopers } from "./services/api";

import { useEffect, useState } from "react";

function App() {
  const [developers, setDevelopers] = useState();
  useEffect(() => {
    getDevelopers().then((response) => {
      console.log(response.data);
      setDevelopers(response.data);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code></code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
