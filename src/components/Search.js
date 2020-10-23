import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import api from '../api/index.js';
function mapStateToProps(state) {
  return {
    pokemon: state.get('selectedPokemon'),
    type1: state.get('pokemonType1'),
    type2: state.get('pokemonType2'),
  }
}
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
    <form action="" onSubmit={handleSubmit(props.dispatch)}>
      <input className="search" type="text" placeholder="name/id" name="pokemon"/>
      <input className="pkmn-button"type="submit"name="."value="."/>
    </form>
  )
}
//<input type="submit"/>
//changed onSubmit to onInput 
Search.propTypes = {
  dispatch: PropTypes.func,
}

export default connect(null)(Search);