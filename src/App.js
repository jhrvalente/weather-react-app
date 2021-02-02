import React from 'react';
import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <Weather cityDefault="Lisbon"/>
      <footer>
        <a href="https://github.com/jhrvalente/weather-react-app" target="_blank"> Open-source project </a> coded by João Valente
      </footer>
    </div>
  );
}

export default App;
