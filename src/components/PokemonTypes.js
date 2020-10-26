import React, { Component } from 'react';
import { connect } from 'react-redux';
//import api from '../api/index.js';

function mapStateToProps(state) {
    return {
      pokemon: state.get('selectedPokemon'),
      type1: state.get('pokemonType1'),
      type2: state.get('pokemonType2'),
      normal: state.get('normalType'),
      fighting: state.get('fightingType'),
      flying: state.get('flyingType'),
      poison: state.get('poisonType'),
      ground: state.get('groundType'),
      rock: state.get('rockType'),
      bug: state.get('bugType'),
      ghost: state.get('ghostType'),
      steel: state.get('steelType'),
      fire: state.get('fireType'),
      water: state.get('waterType'),
      grass: state.get('grassType'),
      electric: state.get('electricType'),
      psychic: state.get('psychicType'),
      ice: state.get('iceType'),
      dragon: state.get('dragonType'),
      dark: state.get('darkType'),
      fairy: state.get('fairyType'),
    
    }
}
function returnTypeInfo(type,props){
    switch(type){
        case "normal":
            return props.normal;
        case "fighting":
            return props.fighting;
        case "flying":
            return props.flying;
        case "poison":
            return props.poison;
        case "ground":
            return props.ground;
        case "rock":
            return props.rock;
        case "bug":
            return props.bug;
        case "ghost":
            return props.ghost;
        case "steel":
            return props.steel;
        case "fire":
            return props.fire;
        case "water":
            return props.water;
        case "grass":
            return props.grass;
        case "electric":
            return props.electric;
        case "psychic":
            return props.psychic;
        case "ice":
            return props.ice;
        case "dragon":
            return props.dragon;
        case "dark":
            return props.dark;
        case "fairy":
            return props.fairy; 
        default:
            return false;           
    }
}
function type2Exists(pokemon){
    try{
        console.log(pokemon.get("types").get(1).get("type").get("name"));
        return true
    }
    catch(e){
        return false;
    }
}
class IsPokemonTypes extends Component{
    render(){
        const type1= this.props.type1;
        const type2= this.props.type2;
        console.log("isPokemonTypes type1 value is:" );
        console.log("");
        if(type1 && type2){
            return <TwoTypes val1={type1.get("name")} val2={type2.get("name")}/>
        }
        else{
            return <OneType val1={type1.get("name")}/>
        }
    }
}
function OneType(props){
    const type1= props.val1;
    console.log("the one type value is: ");
    console.log(type1);
    return(
    <div className="Pokemon-types">
    This Pokemon is: 
    <span className={type1}> 
     {type1}</span></div>
    )
}
function TwoTypes(props){
    const type1= props.val1;
    const type2= props.val2;
    return(
    <div className="Pokemon-types">
        This Pokemon is: 
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
class PokemonTypes extends Component {
    render() {
        var typeOne = returnTypeInfo(this.props.pokemon.get("types").get(0).get("type").get("name"),this.props);
        console.log("typeOne is:");
        console.log(typeOne);
        console.log("And I'm putting in:");
        console.log(this.props.pokemon.get("types").get(0).get("type").get("name"));
        var typeTwo = false;
        if(type2Exists(this.props.pokemon)){
            typeTwo =  returnTypeInfo(this.props.pokemon.get("types").get(1).get("type").get("name"),this.props);
        }
        console.log(typeTwo);
        return (
            <div>
                <IsPokemonTypes type1={typeOne}
                type2={typeTwo} />
             </div>
        )
    }
}
//var typeOne=this.props.type1.get("name");
//var typeTwo=typeTwoExists(this.props.pokemon);
export default connect(mapStateToProps)(PokemonTypes);
    /*shouldUpdate = true;
    count = 0;
    shouldComponentUpdate(){
        if(this.shouldUpdate){
            return true;
        }
        this.count=0;
        this.shouldUpdate = true;
        return false;
    }
    componentDidUpdate(){
        var typeOne=this.props.pokemon.get("types").get(0).get("type").get("name");
        var typeTwo=typeTwoExists(this.props.pokemon);
        var dispatch = this.props.dispatch;
        api.getType1(typeOne)
        .then((response) => {
            dispatch({
              type: 'POKEMON_TYPE1',
              payload: {
                type1: response.body,
              }
            })
          })
          .catch((error) => {
            console.log(error);
          });
        try{
            api.getType2(typeTwo)
            .then((response) => {
                dispatch({
                  type: 'POKEMON_TYPE2',
                  payload: {
                    type2: response.body,
                  }
                })
              })
              .catch((error) => {
                console.log(error);
              });
        }catch(e){
            
        }
          this.count+=1;
          if (this.count%2===0){
              this.shouldUpdate = false;
          }
    }*/




/*function OneType(props){
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
}*/
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
/*function IsPokemonTypes(props){
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
        console.log(pokemon.get("types").get(1).get("type").get("name"));
        return this.props.type2.get("name");
        //pokemon.get("types").get(1).get("type").get("name");
    }
    catch(e){
        return false;
    }
}*/