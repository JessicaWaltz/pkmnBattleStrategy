import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
      pokemon: state.get('selectedPokemon'),
      type1: state.get('pokemonType1'),
      type2: state.get('pokemonType2'),
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
/*function ReturnType1(props){
    const type1= props.type1;
    return type1;
}
function ReturnType2(props){
    const type2= props.type2;
    return type2;
}
function Has1Or2(pokemon){
    try{
        const test= pokemon.get("types").get(1).get("type").get("name");
        return 2
    }
    catch(e){
        return 1;
    }
}*/
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
            <div>
                <IsPokemonTypes type1={typeOne}
                type2={typeTwo} />
                This pokemon is weak to {this.props.type1.get("damage_relations").get("double_damage_from").get(0).get("name")}
            </div>
        )
    }
}

export default connect(mapStateToProps)(PokemonTypes);