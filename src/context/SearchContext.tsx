import React, { createContext, useState, ReactNode } from 'react';
import { DataSongs, SearchContextType, SearchProviderProps } from '../types/types';

export const SearchContext = createContext<SearchContextType>({
  search: [],
  toggleSearch: () => {},
});

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [search, setSearch] = useState<DataSongs[]>([]);

  const toggleSearch = (value: DataSongs[]) => {
    setSearch(value);
  };

  return (
    <SearchContext.Provider value={{ search, toggleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
