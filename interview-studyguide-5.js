/* 
Using an api endpoint like this: https://pokeapi.co/api/v2/pokemon/ditto

Write a function that takes a pokemon name and gives back an object similar to this:

{
  name: "ditto",
  firstAbilityName: "limber",
  firstMove: "transform"
}

Note: the value for the first ability name can be found somewhere in the 'abilities' property, and the first move name can be found in the 'moves' property

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
      firstAbilityName: data.abilities[0].ability.name,
      firstMove: data.moves[0].move.name,
    });
  } catch ({ message }) {
    console.log(message);
  }
}

catchEmAll("pikachu");
