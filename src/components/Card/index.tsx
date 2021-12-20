import { Pokemon, PokemonClient } from "pokenode-ts";
import { useEffect, useState } from "react";

import './styles.scss'

const api = new PokemonClient({cacheOptions: { maxAge: 500000, exclude: { query: true } }});

type CardPorps = {
  name: string;
  url: string;
}

function Card({name, url}: CardPorps) {

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
    <div id="card">
      <div className="identification">
        <p className="number">{pokemon?.id}</p>
        <p className="name">{pokemon?.name}</p>
      </div>

      <div className="data-wrapper">
        <div className="image-box">
          <img src={pokemonImgSrc!} alt={pokemon?.name} />
        </div>
        <div className="stats-box">
          <div className="types">
            {pokemon?.types.map(t => {
              return <p className="type-tag" key={t.slot}>{t.type.name}</p>
            })}
          </div>

          <ul className="stats-list">
            <li className="stats-list--item">height: {pokemon?.height}</li>
            <li className="stats-list--item">weight: {pokemon?.weight}</li>
            <li className="stats-list--item">exp. base: {pokemon?.base_experience}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card;