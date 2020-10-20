import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import api from '../api/index.js';

function handleSubmit(dispatch) {
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
      });
  }
}

function Search(props) {
  return (
    <form action="" onInput={handleSubmit(props.dispatch)}>
      <input type="text" placeholder="Enter Pokemon name or id" name="pokemon"/>
    </form>
  )
}
//<input type="submit"/>
//changed onSubmit to onInput 
Search.propTypes = {
  dispatch: PropTypes.func,
}

export default connect(null)(Search);