import React, { Component } from 'react';
import Pokemon from './components/Pokemon.js';
import Search from './components/Search.js';
import api from './api/index.js';
import './App.css';
import '../src/css/PokemonType.css'

class App extends Component {
  componentDidMount(dispatch){
    return (event) => {
      event.preventDefault();
      api.getNormal()
      .then((response) => {
        dispatch({
          type: 'NORMAL_TYPE',
          payload: {
            normal: response.body,
          }
        })
      });
      api.getFighting()
      .then((response) => {
        dispatch({
          type: 'FIGHTING_TYPE',
          payload: {
            fighting: response.body,
          }
        })
      });
      api.getFlying()
      .then((response) => {
        dispatch({
          type: 'FLYING_TYPE',
          payload: {
            flying: response.body,
          }
        })
      });
      api.getGround()
      .then((response) => {
        dispatch({
          type: 'GROUND_TYPE',
          payload: {
            ground: response.body,
          }
        })
      });
      api.getRock()
      .then((response) => {
        dispatch({
          type: 'ROCK_TYPE',
          payload: {
            rock: response.body,
          }
        })
      });
      api.getBug()
      .then((response) => {
        dispatch({
          type: 'BUG_TYPE',
          payload: {
            bug: response.body,
          }
        })
      });
      api.getGhost()
      .then((response) => {
        dispatch({
          type: 'GHOST_TYPE',
          payload: {
            ghost: response.body,
          }
        })
      });
      api.getSteel()
      .then((response) => {
        dispatch({
          type: 'STEEL_TYPE',
          payload: {
            steel: response.body,
          }
        })
      });
      api.getFire()
      .then((response) => {
        dispatch({
          type: 'FIRE_TYPE',
          payload: {
            fire: response.body,
          }
        })
      });
      api.getWater()
      .then((response) => {
        dispatch({
          type: 'WATER_TYPE',
          payload: {
            water: response.body,
          }
        })
      });
      api.getElectric()
      .then((response) => {
        dispatch({
          type: 'ELECTRIC_TYPE',
          payload: {
            electric: response.body,
          }
        })
      });
      api.getPsychic()
      .then((response) => {
        dispatch({
          type: 'PSYCHIC_TYPE',
          payload: {
            psychic: response.body,
          }
        })
      });
      api.getIce()
      .then((response) => {
        dispatch({
          type: 'ICE_TYPE',
          payload: {
            ice: response.body,
          }
        })
      });
      api.getDragon()
      .then((response) => {
        dispatch({
          type: 'DRAGON_TYPE',
          payload: {
            dragon: response.body,
          }
        })
      });
      api.getDark()
      .then((response) => {
        dispatch({
          type: 'DARK_TYPE',
          payload: {
            dark: response.body,
          }
        })
      });
      api.getFairy()
      .then((response) => {
        dispatch({
          type: 'FAIRY_TYPE',
          payload: {
            fairy: response.body,
          }
        })
      });
      
    }
  }
  
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
