import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Evoluciones } from "./Evoluciones/Evoluciones";


export function Pokemon(){

    let { id } = useParams();
    
    const [pokemon, setPokemon] = useState({});
    const PKMN_URL =  "https://pokeapi.co/api/v2/pokemon/" + id;

    let CallPokemon = async () => {
        let response = await fetch(PKMN_URL);
        let info = await response.json();

        setPokemon(info)
    }
    
    useEffect(() =>{
        CallPokemon();
    }, [id]);
    

    const [especie, setEspecie] = useState({});
    const SPC_URL = pokemon.species &&  pokemon.species.url
    
    let CallEspecie = async () => {
        let response = await fetch(SPC_URL);
        let info = await response.json();

        setEspecie(info)
    };

    useEffect(() =>{
        CallEspecie();
    },[SPC_URL])
    return (
        <>
            <div>
                {pokemon.name && (
                    <div>
                        <h2>{pokemon.name} {pokemon.id}</h2>
                        <img src={'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/' + pokemon.id.toString().padStart(3, '0') + '.png'} alt={pokemon.name} />
                        <h4>Peso: {pokemon.weight / 10} kg</h4>
                        <h4>Altura:{pokemon.height / 10} m</h4>
                        {pokemon.types.map((type, index) => (
                            <h4 key={index}>{type.type.name}</h4>
                        ))}
                    </div>
                )}
            </div>
            <div>
                {pokemon.name && (
                    <>
                        <h4>Evoluciones</h4>
                        <Evoluciones key = {pokemon.name} pkmnUrl = {pokemon.species.url} pkmnID = {pokemon.id}/>
                    </>
                )}
            </div>
            
        </>
    )
}