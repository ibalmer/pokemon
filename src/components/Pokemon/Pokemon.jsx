import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FaDna } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";

import './Pokemon.css'
import { Evoluciones } from "./Evoluciones/Evoluciones";
import { Informacion } from "./Informacion/Informacion";
import { Estadisticas } from "./Estadisticas/Estadisticas";

import { EquipoContext } from "../../Providers/Favoritos";

export function Pokemon() {
    const { id } = useParams();
    const { equipo, AgregarPkmn, pc, msjPc, setMsjPc } = useContext(EquipoContext);

    const [pokemon, setPokemon] = useState({});
    const [fondo, setFondo] = useState('');
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const PKMN_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

    
    const CallPokemon = async () => {
        try {
            setLoading(true);
            setHasError(false);

            let response = await fetch(PKMN_URL);
            if (!response.ok) {
                throw new Error(`Error al obtener datos: ${response.status}`);
            }

            let info = await response.json();
            setPokemon(info);
        } catch (error) {
            setHasError(true); // Cambiamos el estado para indicar que ocurrió un error
            console.error("Error al obtener el Pokémon:", error.message);
        } finally {
            setLoading(false);
            console.log("Finalizó la llamada a la API.");
        }
    };

    
    useEffect(() => {
        CallPokemon();
    }, [id]);

    
    useEffect(() => {
        if (pokemon.types && pokemon.types[0]) {
            setFondo(pokemon.types[0].type.name);
        }
    }, [pokemon]);

    const [display, setDisplay] = useState(1);

    const displayInfo = [
        {
            icon: <FaDna size={30} />,
        },
        {
            icon: <FaChartSimple size={30} />,
        },
    ];

    if (loading) {
        return (
            <div className="flex flex-center align-center width-content blue-pk radius-2 p-4">
                <h4 className="text-center">Cargando Pokémon...</h4>
            </div>
        );
    }

    if (hasError) {
        return (
            <div className="flex flex-center align-center width-content red-pk radius-2 p-2 m-4">
                <h4 className="text-center">El Pokémon buscado no existe...</h4>
                <img
                    className="error-img width-100"
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
                    alt="Error Pokémon"
                />
            </div>
        );
    }

    return pokemon && Object.keys(pokemon).length > 0 ? (
        <div className="flex flex-center align-center column m-4">
            <section className="pokemon flex flex-center width-100 p-inline-4 gap-3">
                <div
                    className={`${
                        'op-' + fondo
                    } pokemon-vista flex flex-center width-50 radius-2 shadow-box p-4`}
                >
                    {pokemon.name && (
                        <div className="flex flex-between align-center column relative">
                            {msjPc === true && (
                                equipo.includes(pokemon.id) || (pc && pc.includes(pokemon.id)) ? (
                                    <div className="msj-pc absolute gray p-2 radius-2 z-index-1">
                                        <p className="bold text-center">El Pokémon está en el almacenamiento</p>
                                    </div>
                                ) : equipo.length + pc.length < 46 ? (
                                    <div className="msj-pc absolute gray p-2 radius-2 z-index-1">
                                        <p className="bold">Agregado al Almacenamiento</p>
                                    </div>
                                ) : (
                                    <div className="msj-pc absolute gray p-2 radius-2 z-index-1">
                                        <p className="bold">El almacenamiento está lleno</p>
                                    </div>
                                )
                            )}
                            <h4 className="capitalize">
                                {pokemon.name} {`#${pokemon.id.toString().padStart(3, '0')}`}
                            </h4>
                            <img
                                className="width-100"
                                src={
                                    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/' +
                                    pokemon.id.toString().padStart(3, '0') +
                                    '.png'
                                }
                                alt={pokemon.name}
                            />
                            <button
                                className={`${
                                    equipo.includes(pokemon.id) || (pc && pc.includes(pokemon.id))
                                        ? 'op-5 not-allowed'
                                        : ''
                                } atrapar-button width-content align-self-center pointer`}
                                onClick={() => {
                                    AgregarPkmn(pokemon.id);
                                    setMsjPc(true);
                                }}
                            >
                                <img
                                    className="add-button width-content"
                                    src="/PokeBall.svg"
                                    alt=""
                                />
                                <h6>
                                    {equipo.includes(pokemon.id) || (pc && pc.includes(pokemon.id))
                                        ? 'Atrapado'
                                        : 'Atrapar!'}
                                </h6>
                            </button>
                        </div>
                    )}
                </div>
                <section className="pokemon-info width-50 flex flex-between align-center column p-3 radius-2 shadow-box gray">
                    <div
                        className={`${
                            display === 1 ? 'none ' : 'flex'
                        } data-box column align-center height-100 width-100 radius-2 p-4`}
                    >
                        {pokemon.name && (
                            <>
                                <Informacion key={pokemon.name} pkmnUrl={pokemon} pkmnID={pokemon.id} />
                            </>
                        )}
                    </div>
                    <div
                        className={`${
                            display === 1 ? 'flex' : 'none'
                        } data-box column align-center flex-between height-100 width-100 radius-2 p-4`}
                    >
                        {pokemon.name && (
                            <Estadisticas key={pokemon.name} pkmnUrl={PKMN_URL} pkmnID={pokemon.id} />
                        )}
                    </div>
                    <div className="flex size-5 gap-4 ">
                        {displayInfo.map((mode, i) => (
                            <a
                                className={`${
                                    display === i ? fondo + '-color' : 'white-color'
                                } outline-black  boton scale red-pk p-2 radius-2 `}
                                onClick={() => setDisplay(i)}
                            >
                                {mode.icon}
                            </a>
                        ))}
                    </div>
                </section>
            </section>
            <div className="flex flex-center ">
                {pokemon.name && (
                    <>
                        <Evoluciones key={pokemon.name} pkmnUrl={pokemon.species.url} pkmnID={pokemon.id} />
                    </>
                )}
            </div>
        </div>
    ) : (
        <div className="flex flex-center align-center width-content red-pk radius-2 p-2 m-4">
            <h4 className="text-center">El Pokémon buscado no existe...</h4>
            <img
                className="error-img width-100"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
                alt="Error Pokémon"
            />
        </div>
    );
}

