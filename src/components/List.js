import React from 'react'
import Card from './Card'


export default function List({pokeList}) {
  return (
    <div className='list'>
    {pokeList.map((poke)=>
    <div style={{color:'black'}} key={poke.name}>
    <Card pokemon={poke} />
    </div>)}
    </div>
  )
}
