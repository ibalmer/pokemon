import { CgPokemon } from "react-icons/cg";
import './Footer.css'
export function Footer(){
    return(
        <div className="footer flex flex-center align-center gap-3  gray p-1 m-top-6 width-100">
            <CgPokemon size={50} />
            <div className="flex column">
                <h6 className="text-center">Ivan Balmer</h6>
                <p className="text-center">Proyecto Creado con PokeAPI</p>
            </div>
            <CgPokemon size={50} />
        </div>
    )
}