import React, { Component } from 'react';
import { connect } from 'react-redux';
//import api from '../api/index.js';

function mapStateToProps(state) {
    return {
      pokemon: state.get('selectedPokemon'),
      type1: state.get('pokemonType1'),
      type2: state.get('pokemonType2'),
    }
}
function type2Exists(pokemon){
    try{
        pokemon.get("types").get(1).get("type").get("name");
        return true
    }
    catch(e){
        return false;
    }
}

class PokemonTypes extends Component {
    render() {
        if(type2Exists(this.props.pokemon)){
            return (
                <div className="Pokemon-types">
                    This Pokemon is: 
                    <span className={this.props.type1.get("name")}> 
                    {this.props.type1.get("name")}
                    </span> 
                    / 
                    <span className={this.props.type2.get("name")}> 
                    {this.props.type2.get("name")}
                    </span>
                </div>
            )
        }
        return (
            <div className="Pokemon-types">
                This Pokemon is: 
                <span className={this.props.type1.get("name")}> 
                {this.props.type1.get("name")}
                </span>
            </div>
        )
    }
}
export default connect(mapStateToProps)(PokemonTypes);