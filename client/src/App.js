import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../src/button2.png';
import './App.css';
import Players from './components/Players';
import useLocalStorage from './components/useLocalStorage';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [isDark, setIsDark] = useLocalStorage();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => setPlayers(res.data))
      .catch(err => console.log(err));

    isDark ? document.body.classList.add('darkMode') : document.body.classList.remove('darkMode')
  }, [isDark]);

  const darkMode = (e) => {
    console.log('toggling')
    e.preventDefault();
    setIsDark(!isDark);
    if (darkMode) {
      return false;
    }
  };

  return (
    <div className="App">
      <header className={isDark ? "App-header" : "darkMode"}>
        <h1>Woman's World Cup</h1>
        <div onClick={darkMode}>
          <img src={logo} className={isDark ? "App button App-logo" : "darkMode App-logo"} alt="logo" />
        </div>
        <Players players={players} />
      </header>
    </div>
  );
}

export default App;
