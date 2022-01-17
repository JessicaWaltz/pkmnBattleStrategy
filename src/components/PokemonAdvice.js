import React, { Component } from 'react';
import { connect } from 'react-redux';

import typeImmunity from '../reducers/typeImmunity';
//damage_relations
    /**
     * double_damage_from
     * double_damage_to
     * half_damage_from
     * half_damage_to
     * no_damage_from
     * no_damage_to
     */
function mapStateToProps(state) {
    return {
    pokemon: state.get('selectedPokemon'),
    type1: state.get('pokemonType1'),
    type2: state.get('pokemonType2'),
    }
}
/**
 * getTypeArray returns the param as a list to be used later
 * @param {A json list of types that needs to be returned as an array} typeApi 
 */
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
/**
 * getTypeHTML converts the array of types to the desired 
 * HTML format to style them based on the type
 * @param {an Array of select pokemon types} typeArray 
 */
function getTypeHTML(typeArray){
    if(typeArray === undefined || typeArray.length === 0){
        return <span><div className="none">none</div></span>;
    }
    return typeArray.map((type)=><span><div className={type}>{type}</div></span>);
}
/**
 * Returns a type array based on the num value 
 * - 4 returns any double_damage_from types that are available 
 * in both type1 and type2
 * - 2 returns the combined double_damage_from types from type1
 * and type2 removing any duplicates or any that are  
 * no_damage_from in the other type
 * - 0 returns the combined no_damage_from types that are available 
 * in both type1 and type2
 * - -2 returns the combined double_damage_to types from type1
 * and type2
 * @param {num can be 4 2 0 or -2} num 
 * @param {the json info of the first type of the pokemon} type1 
 * @param {the json info of the second type of the pokemon} type2 
 */
function compareTypeEffectiveOrAvoid(num,type1,type2){
    var ddf1 = type1.get("damage_relations").get("double_damage_from");
    var hdf1 = type1.get("damage_relations").get("half_damage_from");
    var ddf2 = type2.get("damage_relations").get("double_damage_from");
    var hdf2 = type2.get("damage_relations").get("half_damage_from");
    try{var ndf1 = getTypeArray(type1.get("damage_relations").get("no_damage_from"));}
    catch(e){ var ndf1 = [];}
    try{var ndf2 = getTypeArray(type2.get("damage_relations").get("no_damage_from"));}
    catch(e){ var ndf2 = [];}

    var type1E = getTypeArray(ddf1);
    var type1NE = getTypeArray(hdf1);
    var type2E = getTypeArray(ddf2);
    var type2NE = getTypeArray(hdf2);
    if(num===2 || num===4){
        var newE1=type1E.filter(val => !type2NE.includes(val));
        var newE2=type2E.filter(val => !type1NE.includes(val));
        newE1=newE1.filter(val => !ndf2.includes(val));
        newE2=newE2.filter(val => !ndf1.includes(val));
        var duplicate = [];
        for(var i = 0; i < newE1.length; i += 1) {
            if(newE2.indexOf(newE1[i]) > -1){
                duplicate.push(newE1[i]);
            }
        }
        if(num===2){
            newE1=newE1.filter(val => !duplicate.includes(val));
            newE2=newE2.filter(val => !duplicate.includes(val));
            return [...newE1,...newE2];
        }
        else{
            return duplicate;
        }
    }
    else if(num === -2){
        var ddt1 = getTypeArray(type1.get("damage_relations").get("double_damage_to"));
        var ddt2 = getTypeArray(type2.get("damage_relations").get("double_damage_to"));
        ddt1 = ddt1.filter(val => !ddt2.includes(val));
        return [...ddt1,...ddt2];;
    }
    else if(num === 0){
        return[...ndf1,...ndf2];
    }
    else{
        return;
    }
}
function typeTwoExists(pokemon){
    try{
        pokemon.get("types").get(1).get("type").get("name");
        return true;
    }
    catch(e){
        return false;
    }
}
/**
 * Abilities is put into a list with the abilities names only
 * then it is compared to the type immunity list of names
 * if a match is found the name of the ability and the type
 * the ability gives imunity to is pushed to the array.
 * Once all possible abilities are accounted for the array 
 * is returned.
 */
