import { Pokemon, PokemonClient } from "pokenode-ts";
import TypeTag from '../TypeTag';
import { useEffect, useState } from "react";

import './styles.scss'

const api = new PokemonClient({cacheOptions: { maxAge: 500000, exclude: { query: true } }});

type CardPorps = {
  name: string;
  url: string;
}

function PokemonCard({name, url}: CardPorps) {

  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const getPokemonData = async () => {
      const pokemonData = await api.getPokemonByName(name)
      setPokemon(pokemonData)
    }

    getPokemonData()
  }, [])

  const pokemonImgSrc = pokemon?.sprites.other.dream_world.front_default;

  return (
    <div className="card">
      <div className="identification">
        <p className="number">{pokemon?.id}</p>
        <p className="name">{`${pokemon?.name.charAt(0).toUpperCase().concat(pokemon?.name.substring(1))}`}</p>
      </div>

      <div className="data-wrapper">
        <div className="image-box">
          <img src={pokemonImgSrc!} alt={pokemon?.name} />
        </div>
        <div className="stats-box">
          <div className="types">
            {pokemon?.types.map(t => {
              return <TypeTag key={t.slot} typeName={t.type.name}/>
            })}
          </div>

          <ul className="stats-list">
            <li className="stats-list--item">height: {`${pokemon ? (pokemon.height / 10).toString().concat('m') : ''}`}</li>
            <li className="stats-list--item">weight: {`${pokemon ? (pokemon.weight / 10).toString().concat('kg') : ''}`}</li>
            <li className="stats-list--item">exp. base: {pokemon?.base_experience}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard;