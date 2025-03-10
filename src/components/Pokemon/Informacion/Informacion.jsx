import './Informacion.css';
import { useEffect, useState } from 'react';
import { FaArrowsAltV,FaWeightHanging } from "react-icons/fa";


export function Informacion(pkmnUrl){

    const [pkmnInfo, setPkmnInfo] = useState();
    const [descripcion, setDescripcion] = useState();
    const [clase, setClase] = useState();
    const [pkmn, setPkmn] = useState();
    
    useEffect(() =>{
        setPkmnInfo(pkmnUrl && pkmnUrl.pkmnUrl)
    }, [pkmnUrl])

    

   let CallEspecie = async () => {
        let response = await fetch(pkmnInfo && pkmnInfo.species.url);
        let info = await response.json();

        setPkmn(info)
    };
    
    useEffect(() => {
        CallEspecie();
    }, [pkmnInfo]);

    useEffect(() => {
        const resultado = pkmn && pkmn.flavor_text_entries.find(entrie => entrie.language.name === 'es');
        if(resultado) {
            setDescripcion(resultado);
        } else {
            const resultadoEn = pkmn && pkmn.flavor_text_entries.find(entrie => entrie.language.name === 'en');
            setDescripcion(resultadoEn);            
        }

    }, [pkmn]);

    useEffect(() => {
        const resultado = pkmn && pkmn.genera.find(genera => genera.language.name === 'es');
        if(resultado) {
            setClase(resultado);
        } else {
            const resultadoEn = pkmn && pkmn.genera.find(genera => genera.language.name === 'en');
            setClase(resultadoEn)
        }

    }, [pkmn]);

    
    
    

    return (
        <section className='flex align-center column flex-between  min-height-100'>
            <div className='flex align-center column'>
                <div className=''>
                    <h5>Descripción</h5>
                    <p className='size-3'>{clase && clase.genus}</p>
                </div>
                <p className='size-2 m-top-4'>{descripcion && descripcion.flavor_text}</p>
            </div>
            <div className='flex flex-evenly aling-center gap-2'>
                <div className='flex aling-center gap-2'>
                    <FaWeightHanging/>
                    <h4>{pkmnInfo && pkmnInfo.weight / 10}Kgr.</h4>
                </div>
                <div className='flex aling-center gap-2'>
                    <FaArrowsAltV/>
                    <h4>{pkmnInfo && pkmnInfo.height / 10}m.</h4>
                </div>
            </div>
            <div className='flex flex-evenly aling-center gap-2'>
                {pkmnInfo && pkmnInfo.abilities.map((ability, i) => {
                    return(
                        <li className='size-2' key={i}>{ability.ability.name}</li>  
                    
                    );
                })}
                

            </div> 
        </section>
    )
}