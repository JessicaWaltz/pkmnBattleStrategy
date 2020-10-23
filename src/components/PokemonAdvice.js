import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokemonTypes from './PokemonTypes';
import api from '../api/index.js';
//damage_relations
    /**
     * double_damage_from
     * double_damage_to
     * half_damage_from
     * half_damage_to
     * no_damage_from
     * no_damage_to
     */
function handleType(dispatch) {
    return false;
}
function mapStateToProps(state) {
    try{
        return {
        pokemon: state.get('selectedPokemon'),
        type1: state.get('pokemonType1'),
        type2: state.get('pokemonType2'),
        }
    }catch(e){
        return{
        pokemon: state.get('selectedPokemon'),
        type1: state.get('pokemonType1'),
        type2: false,
        }
    }
}
function getVeryEffective(props){

}
function getNotVeryEffective(props){

}

class PokemonAdvice extends Component {
  render() {
    return (
        <div>Nothing yet</div>
    )
  }
}

export default connect(mapStateToProps)(PokemonAdvice);