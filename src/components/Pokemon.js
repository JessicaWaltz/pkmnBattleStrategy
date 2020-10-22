import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokemonTypes from './PokemonTypes';

function mapStateToProps(state) {
  return {
    pokemon: state.get('selectedPokemon'),
    //type: state.get('pokemonType1'),
  }
}
/*<div className="Pokemon-types">
This Pokemon's type is: 
<span className={this.props.pokemon.get("types").get(0).get("type").get("name")}> 
 {this.props.pokemon.get("types").get(0).get("type").get("name")}</span></div>
 */
//{this.props.pokemon.types[0].type.get('name').toJS().font_default}
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
          />
        </div>
        <div className="Detail">
          <h4 className="Detail-name">
            {this.props.pokemon.get('name')}
          </h4>
        </div>
        <div> Avoid pokemon with these types: </div>
        <div> Prioritize pokemon with these types: </div>
      </article>
    )
  }
}

export default connect(mapStateToProps)(Pokemon);
/*
function if2types(){
  if (this.props.pokemon.get.get("types").get(1).get("type").get("name")){
    return <div> and its secondary type is {this.props.pokemon.get.get("types").get(1).get("type").get("name")} </div>
  }
}
*/