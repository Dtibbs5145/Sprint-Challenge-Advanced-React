import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../src/button2.png';
import './App.css';
import Players from './components/Players';
// import UseDarkMode from './components/UseDarkMode';
import useLocalStorage from './components/useLocalStorage';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [isDark, setIsDark] = useLocalStorage();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => setPlayers(res.data))
      .catch(err => console.log(err));
  


  // useEffect(() => {
    isDark ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
  }, [isDark]);

  const darkMode = (e) => {
      console.log('toggling')
    e.preventDefault();
    setIsDark(!isDark);
    if (darkMode) {
      return false;
    }
  };

  // const toggleDarkMode = () => {
  //   setIsDark(!isDark);
  // return [isDark, toggleDarkMode]
  // }

  return (
    <div className="App darkMode">
      <header className="App-header">
        <h1>Woman's World Cup</h1>
        <div onClick={darkMode}>
        <img src={logo} className="App-header button App-logo" alt="logo" />
        </div>
        <Players players={players} />
      </header>
    </div>
  );
}

export default App;
