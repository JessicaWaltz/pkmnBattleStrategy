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
        "not-very-effective-against": []
        }
    ],
    "Dark":[
        {
            "weak-to":["Bug", "Fairy", "Fighting"],
            "strong-against":["Ghost", "Psychic"],
            "not-very-effective-against": []
        }
    ],
    "Dragon":[
        {
            "weak-to":["Dragon", "Fairy", "Ice"],
            "strong-against":["Dragon"],
            "not-very-effective-against": []
        }
    ],
    "Electric":[
        {
            "weak-to":["Ground"],
            "strong-against":["Flying", "Water"],
            "not-very-effective-against": []
        }
    ],
    "Fairy":[
        {
            "weak-to":["Poison", "Steel"],
            "strong-against":["Fighting","Dark", "Dragon"],
            "not-very-effective-against": []
        }
    ],
    "Fighting":[
        {
            "weak-to":["Fairy", "Flying", "Psychic"],
            "strong-against":["Dark", "Ice", "Normal", "Rock", "Steel"],
            "not-very-effective-against": []
        }
    ],
    "Fire":[
        {
            "weak-to":["Ground", "Rock", "Water"],
            "strong-against":["Bug", "Grass", "Ice", "Steel"],
            "not-very-effective-against": []
        }
    ],
    "Flying":[
        {
            "weak-to":["Electric", "Ice", "Rock"],
            "strong-against":["Bug", "Fighting", "Grass"],
            "not-very-effective-against": []
        }
    ],
    "Ghost":[
        {
            "weak-to":["Dark", "Ghost"],
            "strong-against":["Ghost", "Psychic"],
            "not-very-effective-against": []
        }
    ],
    "Grass":[
        {
            "weak-to":["Bug", "Fire", "Flying", "Ice", "Poison"],
            "strong-against":["Ground", "Rock", "Water"],
            "not-very-effective-against": []
        }
    ],
    "Ground":[
        {
            "weak-to":["Grass", "Ice", "Water"],
            "strong-against":["Electric", "Fire", "Poison", "Rock", "Steel"],
            "not-very-effective-against": []
        }
    ],
    "Ice":[
        {
            "weak-to":["Fighting", "Fire", "Rock", "Steel"],
            "strong-against":["Dragon", "Flying", "Grass", "Ground"],
            "not-very-effective-against": []
        }
    ],
    "Normal":[
        {
            "weak-to":["Fighting"],
            "strong-against":[],
            "not-very-effective-against": []
        }
    ],
    "Poison":[
        {
            "weak-to":["Ground", "Psychic"],
            "strong-against":["Fairy", "Grass"],
            "not-very-effective-against": []
        }
    ],
    "Psychic":[
        {
            "weak-to":["Bug", "Dark", "Ghost"],
            "strong-against":["Fighting", "Poison"],
            "not-very-effective-against": []
        }
    ],
    "Rock":[
        {
            "weak-to":["Fighting", "Grass", "Ground", "Steel", "Water"],
            "strong-against":["Bug", "Fire","Flying", "Ice"],
            "not-very-effective-against": []
        }
    ],
    "Steel":[
        {
            "weak-to":["Fighting", "Fire", "Ground"],
            "strong-against":["Fairy", "Ice", "Rock"],
            "not-very-effective-against": []
        }
    ],
    "Water":[
        {
            "weak-to":["Electric", "Grass"],
            "strong-against":["Fire", "Ground", "Rock"],
            "not-very-effective-against": []
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
 */
export default types;