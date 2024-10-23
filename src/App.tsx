import React, { useState } from "react";
import { usePokemonApi } from "./managements/hooks/api";
import Pokemon from "./components/pokemon";

function App() {
  const { pokemon, loading, error, fetchPokemon, clearCachedPokemon } = usePokemonApi();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query) fetchPokemon(query.toLowerCase());
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-5">
      <h1 className="text-4xl font-bold mb-5">Pokémon Search App</h1>
      <form onSubmit={handleSearch} className="flex mb-5">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter Pokémon name or ID"
          className="border rounded-l-md p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-r-md p-2 transition-transform transform hover:scale-105"
        >
          Search
        </button>
      </form>

      <Pokemon
        pokemon={pokemon}
        loading={loading}
        error={error}
        fetchPokemon={fetchPokemon}
        clearCachedPokemon={clearCachedPokemon}  // Pass the function
      />
    </div>
  );
}

export default App;
