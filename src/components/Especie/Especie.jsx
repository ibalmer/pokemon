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
        
        
        return (
                <div className={`op-${pokemon.types && pokemon.types[0].type.name} pkmn-box scale width-content p-3 radius-2 flex column flex-between pointer`}>
                
                    {pokemon.name && <h6 className="nombre-pkmn capitalize"> {pokemon.name} </h6>}
                    <img className="especie-img width-100" src={img} alt="" />
                
                {pokemon.types && (
                    <div className="flex flex-center gap-1">
                        <Link to={'/pokemon/'+ pokemon.name}>
                            <p className="especies-boton scale red-pk p-2 radius-2 width-content justify-self-center border-4 border-color-1 black-color white-shadow">Ver más...</p>
                        </Link>
                    </div>
                )}
            </div>
            
        );
}
/*
const [mostrarOpciones, setMostrarOpciones] = useState({}); // Estado para manejar opciones de cada Pokémon

     function MostrarOpciones(id) {
        setMostrarOpciones((prev) => ({
            ...prev,
            [id]: !prev[id], // Alterna el estado solo para el Pokémon seleccionado
        }));
    }

    return (
        <div className="wather flex gap-4">
            {equipo.map((pkmn, i) => (
                <div key={i}>
                    <img
                        onClick={() => MostrarOpciones(pkmn)} // Usar el identificador único
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn}.png`}
                        alt=""
                    />
                    <div
                        className={`${
                            mostrarOpciones[pkmn] ? 'flex' : 'none'
                        } electric width-content border-3 bc-1 column`}
                    >
                        <Link to={`/pokemon/${pkmn}`}>Pokemon</Link>
                        <button
                            onClick={() => {
                                AgregarPc(pkmn);
                                EliminarPkmn(pkmn);
                            }}
                        >
                            Enviar a PC
                        </button>
                        <button
                            onClick={() => {
                                EliminarPkmn(pkmn);
                                EliminarPc(pkmn);
                            }}
                        >
                            Soltar
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}; */