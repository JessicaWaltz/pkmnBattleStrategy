import { fromJS } from 'immutable';
import defaultPokemon from './defaultPokemon.js';
import type1 from './defaultType1.js';
import type2 from './defaultType2.js'

const initialState = fromJS({
  selectedPokemon: defaultPokemon,
  pokemonType1: type1,
  pokemonType2: type2,
});
const store = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECTED_POKEMON':
      return state.set('selectedPokemon', fromJS(action.payload.pokemon));
    case 'POKEMON_TYPE1':
      return state.set('pokemonType1', fromJS(action.payload.type1));
    case 'POKEMON_TYPE2':
      try{
        return state.set('pokemonType2', fromJS(action.payload.type2));
      }catch(e){
        return state.set('pokemonType2', false);
      }
    default:
      return state
  }
}

export default store;
/**
 * case 'POKEMON-TYPE':
      return state.set('pokemonType', fromJS(action.payload.pokemon.types))
 */