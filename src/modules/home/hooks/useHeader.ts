import { useContext, useEffect, useState } from "react";
import { ComponentContext } from "../../../context/ComponentContext";
import { homeServices } from "../services/HomeServices";
import { SearchContext } from "../../../context/SearchContext";
import { useNavigate } from "react-router-dom";

export const useHeader = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { toggleComponent } = useContext(ComponentContext);
  const [user, setUser] = useState<string>('');
  const {toggleSearch} = useContext(SearchContext);

  useEffect(() => {
    setUser(localStorage.getItem('initial_name') || '');
  }, []);

  // useEffect(() => {
  //   // efecto más robusto: trim para no contar espacios
  //   if (search.length === 0) {
  //     toggleComponent(2);
  //   }
  // }, [search, toggleComponent]);

  const handleSong = async (e: React.ChangeEvent<HTMLFormElement>): Promise<void> => {

    if (search.length > 0) {
      toggleComponent(3);
      try {
        const res = await homeServices.searchSong(search);
        if (res.success) {
          toggleSearch(res.data);
          setError('');
        } else {
          setError(`La canción ${search} no está disponible al momento.`);
        }
      } catch (e) {
        console.error('Ha habido un problema en la solicitud', e);
      }
    }
  }
  return { setSearch, handleSong, error, user, navigate }
}