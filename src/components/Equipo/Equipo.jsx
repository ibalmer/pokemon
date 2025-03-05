import React, { useEffect,useState, useContext } from "react";
import { Link } from 'react-router-dom';
import './Equipo.css'
import { EquipoContext } from "../../Providers/Favoritos";
import { FaCircleXmark } from "react-icons/fa6";

export function Equipo(){
    
    const {equipo, pc, MoverPkmn, AgregarPc, EliminarPkmn, EliminarPc, MoverPc } = useContext(EquipoContext);

    const [opciones, setOpciones] = useState(0);

    function MostrarOpciones(id){
        setOpciones(id)
    };
    function OcultarOpciones(){
        setOpciones(0)
    };

    return(
        <section className="flex m-inline-3 fairy">
            <div className="data-pkmn heigth-100 ice"></div>
            <div>
                <div className="equipo-pkmn gray flex gap-4 width-100 wrap">
                    {equipo.map((pkmn, i) => (
                        <section className="relative">
                            <img
                                onClick={() => MostrarOpciones(pkmn)}
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn}.png`}
                                alt="Sprite de Pokémon"
                                tabIndex={0}
                            />
                            <div className={`${opciones === pkmn ? 'flex' : 'none'} electric  width-content border-3 bc-1 column absolute z-index-2`}>
                                <Link className="size-3" to={'/pokemon/'+ pkmn}>Pokemon</Link>
                                <button className="size-3" onClick={() => 
                                    {MoverPc(pkmn); 
                                    EliminarPkmn(pkmn); 
                                    OcultarOpciones(pkmn)
                                    }}>Enviar a PC</button>
                                <button className="size-3" onClick={() => 
                                    {EliminarPkmn(pkmn); 
                                    EliminarPc(pkmn)}}>Soltar</button>
                                <FaCircleXmark onClick={() => OcultarOpciones()}/>
                            </div>
                        </section>
                    ))}
                </div>            
                <div className="pc-pkmn grass gap-4 flex wrap width-100 heigth-100">
                    {pc && pc.length > 0 && pc.map((pkmn, i) => (
                        <section className="relative"> 
                            <img className="width-100"
                                onClick={() => MostrarOpciones(pkmn)}
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn}.png`}
                                alt="Sprite de Pokémon"/>
                            <div className={`${opciones === pkmn ? 'flex' : 'none'} electric  width-content border-3 bc-1 column absolute z-index-2`}>
                                <Link className="size-3" to={'/pokemon/'+ pkmn}>Pokemon</Link>
                                <button className="size-3" onClick={() => {
                                    if (equipo.length < 6) {
                                        EliminarPc(pkmn); 
                                        MoverPkmn(pkmn);
                                        OcultarOpciones(pkmn)
                                    }
                                }}>Enviar al Equipo</button>
                                <button className="size-3" onClick={() =>  
                                    {EliminarPkmn(pkmn); 
                                    EliminarPc(pkmn)
                                    }}>Soltar</button>
                                <FaCircleXmark onClick={() => OcultarOpciones()}/>
                            </div>
                        </section>
                ))} 
                </div>
            </div>
        </section>
    )

}

/* https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png */