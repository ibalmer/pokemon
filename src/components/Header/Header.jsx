import { Link } from 'react-router-dom';
import './Header.css'



export function Header() {

    return(
        <div className='flex flex-between align-center gap-5 height-100'>
            <img className='height-100' src="/PokeBall.svg" alt="" />
            <Link className='boton scale red-pk p-2 radius-2 border-4 border-color-1 white-color black-shadow' to={'/'}>
                <h5>INICIO</h5>
            </Link>
            <Link className='boton scale red-pk p-2 radius-2 border-4 border-color-1 white-color black-shadow' to={'tipos/'}>
                <h5>TIPOS</h5>
            </Link>
            <Link className='boton scale red-pk p-2 radius-2 border-4 border-color-1 white-color black-shadow' to={'equipo'}>
                <h5>EQUIPO</h5>
            </Link>
        </div>

    )
};