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
        <section>
          <div className="grid col-4 gap-4">
            {data && data.map((pkmn, i) => (
              !pkmn.pokemon.name.includes('-') ? (
                <div key={i}>
                  <Especie key={pkmn + i} data={pkmn.pokemon} />
                </div>
              ) : null
            ))}
          </div>
        </section>
    );      
};