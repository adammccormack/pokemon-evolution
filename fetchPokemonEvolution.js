async function fetchEvolutionChain(pokemonName) {
  try {
    const pokemonResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const pokemonData = await pokemonResponse.json();
    const speciesURL = pokemonData.species.url;

    const speciesResponse = await fetch(speciesURL);
    const speciesData = await speciesResponse.json();
    const evolutionChainURL = speciesData.evolution_chain.url;

    const evolutionChainResponse = await fetch(evolutionChainURL);
    const evolutionChainData = await evolutionChainResponse.json();

    return evolutionChainData.chain;
  } catch (error) {
    console.error("Error fetching evolution chain:", error.message);
    return "Pokemon data not found";
  }
}

function convertToEvolutionChain(fullChainData) {
  return {
    name: fullChainData.species.name,
    variations: fullChainData.evolves_to.map(convertToEvolutionChain),
  };
}

module.exports = fetchEvolutionChain;
