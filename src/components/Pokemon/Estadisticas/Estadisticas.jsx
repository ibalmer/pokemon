import './Estadisticas.css';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export function Estadisticas(pkmnUrl){

    
    const [types, setTypes] = useState();
    const [pkmnStats, setPkmnStats] = useState();
    const STS_URL = pkmnUrl.pkmnUrl;

    let CallStats = async () => {
        let response = await fetch (STS_URL);
        let info = await response.json();

        setTypes(info.types);
        setPkmnStats(info.stats);

    };
    
    useEffect(() => {
        CallStats();
    }, [pkmnUrl]);

    return(
        <section className='flex flex-between align-center column height-100'>
            <h5>Estadisticas</h5>
            <div>
                {pkmnStats && pkmnStats.map((stat, i) => (
                <p className='size-4'>{stat.stat.name}:{stat.base_stat}</p>
                ))}
            </div>
            <div className='flex gap-2'>
                {types && types.map((type, index) => (
                 <Link to={'/tipos/'+ type.type.name}>
                    <h6 className={`${type.type.name} border-3 border-c1 radius-2 tipo p-2 scale white-shadow black-color`} key={index}>{type.type.name}</h6>
                </Link>
                ))}
            </div>
        </section>
    )
}