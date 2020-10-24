import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokemonTypes from './PokemonTypes';
import PokemonAdvice from './PokemonAdvice'
function mapStateToProps(state) {
  return {
    pokemon: state.get('selectedPokemon'),
    type1: state.get('pokemonType1'),
    type2: state.get('pokemonType2'),
  }
}

class Pokemon extends Component {
  render() {
    return (
      <article className="Pokemon">
        <PokemonTypes/>
        <div className="Sprite">
          <img
            src={this.props.pokemon.get('sprites').toJS().front_default}
            crossOrigin="anonymous"
            ref="sprite"
            id="sp"
            alt="sprite img"
          />
        </div>
        <div className="Detail">
          <h4 className="Detail-name">
            {this.props.pokemon.get('name')}
          </h4>
        </div>
          <PokemonAdvice/>
      </article>
    )
  }
}

export default connect(mapStateToProps)(Pokemon);
