import { useState, useEffect} from "react";
import { Especie } from "../Especie/Especie";
import { useParams, Link } from "react-router-dom";
import './ListaTipos.css';

export function ListaTipos(){

     let { tipo } = useParams(); 


    const [data, setData] = useState([]);
    const ALL_URL = 'https://pokeapi.co/api/v2/type/' + tipo + '/' 

    let CallAll = async () => {
        let response = await fetch(ALL_URL);
        let lista = await response.json();
        setData(lista.pokemon);
    };

    useEffect(() => {
        CallAll();
    },[ALL_URL])
    
    return (
        <section className="width-100 p-inline-4 m-4 flex flex-center column align-center">
          <h3 className={`${tipo} text-center p-2 radius-2 capitalize m-bottom-4`}>{tipo}</h3>
          <div className="flex wrap flex-center align-center width-100 gap-4">
            {data && data.map((pkmn, i) => (
              !pkmn.pokemon.name.includes('-') ? (
                <div className="flex flex-center" key={i}>
                  <Especie key={pkmn + i} data={pkmn.pokemon} />
                </div>
              ) : null
            ))}
          </div>
        </section>
    );      
};