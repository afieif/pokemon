import React from 'react'
import '../CSS/App.css'

export default function Card({pokemon}) {
  return (
    <a href={`https://www.google.com/search?q=${pokemon.name}`} target='_blank' rel='noreferrer'>
    <div className='card'>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.url.substr(34).slice(0,-1)}.svg`}
     alt='pokemon' height={'245px'} width={'245px'}/>
    <div className='name'>{pokemon.name}</div>
    </div>
    </a>
  )
}
