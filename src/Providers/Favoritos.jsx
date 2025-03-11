import { createContext, useState, useEffect} from 'react';

export const EquipoContext = createContext();

export const EquipoProvider = ({ children }) => {
    
    const [equipo, setEquipo] = useState(() => {
        const savedEquipo = localStorage.getItem('equipo');
        return savedEquipo ? JSON.parse(savedEquipo) : [];
    });

    const [pc, setPc] = useState(() => {
        const savedPc = localStorage.getItem('pc');
        return savedPc === true || savedPc ? JSON.parse(savedPc) : [];
    });

    useEffect(() => {
        localStorage.setItem('equipo', JSON.stringify(equipo));
    }, [equipo]);

    useEffect(() => {
        localStorage.setItem('pc', JSON.stringify(pc));
    }, [pc]);
    
    
    
    function AgregarPkmn(id) {
        setEquipo(prevEquipo => {
            if (!prevEquipo.includes(id) && prevEquipo.length < 6 && Array.isArray(pc) && !pc.includes(id)) {
                return [...prevEquipo, id];
            } else {
                AgregarPc(id)               
                return prevEquipo;
            };
        });
    };
    
    function MoverPkmn(id) {
        setEquipo(prevEquipo => {
            if (!prevEquipo.includes(id) && prevEquipo.length < 6) {
                CerrarFoco()
                return [...prevEquipo, id];
            } else {
                AgregarPc(id)               
                return prevEquipo;
            };
        });
    };
    
    function AgregarPc(id) {
        setPc(prevPc => {
            if (Array.isArray(prevPc) && !prevPc.includes(id) && prevPc.length < 40 && !equipo.includes(id))  {
                return [...prevPc, id];
            }
            return prevPc;
        });
    };
    
    function MoverPc(id) {
        setPc(prevEquipo => {
            if (!prevEquipo.includes(id) && prevEquipo.length < 40) {
                CerrarFoco()
                return [...prevEquipo, id];
            } else {
                AgregarPkmn(id)               
                return prevEquipo;
            };
        });
    };
    
    function EliminarPkmn(id){
        setEquipo((prevLista) => prevLista.filter((elemento) => elemento !== id));
    };
    
    function EliminarPc(id){
        setPc((prevLista) => prevLista.filter((elemento) => elemento !== id));
    };
    
    const [msjPc, setMsjPc] = useState(false)
    
    useEffect(() => {
        if (msjPc) {
            const timer = setTimeout(() => {
                setMsjPc(false); 
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [msjPc, equipo, pc]);

    const [msjFull, setMsjFull] = useState(false)
    
    useEffect(() => {
        if (msjFull) {
            const timer = setTimeout(() => {
                setMsjFull(false); 
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [msjFull]);
    
    
    

    const [pkmnData, setPkmnData] = useState(0);
 
    function VerPkmn(id){  
        setPkmnData(id)
    };

    function VaciarPkmn(){
        setPkmnData(undefined)
    };

    const [foco, setFoco] = useState(0);

    function Foco(id) {
        setFoco(id)
    };

    function CerrarFoco(){
        setFoco(0)
    };


    return (
        <EquipoContext.Provider value={{ equipo, AgregarPkmn, pc, AgregarPc, EliminarPkmn, EliminarPc, MoverPkmn, MoverPc, VerPkmn, VaciarPkmn, pkmnData, foco, setFoco, Foco, msjPc, setMsjPc, msjFull, setMsjFull }}>
            {children}
        </EquipoContext.Provider>
    );
};
