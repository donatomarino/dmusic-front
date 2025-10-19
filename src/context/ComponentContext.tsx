import { createContext, useState, ReactNode } from 'react';

// Definimos el tipo del contexto
interface ComponentContextType {
  component: number;
  toggleComponent: (newComponent: number) => void;
}

// Creamos el contexto 
export const ComponentContext = createContext<ComponentContextType>({
  component: 0,
  toggleComponent: () => { },
});

// Definimos las props del provider
interface ComponentProviderProps {
  children: ReactNode;
}

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
