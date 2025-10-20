import React, { createContext, useState } from 'react';
import { DataSongs, SearchContextType, SearchProviderProps } from '../types/types';

export const SearchContext = createContext<SearchContextType>({
  search: [],
  toggleSearch: () => {},
  error: "",
  setError: (msg: string) => {},
});

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [search, setSearch] = useState<DataSongs[]>([]);
  const [error, setError] = useState<string>('');

  const toggleSearch = (value: DataSongs[]) => {
    setSearch(value);
  };

  return (
    <SearchContext.Provider value={{ search, toggleSearch, error, setError }}>
      {children}
    </SearchContext.Provider>
  );
};
