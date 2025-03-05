import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FaDna } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";

import './Pokemon.css'
import { Evoluciones } from "./Evoluciones/Evoluciones";
import { Informacion } from "./Informacion/Informacion";
import { Estadisticas } from "./Estadisticas/Estadisticas";

import { EquipoContext } from "../../Providers/Favoritos";



export function Pokemon(){

    let { id } = useParams();
    
    const {equipo, AgregarPkmn, pc} = useContext(EquipoContext);
    const [pokemon, setPokemon] = useState({});
    const PKMN_URL =  "https://pokeapi.co/api/v2/pokemon/" + id;

    let CallPokemon = async () => {
        let response = await fetch(PKMN_URL);
        let info = await response.json();

        setPokemon(info)
    };
    console.log(equipo)
    useEffect(() =>{
        CallPokemon();
    }, [id]);

    const [fondo, setFondo] = useState();
    
    useEffect(() =>{
       setFondo(pokemon.types && pokemon.types[0].type.name);
    }, [pokemon]);
    
    let displayInfo = [
        {
            icon: <FaDna size={30}/>   
        },
        {
            icon: <FaChartSimple size={30}/>  
        }
    ]

    const [display, setDisplay] = useState(1);

    return (
        <section className="flex column flex-center align-center m-top-4">
            <div className={`${'op-'+ fondo} flex width-content height-content p-4 radius-4 shadow-box m-block-4`} >
                {pokemon.name && (
                    <div className="flex column flex-between">
                        <h3 className="capitalize">{pokemon.name} {`#${pokemon.id.toString().padStart(3, '0')}`}</h3>
                        <img src={'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/' + pokemon.id.toString().padStart(3, '0') + '.png'} alt={pokemon.name} />
                                  
                        <button className="width-content align-self-center" onClick={() => AgregarPkmn(pokemon.id)}>
                            <img className={`${equipo.includes(pokemon.id) || pc && pc.includes(pokemon.id) ? 'op-5 not-allowed' : '' } add-button width-content`} src="/PokeBall.svg" alt="" />
                        </button>
                    </div>
                )}
                <section className="flex column radius-4 p-3">    
                    <div className={`${display === 1 ? "none " : ""} data-box height-100`}>
                        {pokemon.name && (
                            <>
                                <Informacion key = {pokemon.name} pkmnUrl = {pokemon}   pkmnID = {pokemon.id}/>
                            </>
                        )}
                    </div>
                    <div className={`${display === 1 ? "" : "none"} data-box height-100`}>
                        {pokemon.name && (
                                <Estadisticas key = {pokemon.name} pkmnUrl = {PKMN_URL} pkmnID = {pokemon.id}/>
                        )}
                    </div>
                    <div className="info-icon flex flex-center m-top-4 size-5 gap-4">
                        {displayInfo.map((mode, i) => (
                        <a className={`${display === i ? "outline-black " : ""} boton scale red-pk p-2 radius-2 white-color`} onClick={() => setDisplay(i)}>
                        {mode.icon}
                        </a>
                        ))}
                    </div>
                </section>
            </div>
            <>
                {pokemon.name && (
                    <>
                        <Evoluciones key = {pokemon.name} pkmnUrl = {pokemon.species.url} pkmnID = {pokemon.id}/>
                    </>
                )}
            </>              
        </section>
    )
};