import { useContext } from "react";
import { Link, Routes, Route} from "react-router-dom"
import { ListaTipos } from "../ListaTipos/ListaTipos"
import { ModoContext } from '../../Providers/Modo';
import './tipos.css'
export function Tipos(){

    const { isDark} = useContext(ModoContext);

    const tipos = [
        'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 
        'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 
        'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'
    ];

    return(
        <section className="grid-container width-max">
            {tipos.map((tipo) => (
                <div className={`${tipo} pic-div scale p-2 radius-2`}>
                    <Link key={tipo} to={`./${tipo}`}>
                        <img className={`${isDark? 'black-filter' : 'white-filter'} pic`} src={`/${tipo}.svg`} alt={`${tipo} type`} /> 
                    </Link>                  
                </div>
            ))}
            <div className="pokeball flex flex-center p-2 radius-2 gray">
               <img className="pokeball-pic" src="/PokeBall.svg" alt="" /> 
            </div>
            <Routes>
                <Route path='/tipos/:tipo' element ={ <ListaTipos/>} />
            </Routes>
        </section>
      );
    
}
