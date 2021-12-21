import { PokemonType } from "pokenode-ts";

import './styles.scss'

function TypeTag({slot, type}: PokemonType) {
  
  return (
    <p className={`type-tag --${type.name}`} key={slot}>{type.name}</p>
  )
}

export default TypeTag;