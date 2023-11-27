// YourContext.js
import React, { createContext, useContext, useState } from 'react';

const YourContext = createContext();

export const YourProvider = ({ children }) => {
  const [isStretched, setIsStretched] = useState(false);

  const toggleStretched = () => {
    setIsStretched((prev) => !prev);
  };

  return (
    <YourContext.Provider value={{ isStretched, toggleStretched }}>
      {children}
    </YourContext.Provider>
  );
};

export const useYourContext = () => {
  return useContext(YourContext);
};
