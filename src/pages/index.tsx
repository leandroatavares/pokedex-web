import React from 'react';

import {PokemonData} from '../pokemon-data'
import { Pokemon } from '../models/Pokemon';

import Card from '../components/Card';

const POKEMONS:Array<Pokemon> = PokemonData.pokemon

function Home() {
  return <Card pokemon={ POKEMONS[0] } />
}

export default Home;
