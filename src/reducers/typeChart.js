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
        "strong-against":["Grass", "Dark","Psychic"]
        }
    ],
    "Dark":[
        {
            "weak-to":["Bug", "Fairy", "Fighting"],
            "strong-against":["Ghost", "Psychic"]
        }
    ],
    "Dragon":[
        {
            "weak-to":["Dragon", "Fairy", "Ice"],
            "strong-against":["Dragon"]
        }
    ],
    "Electric":[
        {
            "weak-to":["Ground"],
            "strong-against":["Flying", "Water"]
        }
    ],
    "Fairy":[
        {
            "weak-to":"",
            "strong-against":""
        }
    ],
    "Fighting":[
        {
            "weak-to":"",
            "strong-against":""
        }
    ],
    "Fire":[
        {
            "weak-to":[],
            "strong-against":[]
        }
    ],
    "Flying":[
        {
            "weak-to":[],
            "strong-against":[]
        }
    ],
    "Ghost":[
        {
            "weak-to":[],
            "strong-against":[]
        }
    ],
    "Grass":[
        {
            "weak-to":[],
            "strong-against":[]
        }
    ],
    "Ground":[
        {
            "weak-to":[],
            "strong-against":[]
        }
    ],
    "Ice":[
        {
            "weak-to":[],
            "strong-against":[]
        }
    ],
    "Normal":[
        {
            "weak-to":[],
            "strong-against":[]
        }
    ],
    "Poison":[
        {
            "weak-to":[],
            "strong-against":[]
        }
    ],
    "Psychic":[
        {
            "weak-to":[],
            "strong-against":[]
        }
    ],
    "Rock":[
        {
            "weak-to":[],
            "strong-against":[]
        }
    ],
    "Steel":[
        {
            "weak-to":[],
            "strong-against":[]
        }
    ],
    "Water":[
        {
            "weak-to":[],
            "strong-against":[]
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