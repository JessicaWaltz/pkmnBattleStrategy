import superagent from 'superagent';
import asPromised from 'superagent-as-promised';
asPromised(superagent);

const api = {
  getPokemon: (id)=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/pokemon/${id}/`)
  },
  getType1: (type)=>{
    if(type === "normal"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/1/`)
    }
    else if(type === "fighting"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/2/`)
    }
    else if(type === "flying"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/3/`)
    }
    else if(type === "poison"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/4/`)
    }
    else if(type === "ground"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/5/`)
    }
    else if(type === "rock"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/6/`)
    }
    else if(type === "bug"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/7/`)
    }
    else if(type === "ghost"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/8/`)
    }
    else if(type === "steel"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/9/`)
    }
    else if(type === "fire"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/10/`)
    }
    else if(type === "water"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/11/`)
    }
    else if(type === "grass"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/12/`)
    }
    else if(type === "electric"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/13/`)
    }
    else if(type === "psychic"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/14/`)
    }
    else if(type === "ice"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/15/`)
    }
    else if(type === "dragon"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/16/`)
    }
    else if(type === "dark"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/17/`)
    }
    else if(type === "fairy"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/18/`)
    }
    else{
      return false;
    } 
  },
  getType2: (type)=>{
    if(type === "normal"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/1/`)
    }
    else if(type === "fighting"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/2/`)
    }
    else if(type === "flying"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/3/`)
    }
    else if(type === "poison"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/4/`)
    }
    else if(type === "ground"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/5/`)
    }
    else if(type === "rock"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/6/`)
    }
    else if(type === "bug"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/7/`)
    }
    else if(type === "ghost"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/8/`)
    }
    else if(type === "steel"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/9/`)
    }
    else if(type === "fire"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/10/`)
    }
    else if(type === "water"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/11/`)
    }
    else if(type === "grass"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/12/`)
    }
    else if(type === "electric"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/13/`)
    }
    else if(type === "psychic"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/14/`)
    }
    else if(type === "ice"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/15/`)
    }
    else if(type === "dragon"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/16/`)
    }
    else if(type === "dark"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/17/`)
    }
    else if(type === "fairy"){
      return superagent
      .get(`http://pokeapi.co/api/v2/type/18/`)
    }
    else{
      return false;
    }
  },
  getNormal: ()=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/type/1/`)
  },
  getFighting: ()=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/type/2/`)
  },
  getFlying: ()=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/type/3/`)
  },
  getPoison: ()=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/type/4/`)
  },
  getGround: ()=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/type/5/`)
  },
  getRock: ()=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/type/6/`)
  },
  getBug: ()=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/type/7/`)
  },
  getGhost: ()=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/type/8/`)
  },
  getSteel: ()=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/type/9/`)
  },
  getFire: ()=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/type/10/`)
  },
  getWater: ()=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/type/11/`)
  },
  getGrass: ()=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/type/12/`)
  },
  getElectric: ()=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/type/13/`)
  },
  getPsychic: ()=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/type/14/`)
  },
  getIce: ()=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/type/15/`)
  },
  getDragon: ()=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/type/16/`)
  },
  getDark: ()=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/type/17/`)
  },
  getFairy: ()=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/type/18/`)
  },
}

export default api;
