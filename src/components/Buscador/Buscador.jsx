import { useState } from "react";

export function Buscador({LanzarBusqueda}) {

    const [busqueda, setBusqueda] = useState();

    let Buscar = (e) => {
        e.preventDefault();

        LanzarBusqueda(busqueda.toLocaleLowerCase());
    }

    return(
        <form onSubmit={ (e) => Buscar(e)}>
            <input 
            type="text" 
            className="buscador-input"
            placeholder="Nombre o ID del Pokemón"
            onChange={ (e) => setBusqueda(e.target.value)}
            />
        </form>
    )
};