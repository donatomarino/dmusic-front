import { VerifiedAuth } from "../../../types/types";
import instanceAxios from '../../../api/APIUtils';
import { toast } from "react-toastify";


export const useSearch = (auth: VerifiedAuth) => {
  const { search } = useContext(SearchContext);
  const { message } = useContext(MessageContext);
  const { login } = useContext(LoginContext);
  const { fetchData } = useFetch();
  const { toggleSong } = useContext(SongContext);

  const handleSong = async (id: string) => {
    if (auth) {
      try {
        const res = await fetchData({
          endpoint: '/play-song',
          method: 'POST',
          body: { id }
        })

        if (response[0].length > 0) {
          const formattedTracks = [];
          response.map(e => {
            e.map(e => {
              formattedTracks.push({
                url: `http://localhost:5001/${e.url}`,
                title: `${e.title}`,
                tags: ["music"]
              });
            });
          });

          toggleSong(formattedTracks);
        }
      } catch (e) {
        console.log('Ha habido un problema en la solicitud: ', e);
      }
    } else {
      toast.error('Debes iniciar sesión para poder reproducir música');
    }
  }

  const handleFavorite = async (id) => {
    try {
      const user = localStorage.getItem('token');
      const id_u = jwtDecode(user).id_user;
      const formData = {
        id_user: id_u,
        id_song: id
      }

      const response = await fetchData({
        endpoint: '/add-favoritesongs',
        method: 'POST',
        body: formData
      });

      if (response.length === 0) {
        toast.error('La canción ya está en tus favoritos!');
      } else {
        toast.success('Canción añadida a favoritos!');
      }
    } catch (e) {
      console.log('Ha habido un problema en la solicitud: ', e);
    }
  }

  return {}
}