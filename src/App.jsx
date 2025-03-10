import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { EquipoProvider } from './Providers/Favoritos';
import { ModoProvider } from './Providers/Modo';

/*---Componentes---*/ 
import { Header } from './components/Header/Header';
import { ListaPokemon } from './components/ListaPokemon/ListaPokemon'
import { Pokemon } from './components/Pokemon/Pokemon';
import { ListaTipos } from './components/ListaTipos/ListaTipos';
import { Footer } from './components/Footer/Footer';
import { Equipo } from './components/Equipo/Equipo';
import { Tipos } from './components/Tipos/Tipos';

/*---Estilos---*/
import './root.css';
import './App.css';


export function App() {

  return (
    <EquipoProvider>
      <ModoProvider>
       <Header/>
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
};