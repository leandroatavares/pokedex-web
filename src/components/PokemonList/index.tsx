import PokemonCard from '../PokemonCard';
import { PokemonClient, NamedAPIResource } from 'pokenode-ts'
import { useEffect, useState } from 'react';

const api = new PokemonClient({cacheOptions: { maxAge: 500000, exclude: { query: true } }});

function PokemonList() {
  const [pokemonList, setPokemonList] = useState<NamedAPIResource[] | any[]>();

  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokemonListResource = await api.listPokemons()
      setPokemonList(pokemonListResource.results)
    }

    fetchPokemonList();
  }, [])

  return (
    <div>
      {pokemonList?.map(pokemon => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </div>
  )
}

export default PokemonList;