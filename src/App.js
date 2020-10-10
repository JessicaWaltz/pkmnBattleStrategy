import React, { Component } from 'react';
import Pokemon from './components/Pokemon.js';
import Search from './components/Search.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>PKMN Battle Strategy</div>
      <div>Enter Enemy Team:</div>
      <Search/>
      <div>This will calculate the best type advantages to have, it will take into account what type
        the enemy team is most weak to and what type the enemy team is strongest against to give the 
        top best types with a score associated with them</div>
      <Pokemon/>
      </div>
    );
  }
}

export default App;
