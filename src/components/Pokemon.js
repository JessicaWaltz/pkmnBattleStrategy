import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    pokemon: state.get('selectedPokemon'),
    type: state.get('pokemonType'),
  }
}
//{this.props.pokemon.types[0].type.get('name').toJS().font_default}
class Pokemon extends Component {
  render() {
    return (
      <article className="Pokemon">
        <div className="Pokemon-types">
        This Pokemons main type is: {this.props.pokemon.get("types").get(0).get("type").get("name")}
        </div>
        <div className="Sprite">
          <img
            src={this.props.pokemon.get('sprites').toJS().front_default}
            crossOrigin="anonymous"
            ref="sprite"
            id="sp"
          />
        </div>
        <div className="Detail">
          <div className="display-none">
            store types associated with pokemon type to use in results component
          </div>
          <h4 className="Detail-name">
            {this.props.pokemon.get('name')}
          </h4>
        </div>
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