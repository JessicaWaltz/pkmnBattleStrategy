import React, { Component } from 'react';
import Pokemon from './components/Pokemon.js';
import Search from './components/Search.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App main-grid-container">
        <div className="title grid-title"> PKMN Battle Strategy</div>
        <div className="grid-left">Enter Enemy Team:
          <Search/>
        </div>
        <div className="grid-explanation">
          <div className="Explanation">
            This will calculate the best type advantages to have, it will take into account what type
            the enemy team is most weak to and what type the enemy team is strongest against to give the 
            top best types with a score associated with them
          </div>
        </div>
        <div className="grid-right">
          <Pokemon/>
        </div>
      </div>
    );
  }
}
//Add Ability to add multiple searches with corresponding pokemon
export default App;
