import { useState, useEffect, useContext} from "react";
import { Especie } from "../Especie/Especie";
import { ModoContext } from '../../Providers/Modo';
import './ListaPokemon.css'

export function ListaPokemon() {
    
    const { isDark} = useContext(ModoContext);
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
        let finalData = newData.slice(0, 1026);
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
            <div key={offset} className="grid col-4 gap-4">
                {data.map((pkmn, i) => {
                    return(
                        <div className="especie-box">
                            <Especie key={pkmn.name} data = {pkmn}/>
                        </div>
                        )  
                        
                    }    
                
                )} 
            </div>
            
            <div className="flex flex-center gap-5 aling-center width-50 justify-self-center m-block-4">
                <button className={`${isDark? 'border-color-2 white-color black-shadow' : 'border-color-1 black-color white-shadow'} pag-boton pointer scale red-pk p-2 radius-2 width-content justify-self-center border-4`} onClick={PaginaAnterior}>Pagina Anterior</button>
                <p className={`${isDark? 'border-color-2 white-color black-shadow' : 'border-color-1 black-color white-shadow'} pag pag-boton red-pk p-2 size-4 radius-2 width-content justify-self-center border-4  aling-content-center `}>{pag}</p>
                <button className={`${isDark? 'border-color-2 white-color black-shadow' : 'border-color-1 black-color white-shadow'} pag-boton pointer scale red-pk p-2 radius-2 width-content justify-self-center border-4`}  onClick={PaginaSiguente}>Pagina Siguente</button>
            </div>
        </section >
    )

    
};