import { useEffect, useState} from "react";
import { EvoImagenes } from "./EvoImagenes/Evoimagenes";
import './Evoluciones.css'

export function Evoluciones(pkmnUrl) {

    const [evo, setEvo] = useState();
    const SPC_URL = pkmnUrl.pkmnUrl;

    let CallEvo = async () => {
        let response = await fetch(SPC_URL);
        let info = await response.json();
        setEvo(info);
    };

    useEffect(() => {
        CallEvo();
    }, [pkmnUrl]);

    const [evoChain, setEvochain] = useState();
    const CHAIN_URL = (evo && evo.evolution_chain.url);

    let CallChain = async () => {
        let response = await fetch(CHAIN_URL);
        let info = await response.json();
        setEvochain(info);
    };

    useEffect(() => {
        CallChain();
    }, [evo]);

    return (
        <>
            {evoChain && (
                <section className="evo-container flex flex-center wrap radius-2 p-block-2 gray m-block-3 shadow-box">
                    {evoChain.chain && (
                        <>
                            <div className="evo-box flex column align-center">
                                <h6 className="capitalize">{evoChain.chain.species.name}</h6>
                                <EvoImagenes pkmnUrl={evoChain.chain.species.url} />
                            </div>
                            {evoChain.chain.evolves_to.map((evolution, index) => (
                                <div className="evo-box flex column align-center" key={index}>
                                    <h6 className="capitalize">{evolution.species.name}</h6>
                                    <EvoImagenes pkmnUrl={evolution.species.url} />
                                </div>
                            ))}
                            {evoChain.chain.evolves_to[0] && evoChain.chain.evolves_to[0].evolves_to.map((subEvolution, index) => (
                                <div className="evo-box flex column align-center" key={index}>
                                    <h6 className="capitalize">{subEvolution.species.name}</h6>
                                    <EvoImagenes pkmnUrl={subEvolution.species.url} />
                                </div>
                            ))}
                        </>
                    )}
                </section>
            )}
        </>
    );
};

    
   