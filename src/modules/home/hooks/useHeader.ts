import { useContext, useEffect, useState } from "react";
import { ComponentContext } from "../../../context/ComponentContext";
import { homeServices } from "../services/homeServices";
import { SearchContext } from "../../../context/SearchContext";
import { useNavigate } from "react-router-dom";

export const useHeader = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState<string>('');
  const { setError, toggleSearch } = useContext(SearchContext);
  const { toggleComponent } = useContext(ComponentContext);
  const [user, setUser] = useState<string>('');

  useEffect(() => {
    setUser(localStorage.getItem('initial_name') || '');
  }, []);

  const handleSong = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (search.length > 0) {
      toggleComponent(3);
      try {
        const res = await homeServices.searchSong(search);
        console.log(res);
        if (res.success) {
          toggleSearch(res.data);
          setError('');
        } else {
          setError(`La canción ${search} no está disponible al momento.`);
          toggleSearch([]);
        }
      } catch (e) {
        console.error('Ha habido un problema en la solicitud', e);
      }
    }
  }
  return { setSearch, handleSong, user, navigate, search, menuOpen, setMenuOpen }; 
}