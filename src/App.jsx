import { Routes, Route, Link, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
/*---Componentes---*/ 
import { Header } from './components/Header/Header';
import { Buscador } from './components/Buscador/Buscador';
import { ListaPokemon } from './components/ListaPokemon/ListaPokemon.'
import { Pokemon } from './components/Pokemon/Pokemon';
import { Tipos } from './components/Tipos/Tipos'
/*---Estilos---*/
import './App.css'


function App() {
  
  const [buscado, setBuscado] = useState();
  const navegador = useNavigate();
  let LanzarBusqueda = (value) => { setBuscado(value); }

  useEffect(() => {
      if(buscado != undefined) { navegador('/pokemon/' + buscado); }
  },[buscado]);
  
  return (
    <>
      <div className='header'>
        <Header/>
        <Buscador LanzarBusqueda={LanzarBusqueda}/>
      </div>
      
      
      <Routes>
        <Route path='/' element={ <ListaPokemon /> }/>
        <Route path='/pokemon/:id' element={ <Pokemon /> }/>
        <Route path='/tipos/:tipo' element ={ <Tipos/>} />
      </Routes>
    </>
  )
}

export default App
