import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import api from '../api/index.js';

function handleSubmit(dispatch) {
  return (event) => {
    event.preventDefault();
    const pokemonNameID = new FormData(event.currentTarget).get('pokemon');
    //const pokemonType1= new FotmData(event.currentTarget).get('pokemon').get('types').get(0).get('name');
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
      });
   /* api.getType1(pokemonType1)
    .then((response) => {
      dispatch({
        type: 'POKEMON_TYPE1',
        payload:{
          type: response.body,
        }
      })
    });*/
  }
}

function Search(props) {
  return (
    <form action="" onInput={handleSubmit(props.dispatch)}>
      <input type="text" placeholder="name or id" name="pokemon"/>
    </form>
  )
}
//<input type="submit"/>
//changed onSubmit to onInput 
Search.propTypes = {
  dispatch: PropTypes.func,
}

export default connect(null)(Search);