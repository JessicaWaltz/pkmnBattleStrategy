import { fromJS } from 'immutable';
import defaultPokemon from './defaultPokemon.js';

const initialState = fromJS({
  selectedPokemon: defaultPokemon,
});

const store = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECTED_POKEMON':
      return state.set('selectedPokemon', fromJS(action.payload.pokemon));
      case 'POKEMON-TYPE':
      return state.set('pokemonType', fromJS(action.payload.pokemon.types));
    default:
      return state
  }
}

export default store;
/**
 * case 'POKEMON-TYPE':
      return state.set('pokemonType', fromJS(action.payload.pokemon.types))
 */