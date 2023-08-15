const mockEvolutionChainData = {
  chain: {
    species: {
      name: "caterpie",
      url: "https://pokeapi.co/api/v2/pokemon-species/10/",
    },
    evolution_details: [],
    evolves_to: [
      {
        species: {
          name: "metapod",
          url: "https://pokeapi.co/api/v2/pokemon-species/11/",
        },
        evolves_to: [
          {
            species: {
              name: "butterfree",
              url: "https://pokeapi.co/api/v2/pokemon-species/12/",
            },
            evolves_to: [],
            is_baby: false,
            evolution_details: [
              {
                gender: null,
                held_item: null,
                item: null,
                known_move: null,
                known_move_type: null,
                location: null,
                min_affection: null,
                min_beauty: null,
                min_happiness: null,
                min_level: 10,
                needs_overworld_rain: false,
                party_species: null,
                party_type: null,
                relative_physical_stats: null,
                time_of_day: "",
                trade_species: null,
                trigger: {
                  name: "level-up",
                  url: "https://pokeapi.co/api/v2/evolution-trigger/1/",
                },
                turn_upside_down: false,
              },
            ],
          },
        ],
        is_baby: false,
        evolution_details: [
          {
            gender: null,
            held_item: null,
            item: null,
            known_move: null,
            known_move_type: null,
            location: null,
            min_affection: null,
            min_beauty: null,
            min_happiness: null,
            min_level: 7,
            needs_overworld_rain: false,
            party_species: null,
            party_type: null,
            relative_physical_stats: null,
            time_of_day: "",
            trade_species: null,
            trigger: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/evolution-trigger/1/",
            },
            turn_upside_down: false,
          },
        ],
      },
    ],
    is_baby: false,
  },
};

module.exports = {
  mockEvolutionChainData,
};
