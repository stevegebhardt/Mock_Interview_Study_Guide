/* 
Using an api endpoint like this: https://pokeapi.co/api/v2/pokemon/ditto

Write a function that takes a pokemon name and gives back an object similar to this:
{
  name: "ditto",
  abilities: [{},{}],
  height: 3,
  base_experience: 48
}

If you don't know any pokemon names to test this with, here are some to get you started:
pikachu
charmander
bulbasaur
*/

const axios = require("axios");

async function catchEmAll(pokemonName) {
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
  try {
    const { data } = await axios.get(`${BASE_URL}/${pokemonName}`);
    console.log({
      name: pokemonName,
      abilities: data.abilities,
      height: data.height,
      base_experience: data.base_experience,
    });
  } catch ({ message }) {
    console.log(message);
  }
}

catchEmAll("pikachu");
