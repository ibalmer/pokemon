import React from 'react';
import { Link } from 'react-router-dom';
import { CambiarModo } from '../CambiarModo/CambiarModo';
import { useState,  } from 'react';
import { FaBars } from "react-icons/fa";
import { EquipoContext } from "../../Providers/Favoritos";
import { useContext } from "react"
import './Header.css'

export function Header() {

    const {setFoco} = useContext(EquipoContext);

    const [menu, setMenu] = useState(false);

    function Menu(){
        setMenu(prevState => !prevState)
    };

    return(
        <>
            <section className='header flex width-100 flex-center align-center p-inline-6 gray'>
                <div className='flex flex-between width-100 align-center gap-5 height-100'>
                <FaBars size={50} className='menu none scale red-pk p-2 radius-2 border-4 border-color-1 white-color black-shadow'
                            onClick={() => Menu()}
                    />
                    <img className='pokeball-header height-70p' src="/PokeBall.svg" alt="" />
                    <div className={`${menu && 'flex-important'} botones-header flex flex-between align-center gap-2`}>
                        <Link onClick={() => setMenu(false)} className='boton-header scale red-pk p-2 radius-2 border-4 border-color-1 white-color black-shadow' to={'/'}>
                            <h5>INICIO</h5>
                        </Link>
                        <Link onClick={() => setMenu(false)} className='boton-header scale red-pk p-2 radius-2 border-4 border-color-1 white-color black-shadow' to={'tipos/'}>
                            <h5>TIPOS</h5>
                        </Link>
                        <Link onClick={() => {setMenu(false); setFoco(0)}} className='boton-header scale red-pk p-2 radius-2 border-4 border-color-1 white-color black-shadow' to={'equipo'}>
                            <h5>EQUIPO</h5>
                        </Link>
                    </div>
                    <CambiarModo/>
                </div>
            </section>
            
        </>
        

    )
};