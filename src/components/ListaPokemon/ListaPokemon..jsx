import { useState, useEffect} from "react";
import { Especie } from "../Especie/Especie";
import './ListaPokemon.css'

export function ListaPokemon() {
    
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(20);
    const [pag, setPag] = useState(1)
    const API_URL = "https://pokeapi.co/api/v2/pokemon/?offset="+ offset + "&limit=" + limit;

    

    let CallApi = async () => {
        let response = await fetch(API_URL);
        let lista = await response.json();

        let newData;

        if(Object.keys(data).length > 0) { newData = [...lista.results]; }
        else { newData = lista.results; }

        setData(newData);
        
    };

    

    let PaginaSiguente = () => { 
        let newOffset = offset + 20;
        let newPag = pag + 1
        if(newOffset >= 1020){
            setLimit(5)
            newOffset = 1020
            newPag = 52 
        } 
        setOffset(newOffset);
        setPag(newPag)
    };
    let PaginaAnterior = () => { 
        let newOffset = offset - 20;
        let newPag = pag - 1
        if(offset != 0){ 
            setOffset(newOffset);
            setLimit(20)
            setPag(newPag)
        }    
    };
    
    useEffect(() => {
        CallApi();
    }, [offset]);

    
    return(
        <section>
            <div key={offset} className="grilla">
                {data.map((pkmn, i) => {
                    return(
                        <div>
                            <Especie key={pkmn.name} data = {pkmn}/>
                        </div>
                        )  
                        
                    }    
                
                )} 
            </div>
            
            <div className="botones">
                <button onClick={PaginaAnterior}>Pagina Anterior</button>
                <h2>{pag}</h2>
                <button onClick={PaginaSiguente}>Pagina Siguente</button>
            </div>
        </section >
    )

    
};