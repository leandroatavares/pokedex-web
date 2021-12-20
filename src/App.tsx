import Card from './components/Card';
import { PokemonClient,NamedAPIResource, APIResource } from 'pokenode-ts'
import { useEffect, useState } from 'react';

const api = new PokemonClient({cacheOptions: { maxAge: 500000, exclude: { query: true } }});

export function App() {
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
        <Card
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </div>
  )
}