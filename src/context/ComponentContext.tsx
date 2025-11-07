import { createContext, useState } from 'react';
import { ComponentContextType, ComponentProviderProps } from '../types/types';

// Creamos el contexto 
export const ComponentContext = createContext<ComponentContextType>({
  component: 0,
  toggleComponent: () => { },
});


// Componente Provider
export const ComponentProvider: React.FC<ComponentProviderProps> = ({ children }) => {
  const [component, setComponent] = useState<number>(0);

  const toggleComponent = (newComponent: number) => {
    setComponent(newComponent);
  };

  return (
    <ComponentContext.Provider value={{ component, toggleComponent }
    }>
      {children}
    </ComponentContext.Provider>
  );
};
