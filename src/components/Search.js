import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import api from '../api/index.js';
import eType from '../reducers/emptyType';
import fetch from 'cross-fetch';
function mapStateToProps(state) {
  return {
    pokemon: state.get('selectedPokemon'),
  }
}
//uncomment above and then getType1(this.props)
function handleSubmit(dispatch) {
  //return [handlePokemonSubmit(dispatch),handleType1Submit(dispatch),handleType2Submit(dispatch)];
  
  return (event) => {
    event.preventDefault();
    const pokemonNameID = new FormData(event.currentTarget).get('pokemon');
    console.log(pokemonNameID);
    api.getPokemon(pokemonNameID)
      .then((response) => {
        dispatch({
          type: 'SELECTED_POKEMON',
          payload: {
            pokemon: response.body,
          }
        })
      })
      .catch((error) => {
        console.log(error);
      })
      .then(()=>{
        fetch(this.props.pokemon.get("types").get(0).get("type").get("url"))
        .then((response) => {
          dispatch({
            type: 'POKEMON_TYPE1',
            payload: {
              type1: response.body,
            }
          })
       })
      })
      .then(()=>{
        try{
        fetch(this.props.pokemon.get("types").get(1).get("type").get("url"))
        .then((response) => {
          dispatch({
            type: 'POKEMON_TYPE2',
            payload: {
              type2: response.body,
            }
          })
        })
        }
        catch(e){
          
        }
      })
  }
}
function handlePokemonSubmit(dispatch){
  return (event) => {
    event.preventDefault();
    const pokemonNameID = new FormData(event.currentTarget).get('pokemon');
    api.getPokemon(pokemonNameID)
      .then((response) => {
        dispatch({
          type: 'SELECTED_POKEMON',
          payload: {
            pokemon: response.body,
          }
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
function handleType1Submit(dispatch){
  var typeOne=this.props.pokemon.get("types").get(0).get("type").get("name");
  return (event) => {
    event.preventDefault();
    api.getPokemon(typeOne)
      .then((response) => {
        dispatch({
          type: 'POKEMON_TYPE1',
          payload: {
            type1: response.body,
          }
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
function handleType2Submit(dispatch){
  try{
    var typeTwo=this.props.pokemon.get("types").get(1).get("type").get("name");
    return (event) => {
      event.preventDefault();
      api.getPokemon(typeTwo)
        .then((response) => {
          dispatch({
            type: 'POKEMON_TYPE2',
            payload: {
              type2: response.body,
            }
          })
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }catch(e){
    return{
    
        type: 'POKEMON_TYPE2',
        payload: {
          type2: eType,
        }
    }
  }
}

function Search(props) {
  return (
    <form action="" onSubmit={handleSubmit(props.dispatch)}>
      <input className="search" type="text" placeholder="name/id" name="pokemon"/>
      <input className="pkmn-button"type="submit"name="."value="."/>
    </form>
  )
}
Search.propTypes = {
  dispatch: PropTypes.func,
}

export default connect(null)(Search);