import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export function Header() {



    return(
        <div>
            <h2>Pokemon</h2>
            <Link to={'tipos/'+ 'normal'}>normal</Link>
            <Link to={'tipos/'+ 'fire'}>fuego</Link>
            <Link to={'tipos/'+ 'ice'}>hielo</Link>
            <Link to={'tipos/'+ 'poison'}>veneno</Link>
            <Link to={'tipos/'+ 'water/'}>agua</Link>
        </div>
    )
}