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
    if(typeArray === undefined || typeArray.length === 0){
        return <span><div className="none">none</div></span>;
    }
    return typeArray.map((type)=><span><div className={type}>{type}</div></span>);
}
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
//getTypeHTML(this.props.type1.get("damage_relations").get("double_damage_from"))
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
                This pokemon takes x4 damage from: <div className="grid-types"> {getTypeHTML(EffectiveX4)}</div>
                This pokemon takes x2 damage from: <div className="grid-types"> {getTypeHTML(EffectiveX2)}</div>
                This pokemon won't take any damage from: <div className="grid-types"> {getTypeHTML(NoDamagefrom)}</div>
                This pokemon's matching type moves can do x2 damage to: <div className="grid-types"> {getTypeHTML(NotEffectiveX2)}</div>
            </div>
        )
    }
    else{
        return (
            <div className="center">
                This pokemon takes x2 damage from: <div className="grid-types"> {getTypeHTML(getTypeArray(
                this.props.type1.get("damage_relations").get("double_damage_from")
                ))}</div>
                This pokemon won't take any damage from: <div className="grid-types"> {getTypeHTML(getTypeArray(
                this.props.type1.get("damage_relations").get("no_damage_from")
                ))}</div>
                This pokemon's matching type moves can do x2 damage to: <div className="grid-types"> {getTypeHTML(getTypeArray(
                this.props.type1.get("damage_relations").get("double_damage_to")
                ))}</div>
            </div>
        )
    }
  }
}

export default connect(mapStateToProps)(PokemonAdvice);