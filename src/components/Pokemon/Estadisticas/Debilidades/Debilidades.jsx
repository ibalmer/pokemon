import './Debilidades.css'
import { useState, useEffect } from 'react';

export function Debilidades(url) {
    console.log(url);
    const [list, setList] = useState([]);

    useEffect(() => {
        // Verifica que la URL no esté ya en la lista
        setList(prevList => {
            if (!prevList.includes(url)) {
                return [...prevList, url];
            }
            return prevList;
        });
    }, [url]);

    console.log(list);
}
