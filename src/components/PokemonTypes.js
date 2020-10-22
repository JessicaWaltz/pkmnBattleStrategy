import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
      pokemon: state.get('selectedPokemon'),
      //type: state.get('pokemonType1'),
    }
  }
function OneType(props){
    const type1= props.type1;
    return(
    <div className="Pokemon-types">
    This Pokemon's type is: 
    <span className={type1}> 
     {type1}</span></div>
    )
}
function TwoTypes(props){
    const type1= props.type1;
    const type2= props.type2;
    return(
    <div className="Pokemon-types">
        This Pokemon's types are: 
        <span className={type1}> 
        {type1}
        </span> 
        / 
        <span className={type2}> 
        {type2}
        </span>
     
    </div>
    )
}
function IsPokemonTypes(props){
    const type1= props.type1;
    const type2= props.type2;
    if(type1 && type2){
        return <TwoTypes type1={props.type1} type2={props.type2}/>
    }
    else{
        return <OneType type1={props.type1}/>
    }
}
function typeTwoExists(pokemon){
    try{
        return pokemon.get("types").get(1).get("type").get("name");
    }
    catch(e){
        return false;
    }
}
class PokemonTypes extends Component {
    
    
    render() {
        var typeOne=this.props.pokemon.get("types").get(0).get("type").get("name");
        var typeTwo=typeTwoExists(this.props.pokemon);
        return (
    <IsPokemonTypes type1={typeOne}
    type2={typeTwo} />
        )
    }
}

export default connect(mapStateToProps)(PokemonTypes);