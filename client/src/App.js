import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
import Players from './components/Players';
import UseDarkMode from './components/UseDarkMode';

const App = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => setPlayers(res.data))
      .catch(err => console.log(err));
  }, []);

  // const darkMode = this.darkMode
  // if (darkMode) {
  //   return false;
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Players players={players}/>
      </header>
    </div>
  );
}

export default App;
