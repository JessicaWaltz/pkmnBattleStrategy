import React, { Component } from 'react';
import Pokemon from './components/Pokemon.js';
import Search from './components/Search.js';
import api from './api/index.js';
import MyFooter from './components/MyFooter.js';
import './App.css';
import '../src/css/PokemonType.css';

class App extends Component {
  componentDidMount(){
    var dispatch = this.props.dispatch;
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
    <div>
      <div className="App main-grid-container">
        <div className="grid-title"> <div><div className="title">PKMN Battle Strategy</div></div></div>
        <div className="grid-main">
            <div className="grid-left">Enter Enemy Pokémon:
            <Search/>
            </div>
            <div className="grid-explanation">
              <div className="cloud-top">.</div>
              <div className="Explanation cloud">
                Welcome to Pokémon Battle Strategy! Here you can enter the Pokémon your fighting and we will calculate the best
                type advantage for you to counter them with.
              </div>
              <div className="cloud-bottom">.</div>
            </div>
          <div className="grid-right">
            <Pokemon/>
          </div>
        </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> 
      <footer className="footer grid-footer"> <br></br><br></br> 
        <MyFooter/>
        <br></br>
      </footer>
    </div>
    );
  }
}
//Add Ability to add multiple searches with corresponding pokemon
export default App;
/**<footer className="footer grid-footer"> <br></br><br></br> 
        <MyFooter/>
      </footer> */