import React, {useEffect, useState} from 'react';
import List from './components/List';
import './CSS/App.css';


function App() {
  const [pokeList,setPokeList] = useState([]);
  const [fltr,setFilter] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    .then((res)=>res.json())
    .then((data)=>setPokeList(data.results));
  }, [])

  function search(pokemon){
    return pokemon.name.includes(fltr.toLowerCase())
  }
  
  return (
    <>
      <div className='content'>
      <h1>Pokemon Search</h1>
      <input type='text' onChange={(e)=>setFilter(e.target.value)} value={fltr} 
      className='search' placeholder='Search for Pokemon'/>
      <List pokeList={pokeList.filter(search)}/>
      </div>
    </>
  );
}

export default App;
