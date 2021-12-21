import PokemonCard from '../PokemonCard';
import { PokemonClient, NamedAPIResource } from 'pokenode-ts';
import { useEffect, useState } from 'react';

import './styles.scss';

const api = new PokemonClient({cacheOptions: { maxAge: 500000, exclude: { query: true } }});

function PokemonList() {
  const [pokemonList, setPokemonList] = useState<NamedAPIResource[] | any[]>();

  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokemonListResource = await api.listPokemons(0, 50)
      setPokemonList(pokemonListResource.results)
    }

    fetchPokemonList();
  }, [])

  return (
    <main>
      {pokemonList?.map(pokemon => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </main>
  )
}

export default PokemonList;