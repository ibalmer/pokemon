import { useContext, useEffect, useState } from 'react';
import './FocusPkmn.css'
import { Link } from 'react-router-dom';
import { EquipoContext } from '../../../Providers/Favoritos';
import { FaXmark } from "react-icons/fa6";
export function FocusPkmn(id){

    const {equipo, MoverPc,pc , MoverPkmn, EliminarPkmn, EliminarPc,pkmnData, VaciarPkmn, Foco } = useContext(EquipoContext)
    const [pokemon, setPokemon] = useState(0);
    const [pcLlena, setPcLlena] = useState(false);
    const [equipoLleno, setEquipoLleno] = useState(false);

    const PKMN_URL = 'https://pokeapi.co/api/v2/pokemon/' + id.data;

    let CallPkmn = async () => {
        let response = id.data != 0 ? await fetch(PKMN_URL) : null ;
        let info = await response.json();

        setPokemon(info);
    };

    useEffect(() => {
        CallPkmn();
    }, [id]);
    
    return (
        <section className= 'pokesection flex height-content width-content column red-pk radius-2 p-inline-3 p-block-1 gap-2'>
            <div className='flex column align-center gap-2'>
                <h6 className='capitalize'>{pokemon.name}</h6>
                <img className='pantalla-img border-2 border-color-1 radius-2 black' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmnData}.png`} alt="Sprite de Pokémon"/>
                <div className='flex gap-2'>
                    {pokemon && pokemon.types.map((type, index) => (
                        <Link to={'/tipos/'+ type.type.name}>
                            <p className={`${type.type.name} border-2 border-c1 radius-1 tipo p-1 scale white-shadow black-color bold`} key={index}>{type.type.name}</p>
                        </Link>
                    ))}
            </div>                    
            </div>
            <Link to={'/pokemon/'+ pokemon.name}>
                <p className='scale dex p-1 radius-1 border-1 border-2 border-color-1 white-color black-shadow width-content bold'>Ver más...</p>
            </Link>
                {equipo.includes(pkmnData)  ? (
                    <div>
                        <button className='scale dex p-1 radius-1 border-2 border-color-1 white-color black-shadow width-content bold' onClick={() => {
                            if (pc.length < 40) {
                                MoverPc(pkmnData);
                                EliminarPkmn(pkmnData);
                                setPcLlena(false)
                            } else {
                                setPcLlena(true); 
                                setTimeout(() => {
                                setPcLlena(false); 
                                }, 2000); 
                            }
                        }}>
                            Mover a Pc
                        </button>
                        {pcLlena && (
                            <div className='mensaje-foco absolute red-pk p-3 width-content'>
                                <p className='white-color black-shadow'>¡La PC está llena!</p>
                            </div>
                        )}
                </div>
                
                
            ) :( 
                <div>
                    <button className='scale dex p-1 radius-1 border-2 border-color-1 white-color black-shadow width-content bold' onClick={() => {
                        if(equipo.length < 6){
                            MoverPkmn(pkmnData);
                            EliminarPc(pkmnData);
                            setEquipoLleno(false) 
                        } else {
                            setEquipoLleno(true);
                            setTimeout(() => {
                                setEquipoLleno(false);
                            }, 2000);
                        }
                        
                    }}>
                        Mover al Equipo
                    </button>
                    {equipoLleno && (
                        <div className='mensaje-foco absolute red-pk p-3 width-content'>
                            <p className='white-color black-shadow'>¡El equipo esta lleno!</p>
                        </div>
                    )}
                </div>
                
            )}
            <div className='flex flex-between'>
                <button className='scale dex p-1 radius-1 border-1 border-2 border-color-1 white-color black-shadow width-content bold' onClick={() => {VaciarPkmn();
                    EliminarPc(pkmnData);
                    EliminarPkmn(pkmnData)}
                }>
                    Eliminar
                </button>
                <button className='scale dex p-1 radius-1 border-1 border-2 border-color-1 white-color black-shadow width-content bold' onClick={() => Foco(0)}>
                    <FaXmark />
                </button>                  
            </div>
        </section>
    );
    
};
