const {
  fetchEvolutionChain,
  convertToEvolutionChain,
  getChainForPokemon,
} = require("../fetchPokemonEvolution");
const { mockEvolutionChainData } = require("./mockPokemonEvolutionData");

const mockPokemonName = "caterpie";

describe("fetchEvolutionChain", () => {
  test("fetchEvolutionChain fetches evolution chain correctly", async () => {
    const evolutionChain = await fetchEvolutionChain(mockPokemonName);
    expect(evolutionChain).toEqual(mockEvolutionChainData.chain);
  });
  test("fetchEvolutionChain handles errors gracefully", async () => {
    const mockInvalidPokemonName = "0";
    expect(fetchEvolutionChain(mockInvalidPokemonName)).rejects.toThrowError(
      "Pokemon data not found"
    );
  });
});

describe("convertToEvolutionChain", () => {
  test("converts full chain data correctly", async () => {
    const expectedOutput = {
      name: "caterpie",
      variations: [
        {
          name: "metapod",
          variations: [
            {
              name: "butterfree",
              variations: [],
            },
          ],
        },
      ],
    };

    const result = await convertToEvolutionChain(mockEvolutionChainData.chain);

    expect(result).toEqual(expectedOutput);
  });
});

describe("getChainForPokemon", () => {
  test("calls functions and returns formatted JSON string", async () => {
    const mockFormattedJson = {
      name: "caterpie",
      variations: [
        {
          name: "metapod",
          variations: [
            {
              name: "butterfree",
              variations: [],
            },
          ],
        },
      ],
    };

    const result = await getChainForPokemon(mockPokemonName);
    expect(JSON.parse(result)).toEqual(mockFormattedJson);
  });
});