function checkImmunities(abilities){
    var immuneAbility = [];
    var abilitylist = [];
    for (let i = 0; i < abilities.size; i++){
        abilitylist.push(abilities.get(i).get("ability").get("name"));
        for (let j = 0; j < Object.keys(typeImmunity).length; j++){
            if(typeImmunity[j].ability_name.match(abilitylist[i]) && abilitylist[i] != null)
            {
                var obj = {};
                obj["name"] = typeImmunity[j].ability_name;
                obj["immune"] = typeImmunity[j].immune_to;
                immuneAbility.push(obj);
            }
        }
    }
    return immuneAbility;
}
/**
 * The num value determines what info the typeArray holds and 
 * determines what HTML code this function should return
 * - 4 This pokemon takes x4 damage from:
 * - 2 This pokemon takes x2 damage from:
 * - 0 This pokemon won't take any damage from:
 * - -2 This pokemon's matching type moves can do x2 damage to: 
 * - anything besides the above is a check for immunity to a type
 * due to an ability 
 * @param {can be 4 2 0 or -2 else it is an ability check} num 
 * @param {an Array of pokemon types} typeArray 
 */
function typeEffective(num, typeArray){
    if(typeArray === undefined || typeArray.length === 0){
        return;
    }
    else if(num === 4){
        return(
            <div>This pokémon takes x4 damage from: <div className="grid-types"> {getTypeHTML(typeArray)}</div></div>
        )
    }
    else if(num === 2){
        return(
            <div>This pokémon takes x2 damage from: <div className="grid-types"> {getTypeHTML(typeArray)}</div></div>
        )
    }
    else if(num === 0){
        return(
            <div>This pokémon won't take any damage from: <div className="grid-types"> {getTypeHTML(typeArray)}</div></div>
        )
    }
    else if(num === -2){
        return(
            <div>This pokémon's matching type moves can do x2 damage to: <div className="grid-types"> {getTypeHTML(typeArray)}</div></div>
        )
    }
    else{
        var immuneAbilities = checkImmunities(typeArray);
        if(immuneAbilities.length != 0){
            return(
                immuneAbilities.map((a)=> <div>Possible ability {a.name} would make them immune to: <div className="grid-types"> {getTypeHTML([a.immune])}</div></div>)
            )
        }
        return;
    }
}
/**
 * This component renders the type info to give the user advice on what types they should
 * avoid or prioritize.
 */
class PokemonAdvice extends Component {
  render() {
    if(typeTwoExists(this.props.pokemon)){
        var EffectiveX2 = compareTypeEffectiveOrAvoid(2,this.props.type1,this.props.type2);    
        var EffectiveX4 = compareTypeEffectiveOrAvoid(4,this.props.type1,this.props.type2);
        var NotEffectiveX2 = compareTypeEffectiveOrAvoid(-2,this.props.type1,this.props.type2);
        var NoDamagefrom = compareTypeEffectiveOrAvoid(0,this.props.type1,this.props.type2);
        var NoDamageTo = compareTypeEffectiveOrAvoid(1,this.props.type1,this.props.type2);
        return (
            <div className="center">
                {typeEffective(4,EffectiveX4)}
                {typeEffective(2,EffectiveX2)}
                {typeEffective(0,NoDamagefrom)}
                {typeEffective(-2,NotEffectiveX2)}
                {typeEffective(100, this.props.pokemon.get("abilities"))}
            </div>
        )
    }
    else{
        return (
            <div className="center">
                {typeEffective(2,getTypeArray(this.props.type1.get("damage_relations").get("double_damage_from")))}
                {typeEffective(0,getTypeArray(this.props.type1.get("damage_relations").get("no_damage_from")))}
                {typeEffective(-2,getTypeArray(this.props.type1.get("damage_relations").get("double_damage_to")))}
                {typeEffective(100, this.props.pokemon.get("abilities"))}
            </div>
        )
    }
  }
}

export default connect(mapStateToProps)(PokemonAdvice);