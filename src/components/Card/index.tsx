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
            <li className="stats-list--item">height: {pokemon.height}</li>
            <li className="stats-list--item">weight: {pokemon.weight}</li>
            <li className="stats-list--item">exp. base: {pokemon.base_experience}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card;