async function fetchEvolutionChain(pokemonName) {
  const pokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  if (pokemonResponse.ok === false) {
    throw new Error("Pokemon data not found");
  }
  const pokemonData = await pokemonResponse.json();
  const speciesURL = pokemonData.species.url;

  const speciesResponse = await fetch(speciesURL);
  const speciesData = await speciesResponse.json();
  const evolutionChainURL = speciesData.evolution_chain.url;

  const evolutionChainResponse = await fetch(evolutionChainURL);
  const evolutionChainData = await evolutionChainResponse.json();

  return evolutionChainData.chain;
}

function convertToEvolutionChain(fullChainData) {
  return {
    name: fullChainData.species.name,
    variations: fullChainData.evolves_to.map(convertToEvolutionChain),
  };
}

function toJsonString(chainData) {
  return JSON.stringify(chainData, null, 2);
}

function getChainForPokemon(pokemonName) {
  return fetchEvolutionChain(pokemonName)
    .then(convertToEvolutionChain)
    .then(toJsonString);
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error("Please provide a Pokémon name.");
    return;
  }

  const pokemonName = args[0];
  const evolutionChainResponse = await getChainForPokemon(pokemonName);

  console.log(evolutionChainResponse);
}

if (require.main === module) {
  main().catch((error) => {
    console.error("An error occurred:", error);
  });
}

module.exports = {
  fetchEvolutionChain,
  convertToEvolutionChain,
  getChainForPokemon,
};
