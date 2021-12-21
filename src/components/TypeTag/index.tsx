import { PokemonType } from "pokenode-ts";

import './styles.scss'

type TypeTagProps = {
  typeName: string;
}

function TypeTag({typeName}: TypeTagProps) {
  
  return (
    <p className={`type-tag --${typeName}`}>{typeName}</p>
  )
}

export default TypeTag;