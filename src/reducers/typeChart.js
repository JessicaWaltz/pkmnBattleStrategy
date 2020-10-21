/* Avoid pokemon of this type, avoid using these not very effective moves, prioritize these move types, prioritize these 
Type        strong-against                          weak-to
------------------------------------------------------------------------
Bug	        Grass, Dark, Psychic	                Fire, Flying, Rock
Dark	    Ghost, Psychic	                        Bug, Fairy, Fighting
Dragon	    Dragon	                                Dragon, Fairy, Ice
Electric	Flying, Water	                        Ground
Fairy	    Fighting, Dark, Dragon	                Poison, Steel
Fighting	Dark, Ice, Normal, Rock, Steel	        Fairy, Flying, Psychic
Fire	    Bug, Grass, Ice, Steel	                Ground, Rock, Water
Flying	    Bug, Fighting, Grass	                Electric, Ice, Rock
Ghost	    Ghost, Psychic	                        Dark, Ghost
Grass	    Ground, Rock, Water	                    Bug, Fire, Flying, Ice, Poison
Ground	    Electric, Fire, Poison, Rock, Steel	    Grass, Ice, Water
Ice	        Dragon, Flying, Grass, Ground	        Fighting, Fire, Rock, Steel
Normal	    --	                                    Fighting
Poison	    Fairy, Grass	                        Ground, Psychic
Psychic	    Fighting, Poison	                    Bug, Dark, Ghost
Rock	    Bug, Fire, Flying, Ice	                Fighting, Grass, Ground, Steel, Water
Steel	    Fairy, Ice, Rock	                    Fighting, Fire, Ground
Water	    Fire, Ground, Rock	                    Electric, Grass
*/
const types = {
    "Bug": [
        {
        "weak-to":["Fire","Flying","Rock"],
        "strong-against":["Grass", "Dark","Psychic"],
        "not-very-effective-against": ["Fire","Fighting","Poison","Flying","Ghost","Steel","Fairy"],
        "does-not-effect":[],
        "name":"Bug"
        }
    ],
    "Dark":[
        {
            "weak-to":["Bug", "Fairy", "Fighting"],
            "strong-against":["Ghost", "Psychic"],
            "not-very-effective-against": ["Fighting","Dark","Fairy"],
            "does-not-effect":[],
            "name":"Dark"
        }
    ],
    "Dragon":[
        {
            "weak-to":["Dragon", "Fairy", "Ice"],
            "strong-against":["Dragon"],
            "not-very-effective-against": ["Steel"],
            "does-not-effect":["Fairy"],
            "name":"Dragon"
        }
    ],
    "Electric":[
        {
            "weak-to":["Ground"],
            "strong-against":["Flying", "Water"],
            "not-very-effective-against": ["Grass","Electric","Dragon"],
            "does-not-effect":["Ground"],
            "name":"Electric"
        }
    ],
    "Fairy":[
        {
            "weak-to":["Poison", "Steel"],
            "strong-against":["Fighting","Dark", "Dragon"],
            "not-very-effective-against": ["Fire","Poison","Steel"],
            "does-not-effect":[],
            "name":"Fairy"
        }
    ],
    "Fighting":[
        {
            "weak-to":["Fairy", "Flying", "Psychic"],
            "strong-against":["Dark", "Ice", "Normal", "Rock", "Steel"],
            "not-very-effective-against": ["Poison","Flying","Psychic","Bug","Fairy"],
            "does-not-effect":["Ghost"],
            "name":"Fighting"
        }
    ],
    "Fire":[
        {
            "weak-to":["Ground", "Rock", "Water"],
            "strong-against":["Bug", "Grass", "Ice", "Steel"],
            "not-very-effective-against": ["Fire","Water","Rock","Dragon"],
            "does-not-effect":[],
            "name":"Fire"
        }
    ],
    "Flying":[
        {
            "weak-to":["Electric", "Ice", "Rock"],
            "strong-against":["Bug", "Fighting", "Grass"],
            "not-very-effective-against": ["Electric","Rock","Steel"],
            "does-not-effect":[],
            "name":"Flying"
        }
    ],
    "Ghost":[
        {
            "weak-to":["Dark", "Ghost"],
            "strong-against":["Ghost", "Psychic"],
            "not-very-effective-against": ["Dark"],
            "does-not-effect":["Normal"],
            "name":"Ghost"
        }
    ],
    "Grass":[
        {
            "weak-to":["Bug", "Fire", "Flying", "Ice", "Poison"],
            "strong-against":["Ground", "Rock", "Water"],
            "not-very-effective-against": ["Fire","Grass","Poison","Flying","Bug","Dragon","Steel"],
            "does-not-effect":[],
            "name":"Grass"
        }
    ],
    "Ground":[
        {
            "weak-to":["Grass", "Ice", "Water"],
            "strong-against":["Electric", "Fire", "Poison", "Rock", "Steel"],
            "not-very-effective-against": ["Grass","Bug"],
            "does-not-effect":["Flying"],
            "name":"Ground"
        }
    ],
    "Ice":[
        {
            "weak-to":["Fighting", "Fire", "Rock", "Steel"],
            "strong-against":["Dragon", "Flying", "Grass", "Ground"],
            "not-very-effective-against": ["Fire","Water","Ice","Steel"],
            "does-not-effect":[],
            "name":"Ice"
        }
    ],
    "Normal":[
        {
            "weak-to":["Fighting"],
            "strong-against":[],
            "not-very-effective-against": ["Rock","Steel"],
            "does-not-effect":["Ghost"],
            "name":"Normal"
        }
    ],
    "Poison":[
        {
            "weak-to":["Ground", "Psychic"],
            "strong-against":["Fairy", "Grass"],
            "not-very-effective-against": ["Poison","Ground","Rock","Ghost"],
            "does-not-effect":[],
            "name":"Poison"
        }
    ],
    "Psychic":[
        {
            "weak-to":["Bug", "Dark", "Ghost"],
            "strong-against":["Fighting", "Poison"],
            "not-very-effective-against": ["Psychic","Steel"],
            "does-not-effect":["Dark"],
            "name":"Psychic"
        }
    ],
    "Rock":[
        {
            "weak-to":["Fighting", "Grass", "Ground", "Steel", "Water"],
            "strong-against":["Bug", "Fire","Flying", "Ice"],
            "not-very-effective-against": ["Fighting","Ground","Steel"],
            "does-not-effect":[],
            "name":"Rock"
        }
    ],
    "Steel":[
        {
            "weak-to":["Fighting", "Fire", "Ground"],
            "strong-against":["Fairy", "Ice", "Rock"],
            "not-very-effective-against": ["Fire","Water","Electric","Steel"],
            "does-not-effect":[],
            "name":"Steel"
        }
    ],
    "Water":[
        {
            "weak-to":["Electric", "Grass"],
            "strong-against":["Fire", "Ground", "Rock"],
            "not-very-effective-against": ["Water","Grass","Dragon"],
            "does-not-effect":[],
            "name":"Water"
        }
    ]
}
/**
 * "forms": [
    {
      "url": "https://pokeapi.co/api/v2/pokemon-form/1/",
      "name": "bulbasaur"
    }
  ],

  pick enemy pokemon get type or types of that pokemon
  -enemy pokemon weak to types +1 on that types counter
  -enemy pokemon strong against -1 on that types counter
  -enemy pokemon not very effective against +1 on that types counter
  -go through types if type is not very effective against enemy pokemon -1 on that types counter
  -enemy pokemon does not effect +2 on that types counter
  -go through types if type does not effect the enemy pokemons type -2 on that types counter

  -add thing to prioritize special or physical type moves depending on enemy pokemon
  maybe eventualy separate it to have this type pokemon but this type moves?

type1 = types.{pokemon.types[0].type.name}
type2 = types.{pokemon.types[1].type.name}
for (i=0; type1.weak-to.length < i; i++) {
    store{type1.weak-to[i]} += 1;
}
for (i=0; type1.strong-against.length < i; i++) {
    store{type1.strong-against[i]} -= 1;
}
for (i=0; type1.not-very-effective-against.length < i; i++) {
    store{type1.not-very-effective-against[i]} += 1;
}
for (i=0; types.length; i++){
    for(j=0;types[i].not-very-effective-against.length < j;j++){
        if(types[i].not-very-effective-against[j].equals(pokemon.types[1].type.name) ||
           types[i].not-very-effective-against[j].equals(pokemon.types[0].type.name)){
               store{types[i].not-very-effective-against[j]} -= 1;
           }
    }
}
for (i=0; type1.does-not-effect.length < i; i++) {
    store{type1.does-not-effect[i]} += 2;
}
for (i=0; types.length; i++){
    for(j=0;types[i].does-not-effect.length < j;j++){
        if(types[i].does-not-effect[j].equals(pokemon.types[1].type.name) ||
           types[i].does-not-effect[j].equals(pokemon.types[0].type.name)){
               store{types[i].does-not-effect[j]} -= 2;
           }
    }
}


 "stats": [
    {
      "stat": {
        "url": "https://pokeapi.co/api/v2/stat/6/",
        "name": "speed"
      },
      "effort": 0,
      "base_stat": 45
    }
    check stats for enemies def, special def
    recomend a pokemon who knows spec attacks or attack depending on which type of def is lowest

    check stats for enemies special attack and attack
    recomend pokemon who has high def of special defence depending on which attack is higher
 */
export default types;