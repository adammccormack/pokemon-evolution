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
    console.log("HERE", evolutionChainData.chain);
    return evolutionChainData.chain;
  } catch (error) {
    console.error("Error fetching evolution chain:", error.message);
    return "Pokemon data not found";
  }
}
