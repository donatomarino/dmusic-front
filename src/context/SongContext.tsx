import React, { createContext, useRef, useState, useCallback } from "react";
import { SongContextType, SongProviderProps, SongType } from "../types/types";
import AudioPlayer from "react-h5-audio-player";

export const SongContext = createContext<SongContextType>({} as SongContextType);

export const SongProvider: React.FC<SongProviderProps> = ({ children }) => {
  const [song, setSong] = useState<SongType[]>([
    {
      url: "",
      title: "",
      tags: [""],
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const playerRef = useRef<AudioPlayer>(null);

  // Función para resetear el reproductor
  const resetPlayer = useCallback(() => {
    setSong([]);
    setCurrentIndex(0);
  }, []);

  // Cuando se elimina el token, resetea el reproductor
  window.addEventListener('tokenRemoved', resetPlayer);

  // Actualiza la lista de canciones
  const toggleSong = (value: SongType[]) => {
    setSong(value);
    setCurrentIndex(0);
  };

  // Canción siguiente
  const playNext = useCallback(() => {
    if (song.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % song.length);
  }, [song]);

  // Canción anterior
  const playPrev = useCallback(() => {
    if (song.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + song.length) % song.length);
  }, [song]);

  return (
    <SongContext.Provider value={{ song, toggleSong, currentIndex, playNext, playPrev, playerRef }}>
      {children}
    </SongContext.Provider>
  );
};