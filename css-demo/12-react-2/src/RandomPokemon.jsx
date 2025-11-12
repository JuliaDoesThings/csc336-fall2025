import {useState, useEffect } from 'react';

function RandomPokemon() 
{
    const [pokemon, setPokemon] = useState(null);
    const [pokeID, setPokeID] = useState(1);

    const fetchPokemon = () => 
    {
        //const randomId = Math.floor(Math.random() * 151) + 1;
        //setPokeID(randomId);
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
            .then(res => res.json())       
            .then(data => 
                {
                    setPokemon({
                        name: data.name,
                        image: data.sprites.from_default,
                    });
                }); 
    };

    useEffect(() => {fetchPokemon()}, [pokeID]); //if pokeID changes, update everything tied to it

    if (!pokemon) return <p>Loading...</p>;

    return (
        <div style={{ textAligh: 'center'}}>
            <h2>{pokemon.name.toUpperCase()}</h2>
            <input type="text" value={pokeID} onChange={e => setPokeID(e.target.value)}></input>
            <img src={pokemon.image} alt={pokemon.name}></img>
            <br />
            
        </div>
    )
}

//<button onClick={fetchPokemon}>Get Another Pokemon</button>
export default RandomPokemon