import React, { createContext, useState, useEffect } from 'react';

export const ModoContext = createContext();

export const ModoProvider = ({ children }) => {

  const [isDark, setIsDark] = useState(false);

  
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);
  


  function DarkClass() {
    setIsDark(prevState => !prevState);
  };

  return (
    <ModoContext.Provider value={{ isDark, DarkClass }}>
      {children}
    </ModoContext.Provider>
  );
};