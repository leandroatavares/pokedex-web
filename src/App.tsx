import Card from './components/Card';
import { PokemonClient, Pokemon } from 'pokenode-ts'
import { useEffect, useState } from 'react';

const api = new PokemonClient({cacheOptions: { maxAge: 500000, exclude: { query: true } }});

export function App() {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const fetchPokemon = async () => {
      const result = await api.getPokemonById(2)
 
      setPokemon(result)
    }

    fetchPokemon();
  }, [])

  return (
    <div>
      {!!pokemon && (<Card pokemon={pokemon!} />) }
    </div>
  )
}