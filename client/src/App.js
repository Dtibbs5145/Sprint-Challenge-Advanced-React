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
  }, []);


  useEffect(() => {
    isDark ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
  }, [isDark]);

  const darkMode = (e) => {
    e.preventDefault();
    setIsDark(!isDark);
    if (darkMode) {
      return false;
    }
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  return [isDark, toggleDarkMode]
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <UseDarkMode /> */}
        <Players players={players} />
      </header>
    </div>
  );
}

export default App;
