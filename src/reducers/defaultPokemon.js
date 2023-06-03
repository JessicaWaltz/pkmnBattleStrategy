const pokemon = {
  "forms": [
    {
      "url": "https://pokeapi.co/api/v2/pokemon-form/1/",
      "name": "bulbasaur"
    }
  ],
  "abilities": [
    {
      "slot": 3,
      "is_hidden": true,
      "ability": {
        "url": "https://pokeapi.co/api/v2/ability/34/",
        "name": "chlorophyll"
      }
    },
    {
      "slot": 1,
      "is_hidden": false,
      "ability": {
        "url": "https://pokeapi.co/api/v2/ability/65/",
        "name": "overgrow"
      }
    }
  ],
  "stats": [
    {
      "stat": {
        "url": "https://pokeapi.co/api/v2/stat/6/",
        "name": "speed"
      },
      "effort": 0,
      "base_stat": 45
    },
    {
      "stat": {
        "url": "https://pokeapi.co/api/v2/stat/5/",
        "name": "special-defense"
      },
      "effort": 0,
      "base_stat": 65
    },
    {
      "stat": {
        "url": "https://pokeapi.co/api/v2/stat/4/",
        "name": "special-attack"
      },
      "effort": 1,
      "base_stat": 65
    },
    {
      "stat": {
        "url": "https://pokeapi.co/api/v2/stat/3/",
        "name": "defense"
      },
      "effort": 0,
      "base_stat": 49
    },
    {
      "stat": {
        "url": "https://pokeapi.co/api/v2/stat/2/",
        "name": "attack"
      },
      "effort": 0,
      "base_stat": 49
    },
    {
      "stat": {
        "url": "https://pokeapi.co/api/v2/stat/1/",
        "name": "hp"
      },
      "effort": 0,
      "base_stat": 45
    }
  ],
  "name": "bulbasaur",
  "sprites": {
    "back_female": null,
    "back_shiny_female": null,
    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    "front_female": null,
    "front_shiny_female": null,
    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
  },
  "id": 1,
  "order": 1,
  "types": [
    {
      "slot": 1,
      "type": {
        "url": "https://pokeapi.co/api/v2/type/12/",
        "name": "grass"
      }
    },
    {
      
        "slot": 2,
      "type": {
        "url": "https://pokeapi.co/api/v2/type/4/",
        "name": "poison"
      }
    }
  ]
}


export default pokemon;