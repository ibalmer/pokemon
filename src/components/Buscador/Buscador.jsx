import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import './Buscador.css'

export function Buscador({LanzarBusqueda}) {
    const [busqueda, setBusqueda] = useState();

    let Buscar = (e) => {
        e.preventDefault();

        LanzarBusqueda(busqueda.toLocaleLowerCase());
    }

    return(
        <form className="relative height-content" onSubmit={ (e) => Buscar(e)}>
            <input 
            type="text" 
            className='buscador height-content size-3 radius-1  p-left-5 red-pk white-color'
            placeholder="Nombre o ID del Pokemón"
            onChange={ (e) => setBusqueda(e.target.value)}
            />
            <button type="submit" className="search-icon absolute">
                <FaSearch size={20}/>
            </button>   
        </form>
    )
};