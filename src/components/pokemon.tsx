import React from "react";

interface PokemonProps {
  pokemon: any;
  loading: boolean;
  error: string | null;
  fetchPokemon: (pokemonNameOrId: string) => void;
  clearCachedPokemon: (pokemonNameOrId: string) => void; // Add the prop
}

const Pokemon: React.FC<PokemonProps> = ({
  pokemon,
  loading,
  error,
  fetchPokemon,
  clearCachedPokemon,
}) => {
  const handlePrevNext = (offset: number) => {
    if (pokemon) {
      const newId = pokemon.id + offset;
      fetchPokemon(newId);
    }
  };

  const handleClearCache = () => {
    if (pokemon) {
      clearCachedPokemon(pokemon.name); // Clear the cache for the current Pokémon
    }
  };

  return (
    <div className="text-center p-10">
      {error && <p className="text-red-500">{error}</p>}
      {pokemon && (
        <div className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-center w-80 h-64 md:w-96 md:h-80">
        {loading ? (
            <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full mb-5" />
        ) : (
            <>
                <h2 className="text-3xl font-semibold">{pokemon.name}</h2>
                <p className="text-lg">#{pokemon.id}</p>
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="mb-5 animate-bounce w-32 h-32 md:w-48 md:h-48 p-6"
                />
                <div>
                    <button
                        onClick={() => handlePrevNext(-1)}
                        className="bg-gray-300 p-2 rounded-md mr-2 transition-transform transform hover:scale-105"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => handlePrevNext(1)}
                        className="bg-gray-300 p-2 rounded-md transition-transform transform hover:scale-105"
                    >
                        Next
                    </button>
                    <button
                        onClick={handleClearCache}
                        className="bg-red-500 text-white p-2 rounded-md ml-2 transition-transform transform hover:scale-105"
                    >
                        Clear Cache
                    </button>
                </div>
            </>
        )}
    </div>
    
      )}
    </div>
  );
};

export default Pokemon;
