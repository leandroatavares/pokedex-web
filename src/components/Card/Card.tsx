import React from 'react';
import {Pokemon} from '../../models/Pokemon';

import './Card.module.css';

interface CardProps {
  pokemon: Pokemon
}

const Card:React.FC<CardProps> = ({pokemon}) => {
  return (
    <div className="card-wrapper">
      <div className="card-image-section">
        <img src={pokemon.img}alt="pokemon image"/>
      </div>
      <div className="card-identfication-section">
        <p className="card-pokemon-name">{pokemon.name}</p>
        <p className="card-pokemon-id">{pokemon.num}</p>
      </div>
      <div className="card-attr-section">
        <p className="card-pokemon-data">{pokemon.weight}</p>
        <p className="card-pokemon-data">{pokemon.height}</p>
      </div>
    </div>
  )
}

export default Card;
