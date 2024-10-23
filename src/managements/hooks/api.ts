import { useState } from "react";
import axios from "axios";

export const usePokemonApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pokemon, setPokemon] = useState<any>(null);

  const fetchPokemon = async (pokemonNameOrId: string) => {
    const cachedPokemon = localStorage.getItem(pokemonNameOrId);
    
    if (cachedPokemon) {
      setPokemon(JSON.parse(cachedPokemon));
      setError(null);
    } else {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`
        );
        localStorage.setItem(pokemonNameOrId, JSON.stringify(response.data));
        setPokemon(response.data);
        setError(null);
      } catch (err) {
        setError("No Pokémon found");
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    }
  };

  const clearCachedPokemon = (pokemonNameOrId: string) => {
    localStorage.removeItem(pokemonNameOrId);
  };

  return {
    pokemon,
    loading,
    error,
    fetchPokemon,
    clearCachedPokemon,
  };
};
