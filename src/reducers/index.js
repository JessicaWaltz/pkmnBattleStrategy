import { fromJS } from 'immutable';
import defaultPokemon from './defaultPokemon.js';
import type1 from './defaultType1.js';
import type2 from './defaultType2.js'
import api from '../api/index.js'

const initialState = fromJS({
  selectedPokemon: defaultPokemon,
  pokemonType1: type1,
  pokemonType2: type2,
  normalType: api.getNormal(),
  fightingType: api.getFighting(),
  flyingType: api.getFlying(),
  poisonType: type2,
  groundType: api.getGround(),
  rockType: api.getRock(),
  bugType: api.getBug(),
  ghostType: api.getGhost(),
  steelType: api.getSteel(),
  fireType: api.getFire(),
  waterType: api.getWater(),
  grassType: type1,
  electricType: api.getElectric(),
  psychicType: api.getPsychic(),
  iceType: api.getIce(),
  dragonType: api.getDragon(),
  darkType: api.getDark(),
  fairyType: api.getFairy(),


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
    case 'NORMAL_TYPE':
      return state.set('normalType', fromJS(action.payload.normal));
    case 'FIGHTING_TYPE':
      return state.set('fightingType', fromJS(action.payload.fighting));
    case 'FLYING_TYPE':
      return state.set('flyingType', fromJS(action.payload.flying));
    case 'POISON_TYPE':
      return state.set('poisonType', fromJS(action.payload.poison));
    case 'GROUND_TYPE':
      return state.set('groundType', fromJS(action.payload.ground));
    case 'ROCK_TYPE':
      return state.set('rockType', fromJS(action.payload.rock));
    case 'BUG_TYPE':
      return state.set('bugType', fromJS(action.payload.bug));
    case 'GHOST_TYPE':
      return state.set('ghostType', fromJS(action.payload.ghost));
    case 'STEEL_TYPE':
      return state.set('steelType', fromJS(action.payload.steel));
    case 'FIRE_TYPE':
      return state.set('fireType', fromJS(action.payload.fire));
    case 'WATER_TYPE':
      return state.set('waterType', fromJS(action.payload.water));
    case 'GRASS_TYPE':
      return state.set('grassType', fromJS(action.payload.grass));
    case 'ELECTRIC_TYPE':
      return state.set('electricType', fromJS(action.payload.electric));
    case 'PSYCHIC_TYPE':
      return state.set('psychicType', fromJS(action.payload.psychic));
    case 'ICE_TYPE':
      return state.set('iceType', fromJS(action.payload.ice));
    case 'DRAGON_TYPE':
      return state.set('dragonType', fromJS(action.payload.dragon));
    case 'DARK_TYPE':
      return state.set('darkType', fromJS(action.payload.dark));
    case 'FAIRY_TYPE':
      return state.set('fairyType', fromJS(action.payload.fairy));
    default:
      return state
  }
}

export default store;
/**
 * case 'POKEMON-TYPE':
      return state.set('pokemonType', fromJS(action.payload.pokemon.types))
 */