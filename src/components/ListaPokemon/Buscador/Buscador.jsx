import { useContext } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { ModoContext } from "../../../Providers/Modo";
import './Buscador.css'

export function Buscador({LanzarBusqueda}) {

    const { isDark } = useContext(ModoContext);
    const [busqueda, setBusqueda] = useState();

    let Buscar = (e) => {
        e.preventDefault();

        LanzarBusqueda(busqueda.toLocaleLowerCase());
    }

    return(
        <div className="flex flex-center align-center column m-4 gray p-3 radius-2 ">
            <h6>Nombre o número del Pokemon</h6>
            <form className="height-content flex flex-center align-center m-block-4 gap-1" onSubmit={ (e) => Buscar(e)}>
                <input 
                type="text" 
                className='buscador width-100 height-100 size-3 radius-1 red-pk white-color'
                onChange={ (e) => setBusqueda(e.target.value)}
                />
                <button type="submit" className='pag-boton pointer scale red-pk p-2 radius-2 width-content justify-self-center border-4 border-color-1'>
                    <FaSearch className="black-color" size={20}/>
                </button>   
            </form>
        </div>
        
    )
};