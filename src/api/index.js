import superagent from 'superagent';
import asPromised from 'superagent-as-promised';
asPromised(superagent);

const api = {
  getPokemon: (id)=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/pokemon/${id}/`)
  },
  getType1: (num)=>{
    return superagent
      .get(`http://pokeapi.co/api/v2/type/${num}/`)
  },
  getType2: (num)=>{
    return superagent
      .get(`http://pokeapi.co/api/v2/type/${num}/`)
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