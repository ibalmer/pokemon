import { useState,useEffect } from "react";
import './EvoImagenes.css'
import { Link } from "react-router-dom";

export function EvoImagenes(pkmnUrl) {
    const [imagen, setImagen]= useState();
    const PKMN_URL = pkmnUrl.pkmnUrl;
    
    let CallImagen = async () =>{
        let response = await fetch(PKMN_URL);
        let info = await response.json();

        setImagen(info)
    };

    useEffect(() =>{
        CallImagen();
    }, [PKMN_URL]);

    let img = imagen && 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/' + imagen.id.toString().padStart(3, '0') + '.png';
    
    return(
        imagen &&(                   
            <Link className="flex flex-center" to={'/pokemon/'+ imagen.id}>
                <img className="evo-img op-5" src={img} alt="" />
            </Link> 
        )
        
    )

    

};