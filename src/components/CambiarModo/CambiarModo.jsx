import React, { useContext, useEffect, useState } from 'react';
import { ModoContext } from '../../Providers/Modo';
import './CambiarModo.css'

export function CambiarModo() {

  const { isDark, DarkClass } = useContext(ModoContext);
  const [modeImg, setModoImg] = useState();
  useEffect(() => {
    document.body.className = isDark? 'black-color black white-shadow' : 'white-color white black-shadow';
    setModoImg(isDark? 'electric' : 'dark')
  }, [isDark]);
  return (
    <button className={`${modeImg} boton-modo flex flex-center width-50p height-50p p-1 m-right-4 scale p-2 radius-2 border-4 border-color-1 white-color black-shadow`} onClick={DarkClass}>
        <img className='width-100 height-100' src={`/${modeImg}.svg`} alt="" />
    </button>
  );
};


