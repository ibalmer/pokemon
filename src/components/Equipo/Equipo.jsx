import React, { useContext } from "react"
import './Equipo.css'
import { EquipoContext } from "../../Providers/Favoritos";
import { FocusPkmn } from "./FocusPkmn/FocusPkmn";

export function Equipo(){
    
    const {equipo, pc, VerPkmn, pkmnData, Foco, foco} = useContext(EquipoContext);
  
    return (
        <section className="height-content p-inline-6 flex column align-center m-bottom-6 m-top-4">
            <h3 className="red-pk width-content p-2 radius-2 m-bottom-4">Equipo</h3>
            <div className="flex column align-center gap-4 m-bottom-7">
                <div className="equipo-pkmn dex width-100 flex flex-center wrap p-2 radius-2">
                    {equipo.length > 0 ? (
                        equipo.map((pkmn, i) => (
                            <section key={i} className="relative">
                                <img
                                    onClick={() => {
                                        VerPkmn(pkmn);
                                        Foco(pkmn);
                                    }}
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn}.png`}
                                    alt="Sprite de Pokémon"
                                />
                                <div className={`${foco === pkmn ? 'flex' : 'none'} data-pkmn width-100 absolute z-index-1`}>
                                    <FocusPkmn className="ice" data={pkmnData} />
                                </div>
                            </section>
                        ))
                    ) : (
                        <div className="flex column align-center flex-center">
                            <p>El equipo está vacío.</p>
                            <p>Atrapa Pokemons para llenarlo!</p>
                        </div>
                    )}
                </div>
                <h4 className="almacenamiento red-pk width-content p-2 radius-2 m-bottom-1">Almacenamiento</h4>
                <div className="pc-pkmn grass width-content height-100 flex flex-center wrap p-3 radius-2">
                    {pc && pc.length > 0 ? (
                        pc.map((pkmn, i) => (
                            <section key={i} className="relative">
                                <img
                                    onClick={() => {
                                        VerPkmn(pkmn);
                                        Foco(pkmn);
                                    }}
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn}.png`}
                                    alt="Sprite de Pokémon"
                                />
                                <div className={`${foco === pkmn ? 'flex' : 'none'} data-pkmn width-100 absolute z-index-1`}>
                                    <FocusPkmn className="ice" data={pkmnData} />
                                </div>
                            </section>
                        ))
                    ) : (
                        <div className="flex column align-center flex-center">
                            <p>El Almacenamiento esta vacio.</p>
                            <p>Aca se alamacenan los pokemons cuando el equipo ya tenga 6 integrantes.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}    

/* https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png */


