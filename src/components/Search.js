import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import api from '../api/index.js';
/**
 * Makes 2-3 API calls when submit button is pushed
 * adds pokemon to the store along with an API call
 * for type info associated with the pokemon
 * @param {propTypes.func} dispatch 
 */
function handleSubmit(dispatch) {
  //set loading to true
  return (event) => {
    event.preventDefault();
    const pokemonNameID = new FormData(event.currentTarget).get('pokemon').toLowerCase();
    api.getPokemon(pokemonNameID)
      .then((response) => {
        dispatch({
          type: 'SELECTED_POKEMON',
          payload: {
            pokemon: response.body,
          }
        })
        api.getType1(response.body.types[0].type.name)
        .then((response2) =>{
          dispatch({
            type: 'POKEMON_TYPE1',
            payload: {
              type1: response2.body,
            }
          })
        })
        .catch((error2)=>{
          console.log("ERROR IN GETTYPE1");
          console.log(error2);
        })
        if(response.body.types.length === 2){
        api.getType2(response.body.types[1].type.name)
        .then((response3) =>{
          dispatch({
            type: 'POKEMON_TYPE2',
            payload: {
              type2: response3.body,
            }
          })
          //loading = false
        })
        .catch((error3)=>{
          console.log("ERROR IN GETTYPE2");
          console.log(error3);
        })}
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
/**
 * input field to enter pokemon name or id and submit button
 * to search and store information on the pokemon
 * @param {props} props 
 */
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