import React, { Component } from 'react';
import Pokemon from './components/Pokemon.js';
import Search from './components/Search.js';
import './App.css';
import '../src/css/PokemonType.css'

class App extends Component {
  render() {
    return (
      <div className="App main-grid-container">
        <div className="grid-title"> <div><div className="title">PKMN Battle Strategy</div></div></div>
        <div className="grid-main">
            <div className="grid-left">Enter Enemy Pokemon:
            <Search/>
            </div>
            <div className="grid-explanation">
              <div className="Explanation">
                Welcome to Pokemon Battle Strategy! Here you can enter the pokemon your fighting and we will calculate the best
                type advantage for you to counter them with.
                <div className="display-none">
                  Add slider here: "How big is the enemy team?" slider goes from 1 to 6 and adds or removes search/pokemon based on number
                </div>
              </div>
            </div>
          <div className="grid-right">
            <Pokemon/>
          </div>
        </div>
        <div className="footer grid-footer"> <br></br><br></br><br></br><br></br>this is the footer to be added </div>
      </div>
    );
  }
}
//Add Ability to add multiple searches with corresponding pokemon
export default App;
