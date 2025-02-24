import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Especie.css'

export function Especie (data){

    const [pokemon, setPokemon]= useState({})
    const TYPE_URL = data.data.url
    
    let CallPokemon = async () => {
        let response = await fetch(TYPE_URL);
        let info = await response.json();
        
        let newInfo;

        if(Object.keys(info).length > 0) { newInfo = info; }
        else { newInfo = info; }

        setPokemon(newInfo);
        }
        
        useEffect(() => {
            CallPokemon();
        }, [TYPE_URL]);
        
        let img = pokemon.id && 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/' + pokemon.id.toString().padStart(3, '0') + '.png';
        let max = 1026
        
        return (
                <div className="bicho">
                {pokemon.name && <h2> {pokemon.name} </h2>}
                <img src={img} alt="" />
                {pokemon.types && (
                    <ul>
                        {pokemon.types.map((type, index) => (
                            <li key={index}>{type.type.name}</li>
                        ))}
                    </ul>
                )}
                <Link to={'/pokemon/'+ pokemon.name}>Ver</Link>
            </div>
            
        );
}