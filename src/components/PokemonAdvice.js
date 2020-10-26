import React, { Component } from 'react';
import { connect } from 'react-redux';
//damage_relations
    /**
     * double_damage_from
     * double_damage_to
     * half_damage_from
     * half_damage_to
     * no_damage_from
     * no_damage_to
     */
/*function handleType(dispatch) {
    return false;
}*/
function mapStateToProps(state) {
    return {
    pokemon: state.get('selectedPokemon'),
    type1: state.get('pokemonType1'),
    type2: state.get('pokemonType2'),
    }
}
function getTypeArray(typeApi){
    var typesArray = [];
    var count = Object.keys(typeApi).length;
    try{
        for (var i =0; i<count;i++)
        {
            typesArray.push(typeApi.get(i).get("name"))
        }
    }catch(e){
        //console.log(e);
    }
    return  typesArray;
}

function getTypeHTML(typeArray){
    return typeArray.map((type)=><span><div className={type}>{type}</div></span>);
}
function compare2TypeEffective(type1EffectiveApi,type1NotEffectiveApi,type2EffectiveApi,type2NotEffectiveApi){
    var type1E = getTypeArray(type1EffectiveApi);
    var type1NE = getTypeArray(type1NotEffectiveApi);
    var type2E = getTypeArray(type2EffectiveApi);
    var type2NE = getTypeArray(type2NotEffectiveApi);
    var newE1=type1E.filter(val => !type2NE.includes(val));
    var newE2=type2E.filter(val => !type1NE.includes(val));
    return [...newE1,...newE2];
}
/*function compare2TypeAvoid(){
    //double-damage-to 
    //combine both types because it will have both moves of that type

}*/
function typeTwoExists(pokemon){
    try{
        pokemon.get("types").get(1).get("type").get("name");
        return true;
    }
    catch(e){
        return false;
    }
}
//getTypeHTML(this.props.type1.get("damage_relations").get("double_damage_from"))

class PokemonAdvice extends Component {
  render() {
    if(typeTwoExists(this.props.pokemon)){
        return (
            <div className="center">
                This pokemon is weak to <div className="grid-types"> {getTypeHTML(compare2TypeEffective(
                this.props.type1.get("damage_relations").get("double_damage_from"),
                this.props.type1.get("damage_relations").get("half_damage_from"),
                this.props.type2.get("damage_relations").get("double_damage_from"),
                this.props.type2.get("damage_relations").get("half_damage_from")
                ))}</div>
            </div>
        )
    }
    else{//one type
        return (
            <div className="center">
                This pokemon is weak to <div className="grid-types"> {getTypeHTML(getTypeArray(
                this.props.type1.get("damage_relations").get("double_damage_from")
                ))}</div>
            </div>
        )
    }
  }
}

export default connect(mapStateToProps)(PokemonAdvice);