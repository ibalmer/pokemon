import { useEffect, useState, useTransition } from "react";
import { EvoImagenes } from "./EvoImagenes/Evoimagenes";
import './Evoluciones.css'

export function Evoluciones(pkmnUrl) {

    const [evo, setEvo] = useState();
    const SPC_URL = pkmnUrl.pkmnUrl;
    
    

    let CallEvo = async () => {
        let response = await fetch(SPC_URL);
        let info = await response.json();

        setEvo(info)
    };
    useEffect(() => {
        CallEvo();
    },[pkmnUrl]);

    
    const [evoChain, setEvochain] = useState();
    const CHAIN_URL = (evo && evo.evolution_chain.url)

    let CallChain = async () => {
        let response = await fetch(CHAIN_URL);
        let info = await response.json();

        setEvochain(info)
    };
    useEffect(() => {
        CallChain();
    },[evo]);
    
    return (
        <section className="evoluciones">
            {evoChain &&(
                <>
                    {evoChain && evoChain.chain && (
                        <div>
                            <h2>{evoChain.chain.species.name}</h2>
                            <EvoImagenes pkmnUrl={evoChain.chain.species.url} />
                        </div>
                    )}
                        
                    {evoChain.chain.evolves_to.length > 0 && (
                        <>
                            {evoChain.chain.evolves_to.map((evolution, index) => (
                                <div key={index}>
                                    <h2>{evolution.species.name}</h2>  
                                    <EvoImagenes pkmnUrl={evolution.species.url} />
                                </div>   
                            ))}
                        </>
                    )}

                    {evoChain.chain.evolves_to.length > 0 && evoChain.chain.evolves_to[0].evolves_to.length > 0 && evoChain.chain.evolves_to[0].evolves_to[0] && (
                        <div>
                            <h2>{evoChain.chain.evolves_to[0].evolves_to[0].species.name}</h2>
                            <EvoImagenes pkmnUrl = {evoChain.chain.evolves_to[0].evolves_to[0].species.url}/>
                        </div>
                    )}
                            
                </>          
            )}      
        </section>
    );
    };
    
   