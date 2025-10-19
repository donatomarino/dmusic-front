import React, { createContext, useState } from "react";
import { SongContextType, SongProviderProps, SongType } from "../types/types";

export const SongContext = createContext<SongContextType>({} as SongContextType);

export const SongProvider: React.FC<SongProviderProps> = ({ children }) => {
  const [song, setSong] = useState<SongType[]>([
    {
      url: "",
      title: "",
      tags: [""],
    },
  ]);

  const toggleSong = (value: SongType[]) => {
    setSong(value);
  };

  return (
    <SongContext.Provider value={{ song, toggleSong }}>
      {children}
    </SongContext.Provider>
  );
};
