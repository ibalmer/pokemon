import React from 'react';
import { Routes, Route, Link, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

import { EquipoProvider } from './Providers/Favoritos';

import { ModoProvider } from './Providers/Modo';
import { CambiarModo } from './components/CambiarModo/CambiarModo';


/*---Componentes---*/ 
import { Header } from './components/Header/Header';
import { Buscador } from './components/Buscador/Buscador';
import { ListaPokemon } from './components/ListaPokemon/ListaPokemon.'
import { Pokemon } from './components/Pokemon/Pokemon';
import { ListaTipos } from './components/ListaTipos/ListaTipos'
import { Footer } from './components/Footer/Footer';
import { Equipo } from './components/Equipo/Equipo';
import { Tipos } from './components/Tipos/Tipos';

/*---Estilos---*/
import './root.css';
import './App.css'


function App() {

  const [buscado, setBuscado] = useState();
  const navegador = useNavigate();
  let LanzarBusqueda = (value) => { setBuscado(value); }

  useEffect(() => {
      if(buscado != undefined) { navegador('/pokemon/' + buscado); }
  },[buscado]);
  
  return (
    <EquipoProvider>
      <ModoProvider>
        <div className='flex flex-between align-center height-100p m-bottom-4 gray'>
          <Header/>
          <Buscador LanzarBusqueda={LanzarBusqueda}/>
          <CambiarModo/> 
        </div>
        
        
        <Routes>
          <Route path='/' element={ <ListaPokemon /> }/>
          <Route path='/pokemon/:id' element={ <Pokemon /> }/>
          <Route path='/tipos' element={<Tipos />}/>
          <Route path='/tipos/:tipo' element ={ <ListaTipos/>} />
          <Route path='/equipo' element ={ <Equipo/>} />
        </Routes>
        <Footer/>
      </ModoProvider>
    </EquipoProvider>
  )
}

export default App
