import { Pokemon } from "pokenode-ts";

import './styles.scss'

type CardPorps = {
  pokemon: Pokemon
}

function Card({pokemon}: CardPorps) {
  console.log(pokemon)
 
  const pokemonImgSrc = pokemon.sprites.other.dream_world.front_default;

  return (
    <div id="card">
      <div className="identification">
        <p className="number">{pokemon?.id}</p>
        <p className="name">{pokemon?.name}</p>
      </div>

      <img src={pokemonImgSrc!} alt={pokemon?.name} />

      <div className="types">
        {pokemon?.types.map(t => {
          return <p className="type-tag" key={t.slot}>{t.type.name}</p>
        })}
      </div>

      <div>
        <p>height: {pokemon.height}</p>
        <p>weight: {pokemon.weight}</p>
        <p>exp. base: {pokemon.base_experience}</p>
      </div>

    </div>
  )
}

export default Card;